const startBtn = document.querySelector(".startBtn");
const restartBtn = document.querySelector(".restart");
const waitingBoard = document.querySelector(".waiting-board");
const gameBoard = document.querySelector(".game-board");
const footerBox = document.querySelector(".footer");
const waitingImg = document.querySelector(".waiting-board > img");
const leftTime = document.querySelector(".left-time");
const leftChar = document.querySelector(".left-char");

let setDivValue = [];
let setImgValue = [];
let startTimer = null;
let lastImg = null;
let char = 8;

startBtn.addEventListener("click", function() {
  removeImg();
  makeBoard();
  setDivNum();
  setImgNum();
  showFooter();
  insertImg();
  remainTime();
});

restartBtn.addEventListener("click", function() {
  gameBoard.style.display = "none";
  waitingImg.src = "bgs/bg.png";
  resetBoard();
  footerBox.style.display = "none";
  restartBtn.style.display = "none";
  startBtn.style.display = "block";
  setDivValue = [];
  setImgValue = [];
  startTimer = null;
  lastImg = null;
  char = 8;
})

gameBoard.addEventListener("click", function(e) {
  const currentTarget = e.target.children[0];

  if (currentTarget === "game-board") {
    return;
  }
  if (!lastImg) {
    currentTarget.style.zIndex = "1";
    lastImg = currentTarget;
  } else if (lastImg.className === currentTarget.className) {
    currentTarget.style.zIndex = "1";
    lastImg = null;
    remainChar();
    playerWin();
  } else {
    currentTarget.style.zIndex = "1"
    setTimeout(() => {
      currentTarget.style.zIndex = "-1";
      lastImg.style.zIndex = "-1";
      lastImg = null;
    }, 500);
  }
})

function showFooter() {
  if (window.getComputedStyle(footerBox).display === "none") {
    footerBox.style.setProperty("display", "flex");
    leftChar.innerHTML = `남은 최수종 : ${char}`;
  } else {
    footerBox.style.setProperty("display", "none");
  }
}
function removeImg() {
  waitingBoard.style.display="none";
  waitingImg.style.display = "none";
}
function getRandomInt(num) {
  return Math.floor(Math.random() * num);
}
function makeBoard() {
  gameBoard.style.display = "grid";
  gameBoard.style.gridTemplateColumns = `repeat(4, 1fr)`;
  gameBoard.style.gridTemplateRows = `repeat(4, 1fr)`;
  for(let i = 0; i < 16; i++ ){
    let newDiv = document.createElement("div");
    newDiv.setAttribute("value", `${i}`);
    newDiv.style.backgroundImage = 'url("bgs/square-bg.jpg")';
    newDiv.style.backgroundSize = 'cover';
    gameBoard.appendChild(newDiv);
  };
}
function setDivNum() {
  for (let i = 0; i < 16; i++) {
    let divValue = getRandomInt(16);

    if(!setDivValue.includes(divValue)) {
      setDivValue.push(divValue);
      } else {
      i--;
    }
  }
}

function setImgNum() {
  let count = {};
  for (let i = 0; i < 16; i++) {
    let imgValue = getRandomInt(8) + 1;
      if (count[imgValue] === undefined) {
        count[imgValue] = 0;
      }
    if (count[imgValue] < 2) {
      setImgValue.push(imgValue);
      count[imgValue]++;
    } else {
      i--;
    }
  }
}

function insertImg() {
  for(let i = 0; i < 16; i++ ){
    let newImg = document.createElement('img');
    newImg.className = setImgValue[i];
    newImg.style.position = 'relative';
    newImg.style.zIndex = '-1';
    newImg.src = `imgs/0${setImgValue[i]}.jpg`;
    newImg.style.width= '100%';
    newImg.style.height= '100%';
    gameBoard.children[setDivValue[i]].appendChild(newImg);
  }
}
function remainChar() {
  char --;
  leftChar.innerHTML = `남은 최수종 : ${char}`;
}
function remainTime() {
  const start = Date.now();
  startTimer = setInterval(() => {
    const timer = Math.floor((Date.now()- start) / 1000);
    leftTime.innerHTML = `남은 시간 : ${25 - timer}초`
    if (timer === 25) {
      clearInterval(startTimer);
      waitingBoard.style.display = "block";
      waitingImg.style.display = "block";
      waitingImg.src = "bgs/lose-bg1.jpg";
      resetBoard();
      gameBoard.style.display = "none";
      startBtn.style.display = "none";
      restartBtn.style.display = "block";
      alert("GAME OVER!!");
    }
  }, 1000);
}

function resetBoard() {
  while(gameBoard.children.length > 0) {
    gameBoard.children[0].remove();
  };
}

function playerWin() {
  if (char === 0) {
    clearInterval(startTimer);
    waitingBoard.style.display = "block";
    waitingImg.style.display = "block";
    waitingImg.src = "bgs/win-bg1.jpg";
    resetBoard();
    gameBoard.style.display = "none";
    startBtn.style.display = "none";
    restartBtn.style.display = "block";
    alert("You Win!!");
  }
}