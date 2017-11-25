function fix() {
    "use strict";
    /*jslint browser:true */
    var allBlanks, allSinhrons, allTexts, allVideos, getForm, checkBlank, checkSinhron, checkText, checkVideo, content, corrected, firstCode, i, myCode, signsOld, signsNew, word;
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
        allBlanks = ["БЛАНК: ", "БЛАНК:", "БЛАНК"];
        for (i = 0; i < allBlanks.length; i++) {
            word = new RegExp(allBlanks[i], "g");
            corrected = corrected.replace(word, "");
        }
        // word = new RegExp("БЛАНК: ", "g");
        // corrected = corrected.replace(word, "");
    }
    checkSinhron = document.getElementById("sinhron").checked;
    if (checkSinhron === true) {
        allSinhrons = ["СИНХРОН: ", "СИНХРОН:", "СИНХРОН", "СИНХ: ", "СИНХ:", "СИНХ", "СНХ: ", "СНХ:", "СНХ", "СХН: ", "СХН:", "СХН", "СХР: ", "СХР:", "СХР"];
        for (i = 0; i < allSinhrons.length; i++) {
            word = new RegExp(allSinhrons[i], "g");
            corrected = corrected.replace(word, "");
        }
        // word = new RegExp("СИНХРОН: ", "g");
        // corrected = corrected.replace(word, "");
    }
    checkText = document.getElementById("text").checked;
    if (checkText === true) {
        allTexts = ["ТЕКСТ: ", "ТЕКСТ:", "ТЕКСТ"];
        for (i = 0; i < allTexts.length; i++) {
            word = new RegExp(allTexts[i], "g");
            corrected = corrected.replace(word, "");
        }
        // word = new RegExp("ТЕКСТ: ", "g");
        // corrected = corrected.replace(word, "");
    }
    checkVideo = document.getElementById("video").checked;
    if (checkVideo === true) {
        allVideos = ["ВИДЕО: ", "ВИДЕО:", "ВИДЕО"];
        for (i = 0; i < allVideos.length; i++) {
            word = new RegExp(allVideos[i], "g");
            corrected = corrected.replace(word, "");
        }
        // word = new RegExp("ВИДЕО: ", "g");
        // corrected = corrected.replace(word, "");
    }
    document.getElementById("demo").innerHTML = corrected;
}
