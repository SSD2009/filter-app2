nose_x=0;
nose_y=0;
eye_x=0;
eye_y=0;
head_x=0;
head_y=0;

function preload(){
    mimg=loadImage("moustache-removebg-preview.png");
   dwiimg=loadImage("1-12901_glasses-clipart-thug-deal-with-it-glasses-hd-removebg-preview.png");
   noseimg=loadImage("clownnose-removebg-preview.png");
   crownimg=loadImage("crown-removebg-preview.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.position(550,300);
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialised");
}

function draw(){
image(video,0,0,300,300);
        var radioButtons = document.getElementsByName("filter");
        for(var i = 0; i < radioButtons.length; i++)
        {
            if(radioButtons[i].checked == true)
            {console.log(radioButtons[i].value)
                if(radioButtons[i].value=="Glasses"){
                    image(dwiimg,nose_x-20,nose_y-35,50,50);
                }
                if(radioButtons[i].value=="clownnose"){
                    image(noseimg,nose_x-20,nose_y,50,50);
                }
                if(radioButtons[i].value=="moustache"){
                    image(mimg,nose_x-20,nose_y,50,50);
                }
                if(radioButtons[i].value=="crown"){
                    image(crownimg,nose_x-20,nose_y-100,50,50);
                }
            }
        }
}    
function  takephoto(){
    save('filter.jpeg');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
      console.log("nose x= "+results[0].pose.nose.x);
        console.log("nose y= "+results[0].pose.nose.y);
        nose_x=results[0].pose.nose.x-20;
        nose_y=results[0].pose.nose.y;
        eye_x=results[0].pose.nose.x-20;
        eye_y=results[0].pose.nose.y;
    }
}
