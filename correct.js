function fix() {
    "use strict";
    /*jslint browser:true */
    var getForm, checkBlank, checkSinhron, checkText, checkVideo, content, corrected, firstCode, i, myCode, signsOld, signsNew, word;
    getForm = document.getElementById("formcorrect");
    content = getForm.elements["textraw"].value;
    corrected = content.replace(/(?:\r\n|\r|\n)/g, '<br>');
    signsOld = ["¤", " ,", " .", "„", "“"];
    signsNew = ["", ", ", ". ", "\"", "\""];
    corrected = corrected.replace(/¤/g, "");
    corrected = corrected.replace(/\./g, ". ");
    corrected = corrected.replace(/,/g, ", ");
    for (i = 0; i < 2; i += 1) {
        corrected = corrected.replace(/ {2}/g, " ");
    }
    corrected = corrected.replace(/ ,/g, ", ");
    corrected = corrected.replace(/ \./g, ". ");
    corrected = corrected.replace(/ \:/g, ": ");
    corrected = corrected.replace(/„/g, "\"");
    corrected = corrected.replace(/“/g, "\"");
    for (i = 0; i < 2; i += 1) {
        corrected = corrected.replace(/ {2}/g, " ");
    }
    for (i = 30; i > 0; i -= 1) {
        firstCode = "W" + i + ".*}";
        myCode = new RegExp(firstCode);
        corrected = corrected.replace(myCode, "");
    }
    // if (lfckv = document.getElementById("sinhron").checked) {
    //     console.log("Success");
    // }
    // REGEX all letters in word
    // (?=.*С)(?=.*Н)(?=.*Х).{3}
    checkBlank = document.getElementById("blank").checked;
    if (checkBlank === true) {
        word = new RegExp("БЛАНК: ", "g");
        corrected = corrected.replace(word, "");
    }
    checkSinhron = document.getElementById("sinhron").checked;
    if (checkSinhron === true) {
        word = new RegExp("СИНХРОН: ", "g");
        corrected = corrected.replace(word, "");
    }
    checkText = document.getElementById("text").checked;
    if (checkText === true) {
        word = new RegExp("ТЕКСТ: ", "g");
        corrected = corrected.replace(word, "");
    }
    checkVideo = document.getElementById("video").checked;
    if (checkVideo === true) {
        word = new RegExp("ВИДЕО: ", "g");
        corrected = corrected.replace(word, "");
    }
    document.getElementById("demo").innerHTML = corrected;
}
