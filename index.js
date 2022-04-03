const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        splash.classList.add('display-none');
    }, 1000);
})


var score = 0;
var score_02 = 0;
var player = 0;

function showStatus() {
    document.getElementById("position").innerText = "Player Is Batting";
    document.getElementById("hit").innerHTML = "Let's Start";
    score = 0;
    score_02 = 0;
    document.getElementById("hit").innerHTML = " ";
    document.getElementById("run").innerHTML = " ";
    document.getElementById("totalRuns").innerHTML = " ";
    document.getElementById("whenBall").innerHTML = " ";
    player = 0;
}

function print() {

    if (player == 0) {
        var var_01 = document.getElementById("player");
        var random = Math.floor(((Math.random() * 10) % 6) + 1);


        if (Number(var_01.value) >= 7) {
            document.getElementById("hit").innerHTML = "Please Input The Run Within Range "
        }

        //When The Player Is Out
        else if (Number(var_01.value) == Number(random)) {
            document.getElementById("hit").innerHTML = "You are Out !!";
            document.getElementById("totalRuns").innerHTML = "Total Score : " + score;
            player++;
        }

        //When its good to Go
        else {
            score += Number(var_01.value);
            document.getElementById("hit").innerHTML = "It's a Hit";
            document.getElementById("run").innerHTML = "You Scored : " + var_01.value;
            document.getElementById("totalRuns").innerHTML = "Total Score : " + score;
        }

        document.getElementById("whenBall").innerHTML = "Score : " + score;
    }
}

function Ball_now() {

    if (player == 1) {
        document.getElementById("position").innerHTML = "Player is now Balling";

        var var_01 = document.getElementById("player");
        var random = Math.floor(((Math.random() * 10) % 5) + 1);

        if (Number(var_01.value) >= 7) {
            document.getElementById("hit").innerHTML = "Please Input The Run Within Range "
        }

        //When The Player Is Out
        else if (Number(var_01.value) == random) {
            document.getElementById("hit").innerHTML = "You Won The Game Pls Restart The Game";
            document.getElementById("totalRuns").innerHTML = "Total Score : " + score_02;
            player++;
        }

        //When its good to Go
        else {
            score_02 += random;
            document.getElementById("hit").innerHTML = "It's a Hit";
            document.getElementById("run").innerHTML = "Computer Scored : " + random;
            document.getElementById("totalRuns").innerHTML = "Total Score : " + score_02;
        }

        if (score_02 > score) {
            document.getElementById("position").innerHTML = "Aww You Lost :(";
            document.getElementById("hit").innerHTML = "You Lost!";
            document.getElementById("run").innerHTML = " ";
            player++;
        }

        score -= random;

        if (score <= 0) {
            document.getElementById("whenBall").innerHTML = "You Lost :(";
            player++;
        }
        else {
            document.getElementById("whenBall").innerHTML = "Score To Defend : " + score;
        }
    }
}