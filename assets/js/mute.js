function toggleMute() {

    var video=document.getElementById("VUD")
    
    if(video.muted){
        video.muted = false;
    } else {
        video.muted = true;
    }
    
    }
    