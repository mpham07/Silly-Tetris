function timerDown(pnl) {
	this.time = 0;
	this.start = function() {
		this.time = setInterval(pnl.down,delayTimeDown);	
	}
	
	this.stopT = function() {
		clearInterval(this.time);
	}
}

function timerCheckDown(pnl) {
	var time = 0;	
	this.start = function() {
		this.time = setTimeout(pnl.processDown,delayTimeCheckDown);		
	}
}

function timerDoScore(pnl,tD1) {
	this.time = 0;
	this.inteval = 0;
	var ar ;	
	var j=1;
	var i=1;	
	var tD = tD1;
	this.start = function(arr) {
		this.inteval = delayTimeScore;
		tD.stopT();
		ar = arr;
		j=1;
		i=1;
		this.time = setInterval(this.run,this.inteval);	
	}
	
	this.run = function() {		
		if(ar[i]!=0) {	
			pnl.arrImg[ar[i]][j].setImage(11);				
			j++;
			if(j==lenCol + 1) {j=1; i++;}			
		}else i++;
		
		if(i>rowG) {	
			pnl.timerS(ar);	
			tD.start();
			this.stopT();			
		}
	}
	
	this.stopT = function() {						
		clearInterval(this.time);
	}	
}

function timerTime() {
	this.timer = 0;
	var s = 0 ;
	var m = 0;
	var h = 0;

	this.startT = function() {	
		s = 0 ;
		m = 0;
		h = 0;
		draw("s",s);
		draw("m",m);
		draw("h",h);
		this.timer = setInterval(this.run,delayTimer);
	}	
	
	this.continueT = function() {	
		this.timer = setInterval(this.run,delayTimer);
	}	
	
	
	this.run = function() {
				s++;
				if(s == 60) {
					s=0;m++;
					if(m==60) {
						m=0;h++;
					}
				}
				draw("s",s);
				draw("m",m);
				draw("h",h);
	};	
	
	this.stopT = function() {
		clearInterval(this.timer);
	}
}

	
	
