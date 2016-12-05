// Minimal UI that redraws the board and makes clear whose turn it is, each turn
// Players can submit moves
// Win detection - detect and display who wonBonus

Board = function () {
	this.currentPlayer = 1;
	// board which is an array of arrays
	this.game = [[0,0,0],[0,0,0],[0,0,0]]
	// function which will log the board
	this.printBoard = () => {
		this.game.forEach((row) => {
			console.log(row);
		})
	}
	// function that will start a new game
	this.newGame = () => {
		console.log('The board has been reset for a new game')
		this.game = [[0,0,0],[0,0,0],[0,0,0]];
		this.currentPlayer = 1;
	}
	// function that will toggle a piece
	this.togglePiece = (row, col) => {
		if (row > 2 || row < 0 || col > 2 || col < 0) {
			console.log('Position out of bounds: select rows & cols between 0 and 2')
		} else if (this.game[row][col] != 0) {
			console.log('There is already a piece at this position')
		} else {
			this.game[row][col] = this.currentPlayer
			//Check for a win and print winner if one
			if (this.checkWin()) {
				console.log('The winner is player ', this.currentPlayer)
				this.printBoard();
				this.newGame()
				return;
			}
			this.currentPlayer = (this.currentPlayer === 1 ? 2 : 1);
			console.log('It is now Player ' + this.currentPlayer + '\'s turn')
		}
		this.printBoard();
	}
	// function that will evaluate a win
	this.checkWin = () => {
		this.checkCross('row')
		this.checkCross('col')
	}

	this.checkCross = (type) => {
		//Sometimes returning undefined
		for (var row = 0; row < 3; row++) {
			for (var col = 0; col < 3; col++) {
				const first = (type === 'row' ? this.game[row][0] : this.game[0][col])

				//If the space hasn't been played yet or it isn't the same as the first value
				if (this.game[row][col] === 0 || this.game[row][col] != first) {
					if ((row === 2 && type === 'row') || (col === 2 && type === 'col')) {
						//If we are at the end there must be no wins
						return false;
					} else {
						//Try the next row
						break;
					}
				} else if ((type === 'row' && col === 2) || (type === 'col' && row === 2) && this.game[row][col] === first) {
					//If we are on the last column this must be a win
					return true;
				}
			}
		}
	}
}

test = new Board()
test.printBoard()
// test.togglePiece(0,0)
// test.togglePiece(1,1)
// test.togglePiece(0,1)
// test.togglePiece(2,2)
// test.togglePiece(0,2)

// test.togglePiece(0, 1)
// test.togglePiece(0, 0)
// test.togglePiece(1, 1)
// test.togglePiece(2, 2)
// test.togglePiece(2, 1)