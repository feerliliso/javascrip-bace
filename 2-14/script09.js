window.onload = initAll;
function initAll() {
  document.getElementById('Lincoln').onclick = saysomething;
  document.getElementById('Kennedy').onclick = saysomething;
  document.getElementById('Nixon').onclick = saysomething;

  function saysomething(){
    switch (this.id) {
      case "Lincoln":
        alert("Four score and seven years ago......");
        break;
        case "Kennedy":
          alert("Ask not what your country can do for you.");
          break;
          case "Nixon":
            alert("I am not a crook!");
            break;


      default:

    }
  }
}
