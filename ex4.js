function couleurAleatoire() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

document.querySelectorAll("#liste li").forEach(li => {
    li.addEventListener("click", function() {
        this.style.color = couleurAleatoire();
    });
});