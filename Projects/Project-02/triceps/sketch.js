function setup() {
	createCanvas(windowWidth,windowHeight);
	background(0,0,255);
}

function draw() {
	noLoop();
	background(0,0,255);
	fill(255,0,0);
	rect(0,0,width/2, height);
	var names=["tricep push down machine: 4 sets of 10", "dumbell kickback: 4 sets of 8", "dumbell kickback: 3 sets of 5 (heavier)","assisted tricep dips: 3 sets of 10"];
	var name = random(names);
	textAlign(CENTER);
	textSize(100);
	fill(255,255,255);
	text(name, width/1.3, height/1.9);
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}
