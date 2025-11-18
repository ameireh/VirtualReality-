class Rocket{
    constructor(x,y,z){
        this.x = x
        this.y = y
        this.z = z
        this.dy = 0.01
        this.obj = document.createElement("a-entity");

        let middle = document.createElement("a-cylinder")
        middle.setAttribute("height", 1.5);
        middle.setAttribute("radius", 0.4);
        middle.setAttribute("color", "orange");
        middle.setAttribute("position", {x:0, y:1.5, z:0});
        this.obj.append(middle);

        let top = document.createElement("a-cone")
        top.setAttribute("height", 1.3);
        top.setAttribute("radius-bottom", 0.5);
        top.setAttribute("color", "teal");
        top.setAttribute("position", {x:0, y:2.8, z:0});
        this.obj.append(top);
        
        this.obj.setAttribute("position",{x:x,y:y,z:z});
        scene.append(this.obj);
    }
    takeoff(){
       this.y += this.dy
       this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    }
}