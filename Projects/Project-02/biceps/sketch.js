function setup() {
	createCanvas(windowWidth,windowHeight);
	img = createImg("../assets/ab_pic.jpg");
	image(img, 0, 0, windowWidth/2, windowHeight);
}

function draw() {
	noLoop();
	background(255,0,0);


	removeElements();
	image(img, 0, 0, windowWidth/2, windowHeight);
	shuffleNames();

	var shuffle = createButton("Shuffle");
	shuffle.position(windowWidth*2/3, windowHeight*4/5);
	shuffle.mousePressed(draw);
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

	var names=["#1: 4 sets of 20","#2: 3 sets of 12","#3: 3 sets of 10","#4: 4 sets of 12"];
var name = random(names);
	textAlign(CENTER);
	textSize(25);
	fill(255,255,255);
	text(name, width*4/5, height/1.9);
}
