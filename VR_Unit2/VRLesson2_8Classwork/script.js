let target;

window.addEventListener("DOMContentLoaded",function() {
  target = document.querySelector("#wrap");
  target.a = 0;
  target.da = 1;

  loop();
})

function loop(){
  target.a += target.da;
if(this.a > 0 || this.a < 90){
  target.a -= target.da;
  target.setAttribute("rotation",{x:target.a, y:0, z: 0});
}

  window.requestAnimationFrame( loop );
}