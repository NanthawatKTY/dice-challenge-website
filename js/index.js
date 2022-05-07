// function getRandomInt() {
//     min = Math.ceil(1);
//     max = Math.floor(7);
//     return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
// }

function getRandomInt() {
    var randomNum1 = Math.ceil(Math.random() * 6)
    var randomNum2 = Math.ceil(Math.random() * 6)

    document.querySelector(".dice .dice1").setAttribute("src", `images/dice${randomNum1}.png`)
    document.querySelector(".dice .dice2").setAttribute("src", `images/dice${randomNum2}.png`)
    
    if (randomNum1 > randomNum2 ) {
        document.querySelector(".title-web").innerHTML = "🎈 Player 1 Wins!"
    }else if(randomNum2 > randomNum1){
        document.querySelector(".title-web").innerHTML = "Player 2 Wins! 🎈"
    }else{
        document.querySelector(".title-web").innerHTML = "Draw!"
    }

}

console.log(getRandomInt())

