var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outPut = document.querySelector("#output");

function clickHandler() {
    outPut.innerText = "djhkjghslkgrlj " + txtInput.value;
}



btnTranslate.addEventListener("click", clickHandler);