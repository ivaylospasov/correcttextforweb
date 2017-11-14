function fix() {
    "use strict";
    /*jslint browser:true */
    // Sample comment
    var getForm, content, corrected, firstCode, i, myCode;
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
    document.getElementById("demo").innerHTML = corrected;
}
