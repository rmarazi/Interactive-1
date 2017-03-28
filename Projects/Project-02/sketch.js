function setup() {
	createCanvas(windowWidth,windowHeight);
}

function draw() {
	noLoop();

	removeElements();
	
	var img = createImg("assets/main.jpg");
	img.position(0,0);
	img.size(windowWidth, windowHeight);

	shuffleNames();

	var shuffle = createButton("Shuffle");
	shuffle.position(windowWidth/2, windowHeight*4/5);
	shuffle.mousePressed(draw);
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function shuffleNames() {

	var names=["abs", "quads", "booty", "triceps", "biceps", "back", "chest", "cardio"];
	var name = random(names);
	var myLink;
	myLink = createA( name + '/index.html', name);
	myLink.position(width/2, height/2);

}

