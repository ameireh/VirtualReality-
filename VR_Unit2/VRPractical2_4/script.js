let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, clouds = [],Rrocket = [],UFO = [],trees = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 


  for(let i=0;i<100;i++){
   let z = rnd(20,-20);
   let x = rnd(20,-20);
   cloud = new Cloud(x,7,z);
   clouds.push(cloud);
  }

  for(let i=0;i<100;i++){
   let z = rnd(20,-20);
   let x = rnd(20,-20);
   tree1 = new Tree(x,0,z);
   trees.push(tree1);
  }

 for(let i=0;i<5;i++){
  let z = rnd(5,-5);
  let x = rnd(5,-5);
  rocket = new Rocket(x,0,z);
  Rrocket.push(rocket);
  
 }
  

 for(let i =0;i<20;i++){
  let z = rnd(10,-10);
  let x = rnd(10,-10);
  ufo1 = new ufo(x,4,z);
  UFO.push(ufo1);
 }



  loop();
})

function loop(){

for(let i=0;i<100;i++){
  clouds[i].fly();
}

for(let i=0; i<5;i++){
  Rrocket[i].takeoff();
}

for(let i=0; i<20;i++){
  UFO[i].go();
}

for(let i=0; i<100;i++){
  trees[i].flow();
}

  window.requestAnimationFrame( loop );
}
