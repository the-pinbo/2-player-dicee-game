let randomNumber1 = Math.floor(Math.random()*6+1);
document.querySelector(".img1").setAttribute("src", `images\\dice${randomNumber1}.png`);

let randomNumber2 = Math.floor(Math.random()*6+1);
document.querySelector(".img2").setAttribute("src", `images\\dice${randomNumber2}.png`);


if(randomNumber1>randomNumber2){
  document.querySelector('h1').innerText = "🎉Player 1 Wins!";
  document.querySelectorAll('p')[0].classList.add('win');
  document.querySelectorAll('p')[1].classList.add('lose');
}else if (randomNumber2>randomNumber1) {
  document.querySelector('h1').innerText = "Player 2 Wins!🎉";
  document.querySelectorAll('p')[1].classList.add('win');
  document.querySelectorAll('p')[0].classList.add('lose');
}
else{
  document.querySelector('h1').innerText = "😑Draw!😝"
  document.querySelectorAll('p')[0].classList.add('draw');
  document.querySelectorAll('p')[1].classList.add('draw');
}
