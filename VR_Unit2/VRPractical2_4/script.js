let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  
  let cloud = new cloud(x,5,y);
  
  loop();
})

function loop(){

  
  window.requestAnimationFrame( loop );
}
