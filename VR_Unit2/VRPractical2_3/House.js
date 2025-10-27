class house{
  constructor(x,y,z){
    this.house1 = document.createElement("a-entity");

      let wall1 = document.createElement("a-box");
      wall1.setAttribute("height", "2");
      wall1.setAttribute("position",{x:0,y:1,z:2});
      wall1.setAttribute("rotation",{x:0,y:90,z:0});
      wall1.setAttribute("length", "2");
      wall1.setAttribute("depth", "0.1");
      this.house1.append(wall1);

      let wall2 = document.createElement("a-box");
      wall2.setAttribute("height", "2");
      wall2.setAttribute("position",{x:0,y:1,z:5});
      wall2.setAttribute("length", "2");
      wall2.setAttribute("depth", "0.1");
      this.house1.append(wall2);

      let wall3 = document.createElement("a-box");
      wall3.setAttribute("height", "2");
      wall3.setAttribute("position",{x:0,y:1,z:5});
      wall3.setAttribute("length", "2");
      wall3.setAttribute("depth", "0.1");
      this.house1.append(wall3);

      let wall4 = document.createElement("a-box");
      wall4.setAttribute("height", "2");
      wall4.setAttribute("position",{x:0,y:1,z:5});
      wall4.setAttribute("length", "2");
      wall4.setAttribute("depth", "0.1");
      this.house1.append(wall4);

      let floor = document.createElement("a-box");
      floor.setAttribute("height", "4");
      floor.setAttribute("position",{x:-0.5,y:0,z:5});
      floor.setAttribute("rotation",{x:90,y:0,z:0});
      floor.setAttribute("length", "10");
      floor.setAttribute("depth", "0.1");
      this.house1.append(floor);
      this.house1.setAttribute("postiton",{x:x, y:y, z:z});
      scene.append(this.house1);
  }






}