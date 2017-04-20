var city = 'boston';
var radius = 50;
var boston, portland, newyork, austin, denver , neworleans = [];

function setup() {
	createCanvas (windowWidth, windowHeight);
}

function draw() {

	boston = {
		x: windowWidth/2,
		y: radius,
		r: radius,
		display: function () {
			fill('orange');
			ellipse(this.x, this.y, 2*this.r, 2*this.r);
			fill("teal");
			textSize(20);
			textAlign(CENTER);
			text("Boston", this.x, this.y);
		},
		clicked: function() {
			var d = dist(mouseX, mouseY, this.x, this.y);
			if (d < this.r) {
				city = 'boston';
				this.r = this.r + 1;
				this.display();
			}
		}
	};

	portland = {
		x: radius,
		y: windowHeight/2,
		r: radius,
		display: function () {
			fill("teal");
			ellipse(this.x, this.y, 2*this.r, 2*this.r);
			fill("yellow");
			textSize(20);
			textAlign(CENTER);
			text("Portland", this.x, this.y);
		},
		clicked: function() {
			var d = dist(mouseX, mouseY, this.x, this.y);
			if (d < this.r) {
				city = 'portland';
				this.r = this.r + 1;
				this.display();
			}
		}
	};

	newyork = {
		x: windowWidth/2,
		y: windowHeight-radius,
		r: radius,
		display: function () {
			fill("yellow");
			ellipse(this.x, this.y, 2*this.r, 2*this.r);
			fill("green");
			textSize(20);
			textAlign(CENTER);
			text("New York", this.x, this.y);
		},
		clicked: function() {
			var d = dist(mouseX, mouseY, this.x, this.y);
			if (d < this.r) {
				city = 'newyork';
				this.r = this.r + 1;
				this.display();
			}
		}
	};

	austin = {
		x: windowWidth-radius,
		y: windowHeight/2,
		r: radius,
		display: function () {
			fill("green");
			ellipse(this.x, this.y, 2*this.r, 2*this.r);
			fill("red");
			textSize(20);
			textAlign(CENTER);
			text("Austin", this.x, this.y);
		},
		clicked: function() {
			var d = dist(mouseX, mouseY, this.x, this.y);
			if (d < this.r) {
				city = 'austin';
				this.r = this.r + 1;
				this.display();
			}
		}
	};

	denver = {
		x: windowWidth/4-2*radius,
		y: windowHeight/4-radius,
		r: radius,
		display: function () {
			fill("teal");
			ellipse(this.x, this.y, 2*this.r, 2*this.r);
			fill("yellow");
			textSize(20);
			textAlign(CENTER);
			text("Denver", this.x, this.y);
		},
		clicked: function() {
			var d = dist(mouseX, mouseY, this.x, this.y);
			if (d < this.r) {
				city = 'denver';
				this.r = this.r + 1;
				this.display();
			}
		}
	};

	neworleans = {
		x: windowWidth*3/4+2*radius,
		y: windowHeight/4-radius,
		r: radius,
		display: function () {
			fill("teal");
			ellipse(this.x, this.y, 2*this.r, 2*this.r);
			fill("yellow");
			textSize(20);
			textAlign(CENTER);
			text("New Orleans", this.x, this.y);
		},
		clicked: function() {
			var d = dist(mouseX, mouseY, this.x, this.y);
			if (d < this.r) {
				city = 'neworleans';
				this.r = this.r + 1;
				this.display();
			}
		}
	};

	toronto = {
		x: windowWidth/4-2*radius,
		y: windowHeight*3/4+radius,
		r: radius,
		display: function () {
			fill("teal");
			ellipse(this.x, this.y, 2*this.r, 2*this.r);
			fill("yellow");
			textSize(20);
			textAlign(CENTER);
			text("Toronto", this.x, this.y);
		},
		clicked: function() {
			var d = dist(mouseX, mouseY, this.x, this.y);
			if (d < this.r) {
				city = 'toronto';
				this.r = this.r + 1;
				this.display();
			}
		}
	};

	annarbor = {
		x: windowWidth*3/4+2*radius,
		y: windowHeight*3/4+radius,
		r: radius,
		display: function () {
			fill("teal");
			ellipse(this.x, this.y, 2*this.r, 2*this.r);
			fill("yellow");
			textSize(20);
			textAlign(CENTER);
			text("Ann Arbor", this.x, this.y);
		},
		clicked: function() {
			var d = dist(mouseX, mouseY, this.x, this.y);
			if (d < this.r) {
				city = 'annarbor';
				this.r = this.r + 1;
				this.display();
			}
		}
	};


	background(0);
	noLoop();

	boston.display();
	portland.display();
	newyork.display();
	austin.display();
	denver.display();
	neworleans.display();
	toronto.display();
	annarbor.display();

	fill("blue");
	rect(windowWidth/4,windowHeight/4,windowWidth/2,windowHeight/2);
}

function mousePressed() {
	boston.clicked();
	portland.clicked();
	newyork.clicked();
	austin.clicked();
	denver.clicked();
	neworleans.clicked();
	toronto.clicked();
	annarbor.clicked();

	updateWeather();
}
	

function updateWeather() {
	var api_key = '33fbebc38bb57a0047be5baeb2d3581f';
	$('#owm-data').load('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&mode=html&units=imperial&appid=' + api_key);
}


