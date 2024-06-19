rightWrist_x=0;
rightWist_y=0;
leftWrist_x=0;
leftWrist_y=0;

function preload(){
    hp_sound=loadSound("harry_potter.mp3");
    pp_sound=loadSound("peter_pan.mp3");
}
function setup() {
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotResults);

    video.hide();
}
function modelLoaded(){
    console.log("success")
}
function draw(){
    image(video,0,0,400,400);

}
function gotResults(results){

    if (results.length>0){
  leftWrist_x=results[0].pose.leftWrist.x;
  leftWrist_y=results[0].pose.leftWrist.y;
  rightWrist_x=results[0].pose.rightWrist.x;
  rightWrist_y=results[0].pose.rightWrist.y;
console.log(rightWrist_x)
    }
}  