function setup() {
	createCanvas(windowWidth,windowHeight);
	background(0,0,255);
}

function draw() {
	noLoop();
	background(0,0,255);
	fill(255,0,0);
	rect(0,0,width/2, height);
	var names=["standing squat: 3 sets of 12", "sitting squad machine: 5 sets of 20", "donkey kicks: 4 sets of 20", "booty climb: 10 minutes","pelvic raise: 3 sets of 20"];
	var name = random(names);
	textAlign(CENTER);
	textSize(100);
	fill(255,255,255);
	text(name, width/1.3, height/1.9);
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}
