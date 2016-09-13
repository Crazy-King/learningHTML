/**
 * Created by Crazy_King on 16/9/6.
 */
function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}

// function countBobyChildren() {
//     var bodyElement = document.getElementsByTagName("body")[0];
//     alert(bodyElement.childNodes.length);
// }
// window.onload = countBobyChildren;

function prepareGallery() {
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++)
        links[i].onclick = function() {
            return showPic(this);
        }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function'){
        window.onload = func;
    } else {
        window.onload = function () {
            onload();
            func();
        }
    }
}
addLoadEvent(prepareGallery());