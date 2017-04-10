function Array2(len) {
	var arr = new Array;
	for(var i=0; i<len; i++) {
		arr[i] = new Array;
	}
	return arr;
}

function arrLoad(arr) {	
	for(var i=1; i<= lenRow; i++) {
		for(var j= 1; j<= lenCol; j++) {		
			arr[i][j].image.ivalue = 0;				
		}		
	}	
	return arr;
}

function rand() {
	var a = Math.round(Math.random() * 10);	
		if(a==0) a++;
	return a;
}


function drawLoadImage(arrImg) {	
	for(var i =1;i<= lenRow; i++) {
		for(var j = 1; j<= lenCol; j++) {			
			arrImg[i][j].setNull();		
			arrImg[i][j].setValue(0);	
		}
	}
}


function swap(a,b) {
    var tg = a.image.ivalue ;
	a.image.ivalue = b.image.ivalue;
	b.image.ivalue = tg;
	
	var st = new Image;
	st.src = a.image.src;
	a.image.src = b.image.src;
	b.image.src = st.src;
}

function arrCopy(arr2, arr, a, b) {
	for(var i = a - len; i<= a; i++)
    {
        for(var j = b; j<= b+len; j++)
        {
             arr2[i][j].image.ivalue = arr[i][j];
        }
    }	
}

function draw(id, val) {
	if(val < 10) val = "0" + val;
	
	var d = document.getElementById(id);
	if(d.hasChildNodes()) d.removeChild(d.firstChild);
	d.appendChild(document.createTextNode(val));
}

