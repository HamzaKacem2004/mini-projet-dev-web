document.getElementById("colorPicker").addEventListener("input", function() {
    document.getElementById("paragraph").style.color = this.value;
});

document.getElementById("fontSizePicker").addEventListener("input", function() {
    document.getElementById("paragraph").style.fontSize = this.value + "px";
});

document.getElementById("fontSelector").addEventListener("change", function() {
    document.getElementById("paragraph").style.fontFamily = this.value;
});