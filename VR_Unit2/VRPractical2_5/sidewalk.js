class SideW{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.obj = SideWalk.cloneNode(true);
        this.obj.setAttribute("position",{x:x,y:y,z:z});
        scene.append(this.obj);
    }
}