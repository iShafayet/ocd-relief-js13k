document.addEventListener("DOMContentLoaded", () => {
  scope.startGame(0);
});

let timeout = null;
window.onresize = () => {
  if (timeout == null) {
    timeout = setTimeout(() => {
      window.location.reload();
    }, 500);
  }
};
