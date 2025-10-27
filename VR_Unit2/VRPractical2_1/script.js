let scene;

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

    for(let i = 0; i < 10; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createHouse(x-2,0,z-2);
  }

  for(let i = 0; i < 50; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createTree(x,0,z);
  }
  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let MX = rnd(-4,4);
    let MZ = rnd(-5,5);
    createCloud(x-MX,9,z-MZ);
  }
  

   //Task 2: Use the createCloud(...)  to add several clouds to the scene at various positions.

   //Task 4: Use the createHouse(...)  to add several houses to the scene at various positions.
})

/* Task 1: Create a function createCloud that,
      1) Accept an x, y and z position for where to place the cloud "entity"
      2) Create an entity to store all the components that will make up the cloud
      3) Create three sphere, or some other appropriate component that can slightly overlap.         
      4) Adjust the attributes appropriately.  Add each sphere to the cloud entity
      5) Set cloud entities position to those passed in to the function.
      6) Add the cloud entity to the scene
*/

/* Task 3: Create a function createHouse that,
      1) Accept an x and z position for where to place the house "entity"
      2) Create an entity to store all the components that will make up the house
      3) Create box for the base of the house.  Add base to the entity.
      4) Create triangular prism from a cylinder for the roof.  Add the roof to the entity.
      5) Adjust the attributes appropriately.
      5) Set house entities position to those passed in to the function.
      6) Add the house entity to the scene
*/

function createTree(x, y, z){
  let tree = document.createElement("a-entity");
  
  let pines = document.createElement("a-cone");
  pines.setAttribute("color","green");
  pines.setAttribute("position","0 2 0");
  pines.setAttribute("height","2");
  tree.append( pines );

  let stump = document.createElement("a-cylinder");
  stump.setAttribute("position","0 1 0");
  stump.setAttribute("color","brown");
  stump.setAttribute("radius","0.25");
  tree.append( stump );

  tree.setAttribute("position",{x:x, y:y, z:z});
  scene.append( tree )
}

function createCloud(x, y, z){
  let Cloud = document.createElement("a-entity");
  
  let CLL = document.createElement("a-Sphere");
  CLL.setAttribute("position","0.5 0.7 0");
  CLL.setAttribute("opacity","0.8");
  CLL.setAttribute("radius","0.5");
  Cloud.append(CLL);

  let CLMiddle = document.createElement("a-Sphere");
  CLMiddle.setAttribute("position","0 1 0");
  CLMiddle.setAttribute("opacity","0.8");
  CLMiddle.setAttribute("radius","0.5");
  Cloud.append( CLMiddle );

  let CLR = document.createElement("a-Sphere");
  CLR.setAttribute("position","-0.5 0.7 0");
  CLR.setAttribute("opacity","0.8");
  CLR.setAttribute("radius","0.5");
  Cloud.append( CLR );

  Cloud.setAttribute("position",{x:x, y:y, z:z});
  scene.append( Cloud )
}

function createHouse(x, y, z){
  let House = document.createElement("a-entity");
  
  let WAL1 = document.createElement("a-box");
  WAL1.setAttribute("position","0 0 1.5");
  WAL1.setAttribute("rotation",{x:90,y:0,z:0});
  WAL1.setAttribute("color","brown");
  WAL1.setAttribute("height","3");
  WAL1.setAttribute("width","3");
  WAL1.setAttribute("depth","0.1");
  House.append(WAL1);

  let WAL2 = document.createElement("a-box");
  WAL2.setAttribute("rotation",{x:0,y:90,z:0});
  WAL2.setAttribute("position","1.5 1 1.5");
  WAL2.setAttribute("color","brown");
  WAL2.setAttribute("height","2");
  WAL2.setAttribute("width","3");
  WAL2.setAttribute("depth","0.1");
  House.append(WAL2);

  let WAL3 = document.createElement("a-box");
  WAL3.setAttribute("rotation",{x:0,y:0,z:0});
  WAL3.setAttribute("position","0 1 0");
  WAL3.setAttribute("color","brown");
  WAL3.setAttribute("height","2");
  WAL3.setAttribute("width","3");
  WAL3.setAttribute("depth","0.1");
  House.append( WAL3 );

  let WAL4 = document.createElement("a-box");
  WAL4.setAttribute("rotation",{x:0,y:0,z:0});
  WAL4.setAttribute("position","0 1 3");
  WAL4.setAttribute("color","brown");
  WAL4.setAttribute("height","2");
  WAL4.setAttribute("width","3");
  WAL4.setAttribute("depth","0.1");
  House.append( WAL4 );

  let WAL5 = document.createElement("a-box");
  WAL5.setAttribute("rotation",{x:0,y:90,z:0});
  WAL5.setAttribute("position","-1.5 1 1.5");
  WAL5.setAttribute("color","brown");
  WAL5.setAttribute("height","2");
  WAL5.setAttribute("width","3");
  WAL5.setAttribute("depth","0.1");
  House.append( WAL5 );

  House.setAttribute("position",{x:x, y:y, z:z});
  scene.append( House )
}