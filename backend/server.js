import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import admin from "firebase-admin";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ----------------------
// 🔥 Initialize Firebase
// ----------------------
const configCandidates = [
  path.resolve(__dirname, "fbconfig.json"),
  path.resolve(__dirname, "..", "fbconfig.json"),
  path.resolve(__dirname, "..", "..", "fbconfig.json"),
  process.env.FIREBASE_CONFIG_PATH,
  process.env.GOOGLE_APPLICATION_CREDENTIALS,
].filter(Boolean);

const configPath = configCandidates.find((candidate) =>
  fs.existsSync(candidate)
);

if (!configPath) {
  throw new Error(
    "fbconfig.json not found. Place it next to server.js or set FIREBASE_CONFIG_PATH/GOOGLE_APPLICATION_CREDENTIALS."
  );
}

const serviceAccount = JSON.parse(fs.readFileSync(configPath, "utf8"));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:
      process.env.FIREBASE_DATABASE_URL ||
      "https://builders-ddd51.firebaseio.com",
  });
}

const db = admin.firestore();
console.log("✅ Firebase Admin initialized successfully!");

const toPlainDoc = (doc) => ({
  id: doc.id,
  ...doc.data(),
});

// ----------------------
// 📦 CRUD API ROUTES
// ----------------------

// 🟢 CREATE a contact/deal
app.post("/api/deals", async (req, res) => {
  try {
    const {
      name,
      company,
      role,
      email,
      phone,
      summary,
      score,
      deal_stage,
      lastInteraction,
      key_quote,
      conv_history = [],
      tasks = [],
    } = req.body;

    if (!name || !deal_stage) {
      return res
        .status(400)
        .json({ error: "name and deal_stage are required." });
    }

    const payload = {
      name,
      company: company ?? null,
      role: role ?? null,
      email: email ?? null,
      phone: phone ?? null,
      summary: summary ?? "",
      score: score ?? 0,
      deal_stage,
      lastInteraction: lastInteraction
        ? new Date(lastInteraction)
        : new Date(),
      key_quote: key_quote ?? "",
      conv_history, // array of summary strings
      tasks, // array of task objects
      updatedAt: new Date(),
    };

    const docRef = await db.collection("contacts").add(payload);
    const snapshot = await docRef.get();
    res.json(toPlainDoc(snapshot));
  } catch (err) {
    console.error("❌ Failed to create contact:", err);
    res.status(500).json({
      error: "Unable to create contact.",
      details: err?.message ?? "Unknown error",
    });
  }
});

// 🟡 READ all contacts (with optional activity logs)
app.get("/api/deals", async (_req, res) => {
  try {
    const contactsSnap = await db
      .collection("contacts")
      .orderBy("updatedAt", "desc")
      .get();

    const contacts = contactsSnap.docs.map(toPlainDoc);
    res.json(contacts);
  } catch (err) {
    console.error("❌ Failed to fetch contacts:", err);
    res.status(500).json({
      error: "Unable to fetch contacts.",
      details: err?.message ?? "Unknown error",
    });
  }
});

// 🔵 UPDATE contact/deal (includes LLM summary appending)
app.put("/api/deals/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      company,
      role,
      email,
      phone,
      summary,
      score,
      deal_stage,
      key_quote,
      llm_summary, // this will be appended to conv_history
      tasks,
    } = req.body;

    const contactRef = db.collection("contacts").doc(id);
    const existing = await contactRef.get();

    if (!existing.exists) {
      return res.status(404).json({ error: "Contact not found." });
    }

    const updates = {
      ...(name ? { name } : {}),
      ...(company ? { company } : {}),
      ...(role ? { role } : {}),
      ...(email ? { email } : {}),
      ...(phone ? { phone } : {}),
      ...(summary ? { summary } : {}),
      ...(typeof score === "number" ? { score } : {}),
      ...(deal_stage ? { deal_stage } : {}),
      ...(key_quote ? { key_quote } : {}),
      ...(tasks ? { tasks } : {}),
      updatedAt: new Date(),
    };

    // Append new LLM summary if provided
    if (llm_summary) {
      updates.conv_history = admin.firestore.FieldValue.arrayUnion(
        llm_summary
      );
      updates.lastInteraction = new Date();
    }

    await contactRef.update(updates);

    const updated = await contactRef.get();
    res.json(toPlainDoc(updated));
  } catch (err) {
    console.error("❌ Failed to update contact:", err);
    res.status(500).json({
      error: "Unable to update contact.",
      details: err?.message ?? "Unknown error",
    });
  }
});

// 🧾 Fetch audit logs (if you want to keep them)
app.get("/api/audit", async (_req, res) => {
  try {
    const logsSnap = await db
      .collection("activityLogs")
      .orderBy("timestamp", "desc")
      .get();

    const logs = logsSnap.docs.map(toPlainDoc);
    res.json(logs);
  } catch (err) {
    console.error("❌ Failed to fetch audit logs:", err);
    res.status(500).json({
      error: "Unable to fetch audit logs.",
      details: err?.message ?? "Unknown error",
    });
  }
});

// 🩺 Health check
app.get("/", (_, res) => res.send("CRM API running with conv_history summaries ✅"));

// ----------------------
// 🚀 Start Server
// ----------------------
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
