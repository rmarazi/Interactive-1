var city = 'boston';
var radius = 50;
var boston, portland, newyork, austin, denver , neworleans = [];
var startDate = new Date();
var startTime = startDate.getTime();

function setup() {
	canvas = createCanvas (windowWidth, windowHeight);
	canvas.parent("sketch-holder");
}

function draw() {

	boston = {
		x: windowWidth/2,
		y: radius,
		r: radius,
		count: 0,
		display: function () {
			fill('red');
			ellipse(this.x, this.y, 2*this.r, 2*this.r);
			fill("white");
			textSize(20);
			textAlign(CENTER);
			text("Boston", this.x, this.y);
			if (this.count > 0)
				text(this.count, this.x, this.y+20);
		},
		reset: function () {
			fill("black");
			ellipse(this.x, this.y, 2*this.r, 2*this.r);
			this.r = radius;
			this.count = 0;
			this.display();
		},
		clicked: function() {
			var d = dist(mouseX, mouseY, this.x, this.y);
			if (d < this.r) {
				city = 'boston';
				this.count = this.count + 1;
				if (this.r + 1 < 150)
					this.r = this.r + 1;
				this.display();
			}
		}
	};

	portland = {
		x: radius,
		y: windowHeight/2,
		r: radius,
		count: 0,
		display: function () {
			fill("yellow");
			ellipse(this.x, this.y, 2*this.r, 2*this.r);
			fill("black");
			textSize(20);
			textAlign(CENTER);
			text("Portland", this.x, this.y);
			if (this.count > 0)
				text(this.count, this.x, this.y+20);
		},
		reset: function () {
			fill("black");
			ellipse(this.x, this.y, 2*this.r, 2*this.r);
			this.r = radius;
			this.count = 0;
			this.display();
		},
		clicked: function() {
			var d = dist(mouseX, mouseY, this.x, this.y);
			if (d < this.r) {
				city = 'portland';
				this.count = this.count + 1;
				if (this.r + 1 < 150)
					this.r = this.r + 1;
				this.display();
			}
		}
	};

	newyork = {
		x: windowWidth/2,
		y: windowHeight-radius,
		r: radius,
		count: 0,
		display: function () {
			fill("blue");
			ellipse(this.x, this.y, 2*this.r, 2*this.r);
			fill("white");
			textSize(20);
			textAlign(CENTER);
			text("New York", this.x, this.y);
			if (this.count > 0)
				text(this.count, this.x, this.y+20);
		},
		reset: function () {
			fill("black");
			ellipse(this.x, this.y, 2*this.r, 2*this.r);
			this.r = radius;
			this.count = 0;
			this.display();
		},
		clicked: function() {
			var d = dist(mouseX, mouseY, this.x, this.y);
			if (d < this.r) {
				city = 'newyork';
				this.count = this.count + 1;
				if (this.r + 1 < 150)
					this.r = this.r + 1;
				this.display();
			}
		}
	};

	austin = {
		x: windowWidth-radius,
		y: windowHeight/2,
		r: radius,
		count: 0,
		display: function () {
			fill("tan");
			ellipse(this.x, this.y, 2*this.r, 2*this.r);
			fill("white");
			textSize(20);
			textAlign(CENTER);
			text("Austin", this.x, this.y);
			if (this.count > 0)
				text(this.count, this.x, this.y+20);
		},
		reset: function () {
			fill("black");
			ellipse(this.x, this.y, 2*this.r, 2*this.r);
			this.r = radius;
			this.count = 0;
			this.display();
		},
		clicked: function() {
			var d = dist(mouseX, mouseY, this.x, this.y);
			if (d < this.r) {
				city = 'austin';
				this.count = this.count + 1;
				if (this.r + 1 < 150)
					this.r = this.r + 1;
				this.display();
			}
		}
	};

	denver = {
		x: windowWidth/4-2*radius,
		y: windowHeight/4-radius,
		r: radius,
		count: 0,
		display: function () {
			fill("orange");
			ellipse(this.x, this.y, 2*this.r, 2*this.r);
			fill("white");
			textSize(20);
			textAlign(CENTER);
			text("Denver", this.x, this.y);
			if (this.count > 0)
				text(this.count, this.x, this.y+20);
		},
		reset: function () {
			fill("black");
			ellipse(this.x, this.y, 2*this.r, 2*this.r);
			this.r = radius;
			this.count = 0;
			this.display();
		},
		clicked: function() {
			var d = dist(mouseX, mouseY, this.x, this.y);
			if (d < this.r) {
				city = 'denver';
				this.count = this.count + 1;
				if (this.r + 1 < 150)
					this.r = this.r + 1;
				this.display();
			}
		}
	};

	neworleans = {
		x: windowWidth*3/4+2*radius,
		y: windowHeight/4-radius,
		r: radius,
		count: 0,
		display: function () {
			fill("grey");
			ellipse(this.x, this.y, 2*this.r, 2*this.r);
			fill("white");
			textSize(20);
			textAlign(CENTER);
			text("New Orleans", this.x, this.y);
			if (this.count > 0)
				text(this.count, this.x, this.y+20);
		},
		reset: function () {
			fill("black");
			ellipse(this.x, this.y, 2*this.r, 2*this.r);
			this.r = radius;
			this.count = 0;
			this.display();
		},
		clicked: function() {
			var d = dist(mouseX, mouseY, this.x, this.y);
			if (d < this.r) {
				city = 'neworleans';
				this.count = this.count + 1;
				if (this.r + 1 < 150)
					this.r = this.r + 1;
				this.display();
			}
		}
	};

	toronto = {
		x: windowWidth/4-2*radius,
		y: windowHeight*3/4+radius,
		r: radius,
		count: 0,
		display: function () {
			fill("green");
			ellipse(this.x, this.y, 2*this.r, 2*this.r);
			fill("white");
			textSize(20);
			textAlign(CENTER);
			text("Toronto", this.x, this.y);
			if (this.count > 0)
				text(this.count, this.x, this.y+20);
		},
		reset: function () {
			fill("black");
			ellipse(this.x, this.y, 2*this.r, 2*this.r);
			this.r = radius;
			this.count = 0;
			this.display();
		},
		clicked: function() {
			var d = dist(mouseX, mouseY, this.x, this.y);
			if (d < this.r) {
				city = 'toronto';
				this.count = this.count + 1;
				if (this.r + 1 < 150)
					this.r = this.r + 1;
				this.display();
			}
		}
	};

	annarbor = {
		x: windowWidth*3/4+2*radius,
		y: windowHeight*3/4+radius,
		r: radius,
		count: 0,
		display: function () {
			fill("purple");
			ellipse(this.x, this.y, 2*this.r, 2*this.r);
			fill("white");
			textSize(20);
			textAlign(CENTER);
			text("Ann Arbor", this.x, this.y);
			if (this.count > 0)
				text(this.count, this.x, this.y+20);
		},
		reset: function () {
			fill("black");
			ellipse(this.x, this.y, 2*this.r, 2*this.r);
			this.r = radius;
			this.count = 0;
			this.display();
		},
		clicked: function() {
			var d = dist(mouseX, mouseY, this.x, this.y);
			if (d < this.r) {
				city = 'annarbor';
				this.count = this.count + 1;
				if (this.r + 1 < 150)
					this.r = this.r + 1;
				this.display();
			}
		}
	};

	centerBox = {
		x1: windowWidth/4,
		y1: windowHeight/4,
		x2: windowWidth/2,
		y2: windowHeight/2,
		display: function () {
			fill("black");
			rect(this.x1, this.y1, this.x2, this.y2);
			fill("blue");
			rect(this.x1, this.y1, this.x2, this.y2);
			fill("orange");
			textSize(30);
			text("Click the CITY you want to visit next week.", windowWidth/2, windowHeight*5/16);
			textSize(20);
			text("See how many others other people want to do the same!", windowWidth/2, windowHeight*11/16);
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

	centerBox.display();
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

	var newDate = new Date();
	var newTime = newDate.getTime();

	if (newTime - startTime > 60000*60*24*7) {
		boston.reset();
		portland.reset();
		newyork.reset();
		austin.reset();
		denver.reset();
		neworleans.reset();
		toronto.reset();
		annarbor.reset();

		centerBox.display();

		startTime = newTime;
	}
}
	

function updateWeather() {
	
	var api_key = '33fbebc38bb57a0047be5baeb2d3581f';
	$('#owm-data').load('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&mode=html&units=imperial&appid=' + api_key);
}


