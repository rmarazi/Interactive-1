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

function shuffleNames() {
	var names=["#1: 2 sets of 10","#2: 2 sets of 8","#3: 3 sets of 8","#4: 2 sets of 8","#5: 3 sets of 12","#6: 4 sets of 12","#7: 2 sets of 15/30 seconds","#8: 4 sets of 10 eachside"];
	var name = random(names);
	textAlign(CENTER);
	textSize(25);
	fill(255,255,255);
	text(name, width*4/5, height/1.9);
}
