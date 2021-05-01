song = "";
 left_wrist_x = 0;
 right_wrist_x = 0;
 right_wrist_y = 0;
left_wrist_y = 0;
 scoreLeftWrist = 0;
 scoreRightWrist=0;
function preload(){

    song=loadSound("music.mp3");

};

function draw(){
image(video ,0 ,0 ,500 ,500 );
fill("#d60909");
stroke("#d60909");
if(scoreLeftWrist > 0.2){
    circle(left_wrist_x,left_wrist_y,20);
number_leftWristY=Number(left_wrist_y);
 removeDecimal=floor(number_leftWristY*2);
volume=removeDecimal/1000;
console.log(volume);
document.getElementById("volume").innerHTML = "Volume =  " + volume;
song.setVolume(volume);
};
if(scoreRightWrist > 0.2){
    circle(right_wrist_x,right_wrist_y,20);
    if(right_wrist_y > 0 && right_wrist_y <= 100){
      song.rate(0.5);
      document.getElementById("speed").innerHTML=" Speed = 0.5x";
    };
    if(right_wrist_y > 100 && right_wrist_y <= 200){
        song.rate(1);
        document.getElementById("speed").innerHTML=" Speed = 1x";
      };
      if(right_wrist_y > 200 && right_wrist_y <= 300){
        song.rate(1.5);
        document.getElementById("speed").innerHTML=" Speed = 1.5x";
      };
      if(right_wrist_y > 300 && right_wrist_y <= 400){
        song.rate(2);
        document.getElementById("speed").innerHTML=" Speed = 2x";
      };
      if(right_wrist_y > 400){
        song.rate(2.5);
        document.getElementById("speed").innerHTML=" Speed = 2.5x";
      };
    };
};
function setup(){
Canvas=createCanvas(500 ,500);
Canvas.position(555 ,250);
//Canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on("pose",gotPoses);
};
function modelloaded(){
console.log("Model is loaded");
};
function gotPoses(results){
    if(results.length > 0){
scoreRightWrist = results[0].pose.keypoints[10].score; 
scoreLeftWrist = results[0].pose.keypoints[9].score;
//console.log(results);
left_wrist_x=results[0].pose.leftWrist.x;
right_wrist_x=results[0].pose.rightWrist.x;
left_wrist_y=results[0].pose.leftWrist.y;
right_wrist_y=results[0].pose.rightWrist.y;
    };
};
function Play_m(){

    song.play();
    song.setVolume(1);
    song.rate(1);

};