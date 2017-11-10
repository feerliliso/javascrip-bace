window.onload = iniAll;

function iniAll() {

  var ans = prompt ("Enter a number "," ");
document.getElementById('number').innerHTML = "你已经输入完成";
  try {
    if (! ans || isNaN(ans) || ans<0) {
      throw new Error("Not a valid number ");
    }
    alert("The square root of "+ ans +"is"+Math.sqrt(ans));
  } catch (errMsg) {
    alert(errMsg.message);
  }
}
