function setup() {
	createCanvas(windowWidth,windowHeight);
	background(0,0,255);
}

function draw() {
	noLoop();
	background(0,0,255);
	var names=["Bicep", "Tricep", "Chest", "Calf", "Quad", "Booty", "Back", "Forearm", "Hamstrings", "Abs", "Shoulders", "Obliques"];
	var name = random(names);
	textAlign(CENTER);
	textSize(100);
	fill(255,255,255);
	text(name, width/2, height/2);

}
function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}
