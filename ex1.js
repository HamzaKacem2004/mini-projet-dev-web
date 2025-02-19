let button=document.querySelector(".button");
button.addEventListener("click",()=>{
    startGame();    
})
function startGame() {
    let levels = {
        "F": { max: 10, attempts: 5 },
        "I": { max: 50, attempts: 7 },
        "D": { max: 100, attempts: 10 }
    };
    let level = prompt("Choisissez un niveau : Facile(F), Intermédiaire(I), Difficile(D)").trim();
    if (!levels[level]) {
        alert("Niveau invalide. Veuillez recommencer.");
        return startGame();
    }
    let max=levels[level].max ;
    let attempts = levels[level].attempts;
    let targetNumber = Math.floor(Math.random() * max) + 1;
    for (let i = 0; i < attempts; i++) {
        let guess = parseInt(prompt(`Devinez un nombre entre 1 et ${max} (${attempts - i} essais restants)`), 10);
        
        if (isNaN(guess) || guess < 1 || guess > max) {
            alert("Veuillez entrer un nombre valide.");
            i--;
            continue;
        }
        if (guess === targetNumber) {
            alert("Félicitations ! Vous avez trouvé le chiffre caché.");
            return Replay();
        } else if (guess < targetNumber) {
            alert("Trop petit !");
        } else {
            alert("Trop grand !");
        }
    }
    alert("Désolé, vous avez épuisé vos tentatives. Le chiffre caché était " + targetNumber);
    Replay();
}
function Replay() {
    if (confirm("Voulez-vous rejouer ?")) {
        startGame();
    }
}