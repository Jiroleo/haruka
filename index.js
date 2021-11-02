
var count = 0;

function tappedChar(n) {
  if (count === 0 && n === 1) {
    count++;
  } else if (count === 1 && n === 2) {
    count++;
  } else if (count === 2 && n === 3) {
    count++;
  }
  if (count === 3) {
    document.getElementById("body").classList.add("pink");
  }
}
