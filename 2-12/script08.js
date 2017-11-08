window.onload = initAll;
function initAll() {
  document.getElementById('redirect').onclick = initRedirect;
}
function initRedirect() {
  alert("We are not responsible for the content of pages out site.");
  window.location = this;

  return false;
}
