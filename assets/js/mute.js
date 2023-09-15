function toggleMute() {

    var video=document.getElementById("videoFrame")
    
    if(video.muted){
        video.muted = false;
    } else {
        video.muted = true;
    }
    
    }
    