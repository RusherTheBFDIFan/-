noseX = 0;
noseY = 0;
difference = 0;
leftwristX = 0;
rightwristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Posenet's been initialized.");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX-rightwristX);

        console.log("Left wrist x = " + leftwristX + ", right wrist x = " + rightwristX + " and difference = " + difference);
    }
}

function draw(){
    background('#00C0FD');

    document.getElementById("square_sides").innerHTML = "Font size of the text will be " + difference + "px";
    text("TEXT");
}
