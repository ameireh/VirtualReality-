class Cloud{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dx = 0.01;
  


        this.obj = document.createElement("a-entity");

        let CRS = document.createElement("a-sphere");
        CRS.setAttribute("position",{x:0.5,y:0.85,z:0});
        CRS.setAttribute("color", "White");
        CRS.setAttribute("radius",0.5);
        this.obj.append(CRS);

        let CM = document.createElement("a-sphere");
        CM.setAttribute("position",{x:0,y:1,z:0});
        CM.setAttribute("color", "White");
        CM.setAttribute("radius",0.5);
        this.obj.append(CM);

        let CLS = document.createElement("a-sphere");
        CLS.setAttribute("position",{x:-0.5,y:0.85,z:0});
        CLS.setAttribute("color", "White");
        CLS.setAttribute("radius",0.5);
        this.obj.append(CLS);
        
      this.obj.setAttribute("position",{x:x,y:y,z:z});
      scene.append(this.obj);
    }
    fly(){
      
      
      if(this.x <= 5){
        this.x += this.dx
      this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
      return(this.obj);
      }
      else if(this.x >=-5){
        this.x -= this.dx
        this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
        return(this.obj);
      }
    }
}