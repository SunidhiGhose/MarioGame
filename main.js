function preload() {
	world_start = loadSound("world_start.wav");
	mar_jump = loadSound('jump.wav');
	mar_coin = loadSound('coin.wav');
	mar_kick = loadSound('kick.wav');
	mar_die = loadSound('mariodie.wav');
	mar_over = loadSound('gameover.wav');
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('gmCnsl');
	poseNet = ml5.poseNet(video, modelLoaded);
  	poseNet.on('pose', gotPoses);
}
function modelLoaded() {
	console.log('Model Loaded!');
  }
  
  function gotPoses(results){
	if(results.length > 0){
		console.log(results);
	  	noseX = results[0].pose.nose.x;
	  	noseY = results[0].pose.nose.y;
	}
  }
function draw() {
	game()
}






