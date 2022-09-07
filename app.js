// who is next player (Player1- 0 Player2 -1)
var activePlayer, scores, roundScore;
var isNewGame;

// number of the dice which is random numbes between 1 and 6
var diceObj = document.querySelector(".dice");
initGame();

function initGame() {
    isNewGame = true;
    activePlayer = 0;
    scores = [0,0];
    roundScore = 0;

    document.getElementById("score-0").innerHTML = 0;
    document.getElementById("score-1").innerHTML = 0;
    document.getElementById("current-0").innerHTML = 0;
    document.getElementById("current-1").innerHTML = 0;
    
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.add("active");
    diceObj.style.display = "none";

}


document.querySelector(".btn-roll").addEventListener("click", rollDice);
document.querySelector(".btn-new").addEventListener("click", initGame);
function rollDice() {
    if(isNewGame) {
        var diceNumber = Math.floor(Math.random() * 6) +1;
        diceObj.style.display = "block";
        diceObj.src = "dice-" + diceNumber +".png";

        if(diceNumber !==1) {
            roundScore = roundScore + diceNumber;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
        }
        else {
            changePlayer();
        }
    }
    else alert("Game Over!\nYou can start new game!");
}

document.querySelector(".btn-hold").addEventListener("click", function() {
    if(isNewGame) {
        scores[activePlayer] = scores[activePlayer] + roundScore;
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

        if(scores[activePlayer]>=20) {
            document.getElementById("name-"+ activePlayer).textContent = "WINNER";
            document.querySelector(".player-"+ activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-"+ activePlayer + "-panel").classList.remove("active");
            isNewGame = false;
            
        }
        else {
            roundScore = 0;
            document.getElementById("current-" + activePlayer).textContent = 0;
            changePlayer();
        }
    }
    else alert("Game Over!\nYou can start new game!");
})

function changePlayer() {
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    document.getElementById("current-" + activePlayer).textContent = 0;
    
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 :activePlayer = 0;

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    diceObj.style.display = "none";
}