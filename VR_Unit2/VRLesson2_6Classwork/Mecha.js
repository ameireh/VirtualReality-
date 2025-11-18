class mecha2{
    constructor(x,y,z){
        this.x
        this.y
        this.z
        this.dx = 0.1
        this.obj = mechh.cloneNode(true);
        this.obj.setAttribute("position",{x:x,y:y,z:z});
        scene.appened(this.obj);
    }
  /*fly(){
    this.x += this.dx;
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
  }*/
}