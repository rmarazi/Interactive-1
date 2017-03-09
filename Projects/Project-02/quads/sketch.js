function setup() {
	createCanvas(windowWidth,windowHeight);
	background(0,0,255);
}

function draw() {
	noLoop();
	background(0,0,255);
	fill(255,0,0);
	rect(0,0,width/2, height);
	var names=["quad raises: 4 sets of 10", "standing 1/2 squat: 3 sets of 12", "wall sit: 20 seconds"];
	var name = random(names);
	textAlign(CENTER);
	textSize(100);
	fill(255,255,255);
	text(name, width/1.3, height/1.9);
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}
