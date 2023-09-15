function toggleMute() {

    var video=document.getElementById("meow")
    
    if(video.muted){
        video.muted = false;
    } else {
        video.muted = true;
    }
    
    }
    