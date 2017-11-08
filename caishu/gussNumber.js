window.onload = gussNumber;
function gussNumber() {
document.getElementById('enter_number').innerHTML = "请输入一个100以内的整数";
var num = prompt("请在这里输入你的数字","");

if (num) {
  document.getElementById('number').innerHTML = "输入正确";
} else {
  document.getElementById('number').innerHTML = "请重新输入"；
}
}
