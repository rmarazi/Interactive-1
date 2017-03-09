function setup() {
	createCanvas(windowWidth,windowHeight);
	background(0,0,255);
}

function draw() {
	noLoop();
	background(0,0,255);
	fill(255,0,0);
	rect(0,0,width/2, height);
	var names=["weight-row machine: 3 sets of 12", "half bent row: 3 sets of 10", "hanging back bend: 3 sets of 15", "Sitting weight machine: 2 sets of 20"];
	var name = random(names);
	textAlign(CENTER);
	textSize(100);
	fill(255,255,255);
	text(name, width/1.3, height/1.9);
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}
