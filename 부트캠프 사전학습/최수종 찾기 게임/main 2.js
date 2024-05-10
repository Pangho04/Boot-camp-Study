const startBtn = document.querySelector(".startBtn");
const waitingBoard = document.querySelector(".waiting-board");
const gameBoard = document.querySelector(".game-board");
const footerBox = document.querySelector(".footer");
const waitingImg = document.querySelector(".waiting-board > img");

startBtn.addEventListener("click", function() {
  console.log("hi")
  showFooter();
  removeImg();
  makeBoard();
});

function showFooter() {
  if (window.getComputedStyle(footerBox).display === "none") {
    footerBox.style.setProperty("display", "flex");
  } else {
    footerBox.style.setProperty("display", "none");
  }
}
function removeImg() {
  waitingImg.style.display = "none";
}
function makeBoard() {
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

//랜덤으로 하나의 이미지를 두곳에 배분, .zIndex를 음수로 주고, 클릭시 복원.
//이미지 이름이 같을경우 고정, 다를 경우 설정한 시간 후 zIndex음수로 복원.
//Math.random() >16 이면 다시. 
// 클릭 타겟 이미지 이름 같을 경우 leftchar -1