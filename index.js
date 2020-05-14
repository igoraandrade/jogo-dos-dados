
function numberGenerator1() {
    var randomNumber1 = Math.floor((Math.random() * 6) + 1)
    return randomNumber1
}

function numberGenerator2() {
    var randomNumber2 = Math.floor((Math.random() * 6) + 1)
    return randomNumber2
}

var diceRandom1 = numberGenerator1()
var diceRandom2 = numberGenerator2()

var dado1 = document.querySelector(".img1").setAttribute("src", `images/dice${diceRandom1}.png`)

var dado2 = document.querySelector(".img2").setAttribute("src", `images/dice${diceRandom2}.png`)

function winner() {
    var winner = ["Jogador 1", "Jogador 2", "Empate!"]

    if (diceRandom1 > diceRandom2) {
        return winner[0]
    } if (diceRandom1 < diceRandom2) {
        return winner[1]
    } else {
        return winner[2]        
    }
}
var vencedor = document.querySelector(".titulo").innerHTML = winner();
console.log(vencedor)