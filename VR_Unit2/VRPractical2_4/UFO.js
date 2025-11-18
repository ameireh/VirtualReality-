class ufo{
    constructor(x,y,z){
        this.x = x
        this.y = y
        this.z = z
        this.dx = 1
        this.dy = 1
 
        
        this.obj = document.createElement("a-entity");
        

        let window = document.createElement("a-sphere");
        window.setAttribute("position",{x:0,y:1,z:0});
        window.setAttribute("radius",0.7);
        window.setAttribute("opacity",0.7);
        window.setAttribute("color","black");
        window.setAttribute("theta-length",90);
        this.obj.append(window);

        let base = document.createElement("a-cylinder");
        base.setAttribute("position",{x:0,y:1,z:0});
        base.setAttribute("height", 0.1)
        base.setAttribute("radius",1);
        base.setAttribute("src","https://www.shutterstock.com/image-vector/fantastic-radial-cell-structure-vector-600nw-2461242269.jpg");
        this.obj.append(base);

        let bottom = document.createElement("a-sphere");
        bottom.setAttribute("position",{x:0,y:1,z:0});
        bottom.setAttribute("radius",0.6);
        bottom.setAttribute("height",0.1);
        bottom.setAttribute("opacity",1);
        bottom.setAttribute("rotation",{x:180,y:0,z:0});
        bottom.setAttribute("theta-length",90);
        bottom.setAttribute("src","https://www.shutterstock.com/image-vector/fantastic-radial-cell-structure-vector-600nw-2461242269.jpg");
        this.obj.append(bottom);

        this.obj.setAttribute("position",{x:x,y:y,z:z});
        scene.append(this.obj);

    }
    
    go(){
      this.y += this.dx
      this.obj.setAttribute("rotation",{x:this.x, y:this.y, z:this.z});
    }


    
}