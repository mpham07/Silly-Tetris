function piece(panel, irow, icol, ivalue) {
	var pnl = document.createElement("div");
	pnl.image = document.createElement("img");

	pnl.image.width = "26"
	pnl.image.height = "26"

	pnl.icol = icol;
	pnl.irow = irow;
	pnl.image.ivalue = ivalue;
	pnl.style.position = "absolute";
	pnl.style.left = pnl.icol * width + x0 + "px";
	pnl.style.top = pnl.irow * width + y0 + "px";
	pnl.appendChild(pnl.image);

	pnl.setImage = function(value) {
		pnl.image.src = startSrc + value + endSrc;
	}

	pnl.setValue = function(value) {
		pnl.image.ivalue = value;
	}

	pnl.setImageDown = function() {
		pnl.image.src =  startSrc + "-1" + endSrc;
	}

	pnl.setNull = function() {
		pnl.image.src =  startSrc + "0" + endSrc;
	}
	return pnl;
}
