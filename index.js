var x = document.querySelector("button").addEventListener("click",() => {

    var randomNumber1 = Math.floor(Math.random()*6)+1;
    var diceImage1 = document.querySelector(".img1");
    // var diceImage1 = document.querySelectorAll("img")[0];
    diceImage1.setAttribute("src","images/dice"+randomNumber1+".png");


    var randomNumber2 = Math.floor(Math.random()*6)+1;
    var diceImage2 = document.querySelector(".img2");
    diceImage2.setAttribute("src","images/dice"+randomNumber2+".png");


    var result = document.querySelector("h1");

    if(randomNumber1>randomNumber2){
        result.innerText = "Player 1 Wins 🚩";
    }else if(randomNumber1<randomNumber2){
        result.innerText="Player 2 Wins 🚩";
    }else{
        result.innerText = "Draw !! 🏳️";
    }

})