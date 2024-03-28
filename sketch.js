
let waves= []
let boats= []

let swaves =[]
let bx1
let bx2
let bx3
let bx4
let cnv

function preload(){
    waves[0]= loadImage("w1.png")
    //waves[1]= loadImage("w2.png")
    boats[0]= loadImage("b1.png")
    boats[1]= loadImage("b2.png")
    boats[2]= loadImage("b3.png")
    boats[3]= loadImage("b4.png")
    boats[4] = loadImage("db.png")
}

// g1x: 0-100,
//     y:height-(boats[2].height/2),
//     img:boats[2]
// }
// g2 = {
//     x: width+boats[3].width,
//     y:height/4+(boats[2].height/2),
//     img:boats[3]
// }

// y1 = {
//     x: width+boats[0].width,
//     y:(boats[2].height/2),
//     img:boats[0]
// }




function setup() {
    cnv = createCanvas(760, 760); //(gridSize * cellSize + 10, gridSize * cellSize + 10);
    let cx = windowWidth / 2 - cnv.width / 2;
    let cy = windowHeight / 2 - cnv.width / 2;
    cnv.position(cx, cy);
    waves[0].resize(1000,0)
    print(waves[0].height)
    //frameRate(5)
    imageMode(CENTER)
    // set up waves
    let wy =waves[0].height/2
    for(let i =0; i<4; i++){

       swaves[i]= new Wave(wy)
        wy=wy+170
    }
    bx1= random(-500,-300)
    bx4 = random(-500,-300)
    bx2= width+random(300,500)
    bx3= width+random(300,500)
    boats[0].resize(300,0)
    boats[2].resize(250,0)
    boats[4].resize(200,0)

  }
  
  function draw() {
    background(255)
    
    // only update the frames every mult of 15 to slow it
    if (frameCount%15===0){
        for(let i =0; i<4; i++){
      
            swaves[i].update()
         }
    }
    // show the wave
    for(let i =0; i<4; i++){
      
       swaves[i].show()
    }

    // update boats
    bx1=bx1+1
    if (bx1>width+boats[2].width) bx1= random(-500,-300)
    bx2=bx2-1
    if (bx2<-boats[0].width) bx2= width+random(300,900)
    bx3=bx3-1
    if (bx3<-boats[3].width) bx3= width+random(300,900)
    bx4=bx4+1
    if (bx4>width+boats[4].width) bx4= random(-300,-900)



    // show boats
    image(boats[4],bx4, boats[4].height/2-10) //right going
    image(boats[0],bx2,(boats[2].height/2)+50)
    image(boats[3],bx3,height/3+(boats[3].height/2)+30)
    
     // right going boats
    image(boats[2],bx1, height-boats[2].height/2)
    
    

 
  }

  

