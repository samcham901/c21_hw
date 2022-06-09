class Ground {
    constructor(x, y, w, h) {

        this.body = Bodies.rectangle(x, y, w, h, {isStatic:true})
        World.add(world, this.body)
        this.x = x
        this.y = y
        this.w = w
        this.h=h
    }

    display() {
        var groundPos = this.body.position;
        push()
        translate(groundPos.x, groundPos.y);
        rectMode(CENTER)
        strokeWeight(4);
        fill(255, 255, 0)
        rect(0, 0, this.w, this.h);
        pop()
    }
}