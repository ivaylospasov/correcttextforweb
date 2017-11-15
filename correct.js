function fix() {
    "use strict";
    /*jslint browser:true */
    // Sample comment
    var getForm, content, corrected, firstCode, i, myCode, sinhron, word;
    getForm = document.getElementById("formcorrect");
    content = getForm.elements["textraw"].value;
    corrected = content.replace(/(?:\r\n|\r|\n)/g, '<br>');
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
    sinhron = document.getElementById("sinhron").checked;
    if (sinhron === true) {
        word = new RegExp("СИНХРОН", "g");
        corrected = corrected.replace(word, "");
    }
    document.getElementById("demo").innerHTML = corrected;
}
