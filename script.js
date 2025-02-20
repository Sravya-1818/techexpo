function copyCode() {
    const codeBlock = document.getElementById("code-block").innerText;
    navigator.clipboard.writeText(codeBlock).then(() => {
        alert("Code copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("myVideo");

    // Ensure video does NOT autoplay by default
    video.pause();

    video.addEventListener("mouseenter", () => {
        video.play();
    });

    video.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;  // Resets to start when hovered out
    });
});
