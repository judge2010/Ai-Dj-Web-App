function preload(){

};
var left_wrist;
var right_wrist;
var right_wrist_y;
var left_wrist_y;

function draw(){
image(video ,0 ,0 ,500 ,450 );
};
function setup(){
Canvas=createCanvas(500 ,450);
Canvas.position(555 ,250)
video=createCapture(VIDEO)
video.hide();
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on("pose",gotPoses);
};
function modelloaded(){
console.log("Model is loaded");
};
function gotPoses(results){
    if(results.length > 0){
console.log(results);
left_wrist=results[0].pose.leftWrist.x;
right_wrist=results[0].pose.rightWrist.x;
left_wrist_y=results[0].pose.leftWrist.y;
right_wrist_y=results[0].pose.rightWrist.y;
    };
};