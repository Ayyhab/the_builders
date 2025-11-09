export async function getUserPermission() {
  const amplitude = window.amplitude.getInstance();
  amplitude.init("9641e63c32c15d560fc464c41994e082");

  return new Promise((resolve, reject) => {
    // Using navigator.mediaDevices.getUserMedia to request microphone access
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        // Stop the tracks to prevent the recording indicator from being shown
        stream.getTracks().forEach(function (track) {
          track.stop();
        });
        amplitude.logEvent(
          "Microphone Access Asked",
          { status: "granted", page: "SidePanel" },
          () => {
            localStorage.setItem("isGranted", "1");
            resolve();
            window.close();
          }
        );
      })
      .catch((error) => {
        console.error("Error requesting microphone permission", error);
        amplitude.logEvent(
          "Microphone Access Asked",
          {
            status: error.toString(),
            page: "SidePanel",
          },
          () => {
            localStorage.setItem("isGranted", "0");
            reject(error);
            window.close();
          }
        );
      });
  });
}

if (!localStorage.getItem("isGranted")) {
  // Call the function to request microphone permission
  getUserPermission();
}
