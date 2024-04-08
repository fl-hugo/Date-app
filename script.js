let moveCount = 0;

function moveButton() {
    moveCount++;
    console.log(moveCount)

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const randomX = Math.random() * (windowWidth - 200);
    const randomY = Math.random() * (windowHeight - 40);

    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';

    if (moveCount === 5) {
        showMessage("Allez quoi, steuplé ! 😟");
        console.log("Prochain message : 10 tentatives")
    } else if (moveCount === 10) {
        showMessage("J'me suis pas cassé la tête à coder ça pour que tu dises non 😤");
        console.log("Prochain message : 20 tentatives")
    } else if (moveCount === 20) {
        showMessage("Arrête de jouer avec ce bouton et clique sur oui 😠");
        console.log("Prochain message : 30 tentatives")
    } else if (moveCount === 30) {
        showMessage("J'ai donc été si nul que ça dans la discussion ? 🤡");
        console.log("Prochain message : 35 tentatives")
    } else if (moveCount === 35) {
        showMessage("J'espérais que tu répondrais oui à la dernière question...");
        console.log("Prochain message : 50 tentatives")
    } else if (moveCount === 50) {
        showMessage("Bon ok, t'as gagné, moi j'abandonne 🙍‍♂️");
        console.log("Prochain message : 100 tentatives") 
    } else if (moveCount === 100) {
        showMessage("Si tu restes en espérant de nouveaux messages, désolé, celui-ci est le dernier !");
        console.log("Prochain message : 105 tentatives")
    } else if (moveCount === 105) {
        showMessage("Ok, j'ai menti, il y en a d'autres");
        console.log("Prochain message : 110 tentatives")
    } else if (moveCount === 110) {
        showMessage("D'ailleurs, si tu t'y connais un peu, tu peux voir à quelle tentative un nouveau message apparaîtra");
        console.log("Prochain message à 500 tentatives")
    } else if (moveCount === 500) {
        showMessage("Non là, vraiment, t'abuses 😭 Ça fait 500 fois que tu essaies de cliquer sur ce bouton, je pues à ce point ?");
        console.log("Prochain message : 1000 tentatives")
    } else if (moveCount === 1000) {
        showMessage("Je m'incline, respect à toi et à tes mille tentatives 🗿");
        console.log("Cette fois-ci, c'était vraiment le dernier message. Le bouton ne bouge plus, tu es libre de cliquer dessus ;)")
    } else if (moveCount === 1001) {
        console.log("Me frappe pas, c'était juste pour la vanne ! Cette fois il ne bouge vraiment plus 😇")
        noButton.disabled = false;
        noButton.removeEventListener('mouseover', moveButton);
    } 

}

function showMessage(message) {
    const messageContainer = document.getElementById('noMessage');
    messageContainer.innerHTML = `<p>${message}</p>`;
}

noButton.addEventListener('mouseover', moveButton);

noButton.disabled = true;
