const listenBtn = document.getElementById("listenBtn");
const statusSpan = document.getElementById("status");
let isListening = false;

listenBtn.addEventListener("click", async () => {
  isListening = !isListening;

  if (isListening) {
    // Execute script in active tab
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: startRecording,
    });

    // Update UI
    listenBtn.textContent = "Stop Listening";
    statusSpan.textContent = "Listening";
    statusSpan.style.color = "limegreen";
  } else {
    // Stop "recording" (you can add stop logic here later)
    listenBtn.textContent = "Start Listening";
    statusSpan.textContent = "Idle";
    statusSpan.style.color = "#facc15"; // yellow-300
  }
});

function startRecording() {
  console.log("Pretending to record meeting audio...");
}
