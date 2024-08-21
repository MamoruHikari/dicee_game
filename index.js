if (sessionStorage.getItem("visited") === null) {
    sessionStorage.setItem("visited", "true");
} else {

var randomNumber1 = Math.floor((Math.random() * 6) + 1);

document.body.querySelector(".img1").setAttribute("src", `./images/dice${randomNumber1}.png`);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);

document.body.querySelector(".img2").setAttribute("src", `./images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
    document.body.querySelector("h1").textContent = "Player 1 wins 🚩";
} else if (randomNumber1 < randomNumber2) {
    document.body.querySelector("h1").textContent = "Player 2 wins 🚩";
} else {
    document.body.querySelector("h1").textContent = "Draw! 🚩";
}

}