const heading= document.querySelector("h1");
const img1= document.querySelector(".img1");
const img2= document.querySelector(".img2");

//1-6
const num1 = Math.floor(Math.random()*6)+1;
const num2 = Math.floor(Math.random()*6)+1; 

img1.setAttribute("src","images/dice"+ num1 +".png")
img2.setAttribute("src","images/dice"+ num2 +".png");

if(num1 > num2){
  heading.innerHTML = "Player 1 Won";
 }else if(num1 < num2){
  heading.innerHTML = "Player 2 Won";
}else if(num1 === num2){
  heading.innerHTML = "Game Draw!";
};

