class cloud{
    constructor(){
        this.obj = document.createElement("a-entity");

        let CRS = document.createElement("a-sphere");
        CRS.setAttribute("position",{x:0.5,y:1,z:0});
        CRS.setAttribute("color", "White");
        CRS.setAttribute("radius",0.5);
        this.obj.append(CRS);

        let CM = document.createElement("a-sphere");
        CM.setAttribute("position",{x:0,y:1,z:0});
        CM.setAttribute("color", "White");
        CM.setAttribute("radius",0.5);
        this.obj.append(CM);

        let CLS = document.createElement("a-sphere");
        CLS.setAttribute("position",{x:-0.5,y:1,z:0});
        CLS.setAttribute("color", "White");
        CLS.setAttribute("radius",0.5);
        this.obj.append(CLS);

      scene.append(this.obj);
    }
}