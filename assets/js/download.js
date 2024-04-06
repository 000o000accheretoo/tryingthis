function downloadZip() {
    var link = document.createElement("a");
    link.href = "mods/mods.zip";
    link.target = "_blank"; // Open in a new tab/window
    link.style.display = "none"; // Hide the link
    document.body.appendChild(link);
    link.click(); // Simulate click
    document.body.removeChild(link);
}
