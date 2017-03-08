function setup() {
	createCanvas(windowWidth,windowHeight);
	background(0,0,255);
}

function draw() {
	noLoop();
	background(0,0,255);
	fill(255,0,0);
	rect(0,0,width/2, height);
	var names=["Bicep", "Tricep", "Chest", "Calf", "Quad", "Booty", "Back", "Forearm", "Hamstrings", "Abs", "Shoulders", "Obliques"];
	var name = random(names);
	textAlign(CENTER);
	textSize(100);
	fill(255,255,255);
	text(name, width/4, height/1.9);


}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}
function draw() {
	noLoop();
	background(0,0,255);
	fill(255,0,0);
	rect(0,0,width/2, height);
	var names=["2 sets of 3", "5 sets of 2", "dsdf", "sdss", "fdsdf", "sdfd", "Bacsdfk", "sdf", "Hamstrings", "Abs", "Shoulders", "Obliques"];
	var name = random(names);
	textAlign(CENTER);
	textSize(100);
	fill(255,255,255);
	text(name, width/1.3, height/1.9);


}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}
