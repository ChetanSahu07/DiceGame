//document.querySelector(".btn").onclik = "solve();" ;

function solve(){
    var rdm = Math.random();
rdm = rdm*6 + 1 ;
rdm = Math.floor(rdm) ;

if(rdm===1){
    document.querySelector(".img1").setAttribute("src" , "./images/dice1.png");
}
else if(rdm===2){
    document.querySelector(".img1").setAttribute("src" , "./images/dice2.png");
}
else if(rdm===3){
    document.querySelector(".img1").setAttribute("src" , "./images/dice3.png");
}
else if(rdm===4){
    document.querySelector(".img1").setAttribute("src" , "./images/dice4.png");
}
else if(rdm===5){
    document.querySelector(".img1").setAttribute("src" , "./images/dice5.png");
}
else{
    document.querySelector(".img1").setAttribute("src" , "./images/dice6.png");
}

var rdm1 = Math.random();
rdm1 = rdm1*6 + 1 ;
rdm1 = Math.floor(rdm1) ;

if(rdm1===1){
    document.querySelector(".img2").setAttribute("src" , "./images/dice1.png");
}
else if(rdm1===2){
    document.querySelector(".img2").setAttribute("src" , "./images/dice2.png");
}
else if(rdm1===3){
    document.querySelector(".img2").setAttribute("src" , "./images/dice3.png");
}
else if(rdm1===4){
    document.querySelector(".img2").setAttribute("src" , "./images/dice4.png");
}
else if(rdm1===5){
    document.querySelector(".img2").setAttribute("src" , "./images/dice5.png");
}
else{
    document.querySelector(".img2").setAttribute("src" , "./images/dice6.png");
}

if(rdm==rdm1){
    document.querySelector("h1").textContent = "Its Draw Play Again " ;
    document.querySelector(".p1").textContent = "Player 1" ;
    document.querySelector(".p2").textContent = "Player 2" ;
}
else if(rdm>rdm1){
    document.querySelector("h1").textContent = "Player 1 Wins" ;
    document.querySelector(".p1").textContent = "Player 1 🥳🎉" ;
    document.querySelector(".p2").textContent = "Player 2" ;
}
else{
    document.querySelector("h1").textContent = "Player 2 Wins" ;
    document.querySelector(".p1").textContent = "Player 1" ;
    document.querySelector(".p2").textContent = "Player 2 🥳🎉" ;
}
}
