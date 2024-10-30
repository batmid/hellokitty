function moveRandomEl(elm) {
  elm.style.position = "absolute";
  
  // Calculate maximum top and left values to keep the element within the viewport
  const maxTop = window.innerHeight - elm.offsetHeight;
  const maxLeft = window.innerWidth - elm.offsetWidth;
  
  // Set random position while keeping the element within viewport bounds
  elm.style.top = Math.floor(Math.random() * maxTop) + "px";
  elm.style.left = Math.floor(Math.random() * maxLeft) + "px";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});
