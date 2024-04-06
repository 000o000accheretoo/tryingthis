function downloadZip() {
    // Create an anchor element
    var link = document.createElement("a");
    
    // Set the href attribute to the path of the zip file
    link.href = "mods/mods.zip";
    
    // Set the download attribute to the file name you want the user to see
    link.download = "mods.zip";
    
    // Append the anchor element to the body
    document.body.appendChild(link);
    
    // Trigger a click event on the anchor element
    link.click();
    
    // Remove the anchor element from the body
    document.body.removeChild(link);
}
