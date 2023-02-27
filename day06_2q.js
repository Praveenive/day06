class circle{
    constructor(radius,colour)
    {
        this.radius = radius;
        this.colour = colour;
    }
    getarea()
    {
        let area = this.radius*Math.PI*this.radius;
        return area;
    }
    getcircumference()
    {
        let circum = 2*Math.PI*this.radius;
        return circum;
    }
}
    let circlearea = new circle (3,"Black");
    console.log(circlearea.getarea());
    console.log(circlearea.getcircumference());

