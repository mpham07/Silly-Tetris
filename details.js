var lenRow = 22;
var lenCol = 15;

var rowStart = 0;
var colStart = jJ;

var iI = 4;
var jJ = 6;

var rowG = 4;
var colG = 4;

var x0 = -26;
var y0 = -26;

var width = 26;

var len  = 3;

var notRotate = 2;
var iScore = 100;

var delayTimeDown = 500;
var delayTimeCheckDown = delayTimeDown/2;
var delayTimeScore = 10;
var delayTimer = 1000;

function hienthi(arr, row, col) {
	var s = "";
	for(var i=1; i<= row; i++) {
		for(var j= 1; j<= col; j++) {
			s+= arr[i][j] + " ";
		}
		s+= "\n";
	}alert(s);
}

function hienthi2(arr, row, col) {
	var s = "";
	for(var i=1; i<= row; i++) {
		for(var j= 1; j<= col; j++) {
			s+= arr[i][j].image.ivalue + " ";
		}
		s+= "\n";
	}alert(s);
}

function copy(ar2, a,b) {
	var ar1 = Array2(a+1);
	for(var i =1; i<= a; i++) {
		for(var j=1; j<= b; j++) {
			ar1[i][j] = ar2[i][j];
		}
	}
	return ar1;
}

function ht1(ar, a) {
	var s= "";
	for(var i=1; i<= a; i++) {
		s+= ar[i] + " ";
	}
	alert(s);
}

var startSrc = "Image/g(";
var endSrc = ").png";

var srcImgBtnPause_Pressed = "Image/UI/btnPause_Pressed.png";
var srcImgBtnPause = "Image/UI/btnPause.png";

function OpenFBPage() {
   window.open("https://www.facebook.com/sillybeefun/");
}
