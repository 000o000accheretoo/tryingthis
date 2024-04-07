var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

document.addEventListener('click', musicPlay);
window.onload = function() {
    blink();
    var promise = document.getElementById('player').play();
    if (promise !== undefined) {
        promise.then(_ => {
          
        }).catch(error => {
            document.getElementById('autoplay').style.display = 'inline'
        });
      }
}
function musicPlay() {
    document.getElementById('player').play();
    document.getElementById('autoplay').style.opacity = 0;
    document.removeEventListener('click', musicPlay);
}

function blink() {
    var f = document.getElementById('flashing');
    var isVisible = false;
    setInterval(function() {
        f.style.opacity = (isVisible ? 100 : 0);
       isVisible = !isVisible;
    }, 80);
 }

 
 

}
/*
     FILE ARCHIVED ON 20:36:46 Jul 14, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:57:00 Apr 05, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.928
  exclusion.robots: 0.108
  exclusion.robots.policy: 0.093
  cdx.remote: 0.083
  esindex: 0.012
  LoadShardBlock: 84.534 (3)
  PetaboxLoader3.datanode: 95.694 (4)
  load_resource: 396.486
  PetaboxLoader3.resolve: 331.376
*/