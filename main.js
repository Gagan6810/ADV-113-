function preload(){
}

function setup(){
    canvas = createCanvas(500,500);
    canvas.position(550,200);
    circle(30, 30, 20);
    video = createCapture(VIDEO);
    video.size(100,100);
    video.hide();
}

function draw(){
    background('black');
    circle(50, 50, 60);
    circle(450, 50, 60);
    circle(50, 450, 60);
    circle(450, 450, 60);
    rect(27, 50, 40, 400);
    rect(27, 425, 440, 40);
    rect(430, 425, 40, -390);
    rect(27, 30, 440, 40);
    image(video,150,150,200,200);
}

function take_snapshot(){
    save('birthday.png');
}