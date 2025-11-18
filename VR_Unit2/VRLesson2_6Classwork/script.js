let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, mechss = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mechh = document.getElementById("mech1");
 
  loop();
})
function loop(){

for(let i =0; i<100; i++){
 let x = rnd(20,-20);
 let z = rnd(20,-20);
 mechs = new mecha2(x,1,z);
 mechss.push(mechs);
}

  window.requestAnimationFrame( loop );
}
