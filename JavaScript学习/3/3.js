/**
 * Created by Crazy_King on 16/9/5.
 */

// alert(typeof document.getElementById("purchases"));

// alert(document.getElementsByTagName("li").length);

// var items = document.getElementsByTagName("li");
// for (var i = 0; i < items.length; i++){
//     alert(items[i].getAttribute("title"));
// }

var paras = document.getElementsByTagName("p");
for (var i = 0; i < paras.length; i++){
    var test = paras[i].getAttribute("title");
    if(test){
        alert(test);
    }
}
