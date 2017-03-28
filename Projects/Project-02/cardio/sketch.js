function setup() {
	createCanvas(windowWidth,windowHeight);
}

function draw() {
	noLoop();
	background(255,0,0);


	removeElements();
	var	img = createImg("../assets/cardio_pic.jpg");
	img.position(0, 0);
	img.size(windowWidth/2, windowHeight);
	shuffleNames();

	var shuffle = createButton("Shuffle");
	shuffle.position(windowWidth*2/3, windowHeight*4/5);
	shuffle.mousePressed(draw);

	var homeLink;
	homeLink = createA( '../index.html', "Back");
	homeLink.position(windowWidth*5/6, windowHeight*0.775);
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function shuffleNames() {
	var names=["#1", "#2", "#3", "#4", "#5: 20min","#5: 300calories","#6: jog 4 min","#7: 2min"];
	var name = random(names);
	textAlign(CENTER);
	textSize(30);
	fill(255,255,255);
	text(name, width*4/5, height/1.9);
}

