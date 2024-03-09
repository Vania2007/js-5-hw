let w = 0;
let h = 0;
function setValue() {
  w = +prompt("Input width");
  h = +prompt("Input height");
}
function getSquare() {
  alert(w * h);
}
function getPerimeter() {
  alert((w + h) * 2);
}
