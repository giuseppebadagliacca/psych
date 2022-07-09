let bodyDOM = document.querySelector("body");

let divCount = 99;


const random1to255 = () => Math.floor(Math.random()*255)

bodyDOM.addEventListener('click', addColors);

function addColors(){
if(divCount === 80){
  let theDOMBody = document.querySelector('#mScott');

  theDOMBody.innerHTML = `
  <img src="/mScott.gif" alt="gotchya">
  `
}else{
  bodyDOM.style.backgroundColor = `rgba(${random1to255()}, ${random1to255()}, ${random1to255()}, ${Math.random()})`;
  const newDivDOM = document.createElement('div');

  newDivDOM.style.height = `${divCount}vh`;
  newDivDOM.style.width = `${divCount}%`;
  newDivDOM.className = "center";

  newDivDOM.style.height = `${divCount}vh`;

  divCount--;

  bodyDOM.appendChild(newDivDOM);
  bodyDOM = newDivDOM;
}
}

