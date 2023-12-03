noseX=0;
noseY=0;

function preload(){
    mustache=loadImage("https://i.postimg.cc/tRdv0ZfJ/mustache-removebg-preview.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX= results[0].pose.nose.x-19;
        noseY= results[0].pose.nose.y+3;
        console.log('noseX= '+noseX);
        console.log('noseY= '+noseY);
    }
    
}

function draw(){
    image(video, 0,0,300,300);
    image(mustache, noseX, noseY, 40,20);
    
}

function takeSnapshot(){
    save('mustache.jpg');
}

function modelLoaded(){
    console.log('model is initialized');
}



