let Yuan = [];
let N = 5;
let C = ["#FAF1F5", "#F4E3EC", "#EFD5E2", "#F5F2F6", "#EAE6ED", "#E0D9E4", "#EBF5F7", "#D7ECF0", "#C3E2E8"];
let cc = 0;



function setup() {
	createCanvas(600, 600); 
	background(255);
	
}

function draw() {
	noStroke();
	//fill(100,100);
	//rect(0,0,width,height)
	
	
	fill(C[cc]);
	cc++;
	
	if(cc>8){
		cc = 0;
	}
	
	
	for(let i=0; i<N; i++){
		Yuan[i] = new yuan();
	}
	
	for(let i=0; i<Yuan.length; i++){
		//Yuan[i].sinMove();
		Yuan[i].move();
		//Yuan[i].check();
		Yuan[i].show();
	}
}





class yuan {
  constructor(){
		//this.col = color(random(255),random(255),random(255)); 
		this.X = 100;
		this.Y = random(100,500);
		this.size = random(10,20);
		this.DirX = random(0,1);
		this.Amp = random(1,20);
		this.Freq = random(1,2);
		this.Phase = random(1,2);
		this.Ave = random(1,width);
		this.y = 0;
	}
	
	show(){
		noStroke();
		//fill(this.col);
		
		for(let x=0; x<width; x++){
			angleMode(DEGREES);
		
			this.y = this.Amp * sin(this.Freq * x + this.Phase) + this.Ave;
			ellipse(x,this.y,this.size,this.size);
		}
	}
	
	move(){
		this.X = this.X + this.DirX;
		this.Y = this.Y + this.y;
	}
	
	check(){
		if ((this.X > 500) || (this.X < 100)){
			this.size = 0;
		}
		if ((this.Y > 500) || (this.Y < 100)){
			this.size = 0;
		}
	}
	
	sinMove(){
		angleMode(DEGREES);
		
		this.y = this.Amp * sin(this.Freq * this.X + this.Phase) + this.Ave;
		
		//return this.y;
	}
		
}
