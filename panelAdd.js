function panelAdd() {
	var pnl = document.createElement("div");
	pnl.img = Array2(rowG + 1);
	
	for(var i=1; i <= rowG; i++) {
		for(var j=1; j<= colG; j++) {
			pnl.img[i][j] = piece(pnl, i,j, 0) ;
			pnl.img[i][j].setNull();
			pnl.appendChild(pnl.img[i][j]);
		}
	}
	
	pnl.style.position = "relative";
	pnl.setImage = function(arr) {
		for(var i=1; i <= rowG; i++) {
			for(var j=1; j<= colG; j++) {
				pnl.img[i][j].setImage(arr[i][j]);
			}
		}
	}
	return pnl;
}