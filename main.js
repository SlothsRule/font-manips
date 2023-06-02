function setup(){
    video=createCapture(VIDEO);
    video.size(600,550);
    
    
    video.position(170,200);
    
    canvas=createCanvas(600,550);
    canvas.position(910,200);
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    }
    
    function modelLoaded(){
        console.log("yayayayayaya! ThE mOdEl HaS bEeN lOaDeD! WoHoO!!");
    }
    
    function gotPoses(results){
    if(results.length>0){
        console.log(results);
       
                
             noseX= results[0].pose.nose.x;
              noseY=  results[0].pose.nose.y;
              
              leftWristX=    results[0].pose.leftWrist.x;
              
              rightWristX= results[0].pose.rightWrist.x;
            
              diff = leftWristX-rightWristX;
            
            }
            
            }
    
    
    
    
    
    function draw(){
    background("#fff8ad");
    textSize(diff)
fill(pink)
text("Emilia",30,100);
    }

