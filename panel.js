 function panel() {
	var pnl = document.createElement("div");
  var btnPasue = document.getElementById("btnPause");

	pnl.arrImg = Array2(lenRow + 1);

	for(var i=1; i<= lenRow; i++) {
		for(var j=1; j<= lenCol; j++) {
			pnl.arrImg[i][j] = piece(pnl, i,j, 0);
			pnl.arrImg[i][j].setNull();
			pnl.appendChild(pnl.arrImg[i][j]);
		}
	}

	pnl.style.position = "relative";
	pnl.iI = 0;
	pnl.jJ = 0;
	pnl.iScore = 0;
	pnl.arrCopy = Array2(lenRow+1);
	pnl.arr = new pattern(rand());

	var pnlAdd = new panelAdd();
	document.getElementById("b3").appendChild(pnlAdd);
	var tCD = new timerCheckDown(pnl);
	var tD = new timerDown(pnl);
	var tS = new timerDoScore(pnl, tD);
	var tT = new timerTime();

	pnl.left = function() {
		if(pnl.checkLeft()) {
			for (var i = pnl.iI - len; i <= pnl.iI; i++) {
        		for (var j = pnl.jJ; j <= pnl.jJ + len; j++) {
            		if(pnl.arrImg[i][j].image.ivalue >0) swap(pnl.arrImg[i][j], pnl.arrImg[i][j - 1]);
             	}
         	}
			if(pnl.jJ != 1) pnl.jJ--;
		}
	}

	pnl.checkLeft = function() {
		for(var j = pnl.jJ ; j<= pnl.jJ + len; j++) {
			for(var i = pnl.iI - len; i<= pnl.iI; i++) {
				if(pnl.arrImg[i][j].image.ivalue > 0) {
					if(pnl.arrImg[i][j - 1].image.ivalue == -1) return false;
				}
			}
		}
		return true;
	}

	pnl.right = function() {
		if(pnl.checkRight()) {
			for (var j = pnl.jJ + len; j >= pnl.jJ; j--) {
        		for (var i = pnl.iI-len; i <=  pnl.iI; i++) {
                	if(pnl.arrImg[i][j].image.ivalue > 0) swap(pnl.arrImg[i][j], pnl.arrImg[i][j + 1]);
            	}
         	}
         	if(pnl.jJ + len != lenCol) pnl.jJ++;
		}
	}

	pnl.checkRight = function() {
		for(var j = pnl.jJ + len ; j >= pnl.jJ ; j--) {
			for(var i = pnl.iI - len; i<= pnl.iI; i++) {
				if(pnl.arrImg[i][j].image.ivalue > 0) {
					if(pnl.arrImg[i][j + 1].image.ivalue == -1) return false;
				}
			}
		}
		return true;
	}

	pnl.down = function() {
		if(!pnl.checkDown()) {
		for (var i = pnl.iI; i >= pnl.iI - len; i--) {
             for (var j = pnl.jJ; j <= pnl.jJ + len; j++) {
                 if(pnl.arrImg[i][j].image.ivalue >0) swap(pnl.arrImg[i][j], pnl.arrImg[i + 1][j]);
             }
        }
         if(pnl.iI <lenRow) pnl.iI++;

		 tCD.start();
		}
	}

	pnl.checkDown = function() {
		for(var i = pnl.iI; i>= pnl.iI-len; i--) {
			for(var j= pnl.jJ; j<= pnl.jJ + len; j++) {
				if(pnl.arrImg[i][j].image.ivalue >0) {
					if(i == lenRow) return true;
				 	if(pnl.arrImg[i + 1][j].image.ivalue == -1) return true;
				}
			}
		}
		return false;
	}

	pnl.processDown = function() {
		if(pnl.checkDown()) {
			pnl.drawG(0);
			pnl.DoScore();
			pnl.addG(pnl.arr, 1);
			pnl.arr = new pattern(rand());
			pnlAdd.setImage(pnl.arr);
		}
	}

	pnl.rotate = function() {
		if(pnl.checkRotote()) {
			arrCopy(pnl.arrImg, pnl.arrCopy, pnl.iI, pnl.jJ);
			pnl.drawG(1);
		}
	}

	pnl.checkRotote = function() {
		    for (var i = pnl.iI - len; i <= pnl.iI; i++)
            {
                for (var j = pnl.jJ; j <= pnl.jJ + len; j++)
                {
					if(pnl.arrImg[i][j].image.ivalue == notRotate) return false;
                    pnl.arrCopy[i][j] = pnl.arrImg[pnl.iI + pnl.jJ - j][pnl.jJ - (pnl.iI - (i + len))].image.ivalue;
                }
            }

			for (var i = pnl.iI - len; i <= pnl.iI; i++)
            {
                for (var j = pnl.jJ; j <= pnl.jJ + len; j++)
                {
                    if(pnl.arrCopy[i][j] == -1) {
						if(pnl.arrImg[i][j].image.ivalue != -1) return false;
					}
                }
            }
			return true;
	}

	pnl.updateArr = function(k ,ar) {
		for(i = k + 1; i<= rowG; i++) {
			if(ar[i] !=0) ar[i]++;
		}
		return ar;
	}

	pnl.DoScore = function() {
		var ar = pnl.arrScore();
		if(pnl.count(ar, rowG)) {
			 tS.start(ar);
		}
	}

	pnl.timerS = function(ar) {
		for(var i =1; i <= rowG; i++) {
			if(ar[i] != 0) {
				for(var j = 1; j<= lenCol; j++) {
					pnl.arrImg[ar[i]][j].setNull();
					pnl.arrImg[ar[i]][j].setValue(0);
					for(var k = ar[i]; k >= pnl.iI; k--) {
						swap(pnl.arrImg[k][j], pnl.arrImg[k-1][j]);
					}
				}
				ar = pnl.updateArr(i,ar);

				pnl.iScore = pnl.iScore + iScore;
				draw("score", pnl.iScore);
			}
		}
	}

	pnl.count = function(ar, len) {
		for(var i=1; i<= len; i++) {
			if(ar[i] != 0) return true;
		}
		return false;
	}

	pnl.arrScore = function() {
		var arS = new Array(rowG+1);
		for(var i =1; i<= rowG; i++) {
			arS[i] = pnl.checkScore(pnl.iI - i + 1);
		}
		return arS;
	}

	pnl.checkScore = function(digit) {
		for(var i = 1; i<= lenCol; i++) {
			if(pnl.arrImg[digit][i].image.ivalue != -1) return 0;
		}
		return digit;
	}

	pnl.funcKeyDown = function(event) {
         var keyCode = event.which;
         if (keyCode == undefined) {
             keyCode = event.keyCode;
         }
         if(keyCode == 37) pnl.left();
		  else if(keyCode == 38) pnl.rotate();
		 else if(keyCode == 39) pnl.right();
		 else if(keyCode == 40) pnl.down();
    }

	pnl.drawAdd = function(arr) {
		for(var i=1; i<= rowG; i++) {
			for(var j=1; j<= colG; j++) {

			}
		}
	}

	pnl.drawG = function(digit) {
		for(var i= pnl.iI - len; i<= pnl.iI; i++) {
			for(var j = pnl.jJ; j<= pnl.jJ + len; j++) {
				if(digit == 0) {
					if(pnl.arrImg[i][j].image.ivalue > 0){
						pnl.arrImg[i][j].setValue(-1);
					}
				}
				else if(digit == 1) {
					pnl.arrImg[i][j].setImage(pnl.arrImg[i][j].image.ivalue);
				}
			}
		}
	}

	pnl.addG = function(arr, digit) {
		for(var i=1; i<= rowG; i++) {
			for(var j=1; j<= colG; j++) {
				pnl.arrImg[i][j-1+jJ].image.ivalue = arr[i][j];
			}
		}
		pnl.iI = iI;
		pnl.jJ = jJ;
		pnl.drawG(digit);
	}

	pnl.bTimer = true;
	pnl.pauseGame = function() {
		if(pnl.bTimer) {
			tT.stopT();
			tD.stopT();
			pnl.bTimer = false;
      btnPasue.src = srcImgBtnPause_Pressed;
		}else {
			 tT.continueT();
			 tD.start();
			 pnl.bTimer = true;
       btnPasue.src = srcImgBtnPause;
		}
	}
	pnl.newGame = function() {
		tT.stopT();
		tD.stopT();
		tT.startT();
		pnl.bTimer = true;
		drawLoadImage(pnl.arrImg);

		pnl.addG(pnl.arr, 1);
		tD.start();
		pnl.arr = new pattern(rand());
		pnlAdd.setImage(pnl.arr);

		pnl.iScore = 0;
		draw("score", pnl.iScore);
	}
	return pnl;
}
