import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const DEFAULT_MODEL =
  process.env.OPENAI_TRANSCRIPTION_MODEL ?? "gpt-4o-mini-transcribe";
const DEFAULT_ENDPOINT = "https://api.openai.com/v1/audio/transcriptions";

async function proxyToOpenAI({
  file,
  language,
  source,
}: {
  file: Blob;
  language?: string;
  source?: string;
}) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not configured on the server");
  }

  const formData = new FormData();
  formData.append("model", DEFAULT_MODEL);
  formData.append("response_format", "json");
  formData.append("temperature", "0");
  if (language) {
    formData.append("language", language);
  }
  if (source) {
    formData.append("source", source);
  }
  formData.append(
    "file",
    file,
    file instanceof File ? file.name : "system-audio.webm"
  );

  const response = await fetch(DEFAULT_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "OpenAI transcription failed");
  }

  return response.json();
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const language = formData.get("language")?.toString();
    const source = formData.get("source")?.toString();

    if (!(file instanceof Blob)) {
      return NextResponse.json(
        { error: "A valid audio blob was not provided" },
        { status: 400 }
      );
    }

    const result = await proxyToOpenAI({ file, language, source });
    return NextResponse.json({ text: result.text ?? "" });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to transcribe the audio";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
