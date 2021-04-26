song = "";
var left_wrist_x;
var right_wrist_x;
var right_wrist_y;
var left_wrist_y;
function preload(){

    song=loadSound("music.mp3");

};

function draw(){
image(video ,0 ,0 ,500 ,450 );
fill("#d60909");
stroke("#d60909");
circle(left_wrist_x,left_wrist_y,20);
var number_leftWristY=Number(left_wrist_y);
var removeDecimal=floor(number_leftWristY*2);
volume=removeDecimal/1000;
console.log(volume);
document.getElementById("volume").innerHTML = "Volume =  " + volume;
song.setVolume(volume);
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
left_wrist_x=results[0].pose.leftWrist.x;
right_wrist_x=results[0].pose.rightWrist.x;
left_wrist_y=results[0].pose.leftWrist.y;
right_wrist_y=results[0].pose.rightWrist.y;
    };
};
function Play_m(){

    song.play();
    song.setVolume(0.2);
    song.rate(1);

};