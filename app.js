var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outPut = document.querySelector("#output");
// var serverUrl ="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverUrl ="https://api.funtranslations.com/translate/minion.json";

function errorHandler(error){
    console.log("error occured",error);
    alert("Somthing is wrong with the server try after some time");
}

function gettingUrl(text){
    return serverUrl + "?text=" + text;
}

function clickHandler() {
    fetch(gettingUrl(txtInput.value))
        .then(response => response.json())
        // .then(json => console.log(json.contents.translated))
        .then(json => outPut.innerText = json.contents.translated)
        .catch(errorHandler)
}



btnTranslate.addEventListener("click", clickHandler);