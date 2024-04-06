var myText = document.getElementById("bounceTxt").innerHTML;
var wrapText = "";

for (var i = 0; i < myText.length; i++) {
    wrapText += "<span class='bounce-me'>" + myText.charAt(i) + "</span>";
}

document.getElementById("bounceTxt").innerHTML = wrapText;
