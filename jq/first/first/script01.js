/*$(document).ready(function () {
  alert("welcome to jQuery");
});
window.addEventListener("load",
function () {
  alert("welcome to jQuery!");
},
  false
);*/
$(document).ready(function () {
  $("#welcome").append("welcome to jQuery!");
  $("h2").append("the H2");
  $("h3").append("the h3");
});
