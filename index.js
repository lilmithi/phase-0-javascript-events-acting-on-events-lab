// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
  const leftNumber = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumber, 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
function moveDodgerRight() {
  const leftNumber = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumber, 10);
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
