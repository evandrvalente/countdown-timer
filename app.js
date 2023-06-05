const timeH = document.querySelector('h1');
const timeSecond = 5;

timeH.innerHTML = `00${timeSecond}`;

const countdown = setInterval(()=>{
  timeSecond--;
},1000)