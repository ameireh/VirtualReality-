class roadsy{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.obj = Street.cloneNode(true);
        this.obj.setAttribute("rotation",{x:0,y:90,z:0});
        this.obj.setAttribute("position",{x:x,y:y,z:z});
        scene.append(this.obj);
    }
}