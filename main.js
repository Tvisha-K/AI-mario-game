function preload() {
	world_start = loadSound("world_start.wav");
	mario_coin = loadSound("coin.wav");
	mario_jump = loadSound("jump.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	game_over = loadSound("gameover.wav");
	setSprites();
	MarioAnimation();

}

function setup() {
	canvas = createCanvas(1240,336);

	instializeInSetup(mario);

	canvas.parent("canvas");

	video= createCapture(VIDEO);

	video.size(800,400);

	video.parent("video_console");
	
	model_posenet = ml5.poseNet(video,modelLoaded); 


}

function modelLoaded(){

	console.log("model loaded");

	model_posenet.on("pose" , gotResults);

}

function draw() {
	game();
}


function gotResults(r){

	if (r.length > 0) {
		
		console.log(r);

		noseX = r[0].pose.nose.x;

		noseY = r[0].pose.nose.y;

	}

}



