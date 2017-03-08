var walle = [];

function setup() {

	createCanvas(600,600);
		for(var i=0; i<5; i++){
		    walle[i] ={
			x: random(30, width),
			y: random(30,height),
			xspeed: random(1, 5),
			yspeed: (-1, 1),

			move: function(){
				this.x = this.x +this.xspeed;
				this.y = this.y + this.yspeed;
			},

			bounce: function(){
				if(	this.x > width || this.x < 0){
				
				this.xspeed = this.xspeed * -1;
			}

			if(this.y > height || this.y <0){
				
				this.yspeed = this.yspeed *-1;
			}
		},

			display: function(){
				noStroke();
				fill(255,0,0);
				rect(this.x, this.y, 80, 80);
				fill(random(255), random(255), random(255));
				ellipse(this.x+40, this.y-35, 50, 50);
				fill(0);
				ellipse(this.x+40, this.y-35, 15, 15);
				arc(this.x+40, this.y-25, 10, 10, 0, PI);
				// fake tie
				fill(0);
				rect(this.x+30, this.y, 20, 30);
				fill(0);
				triangle(this.x+40, this.y+50, this.x+30, this.y+30, this.x+50, this.y+30);
			}
		}
	}
	print(walle);	
}

function draw() {
	background(0);
	for ( var i=0; i < walle.length; i++) {
		walle[i].move();
		walle[i].bounce();
		walle[i].display();
	}
}


