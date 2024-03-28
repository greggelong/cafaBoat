class Wave {
    constructor(y) {
      this.y = y;
      this.x = 0;
    }



    update(){
        this.x = random(-20,0);
        

    }
    show(){
        image(waves[0],waves[0].width/2+this.x,this.y)
    }
    }

    