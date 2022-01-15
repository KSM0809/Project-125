left_wrist_x= 0;
right_wrist_x= 0;
difference= 0;

function setup(){
    video= createCapture(VIDEO);
    video.size(450,257);
    canvas= createCanvas(400, 400);
    canvas.position(650, 150);

    posenet= ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotResult);
}

function draw(){
    background("honeydew");
    textSize(difference);
    fill("darkgreen")
    text("Kaavya", 100, 200)
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotResult(results){
    if(results.length>0){
        console.log(results);
        right_wrist_x= results[0].pose.rightWrist.x;
        left_wrist_x= results[0].pose.leftWrist.x;
        difference= floor(left_wrist_x - right_wrist_x);
        console.log("left wrist x= " + left_wrist_x + "right wrist x= " + right_wrist_x + "Difference= " + difference);
    }
}
