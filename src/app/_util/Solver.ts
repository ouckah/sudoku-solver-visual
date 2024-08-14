import { EMPTY } from "./Constants";
import { isValid } from "./Validation";

class SudokuSolver {
    private board: number[][];
  
    constructor(board: number[][]) {
      this.board = board;
    }
  
    public solve(): boolean {
      return this.solveRecursive();
    }

    private solveRecursive(): boolean {
        const N = this.board.length;
    
        // loop through each cell on the board
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {

                // check if the cell is empty
                const value = this.board[i][j];
                if (value == EMPTY) {

                    // check all possible choices
                    for (let choice = 1; choice <= N; choice++) {

                        // make sure that the choice is a valid
                        // choice to make on current board
                        if (isValid(this.board, i, j, value)) {

                            // check to see if this leads to a possible solution
                            this.board[i][j] = value
                            if (this.solveRecursive()) {
                                return true
                            }

                            // if it does NOT lead to a solution, reset
                            this.board[i][j] = EMPTY
                        }
                    }

                    // if no choices lead to a solved board
                    // this is an invalid path
                    return false
                }
            }
        }

        // if we reached the end of the board its solved
        return true
    }

    public getBoard(): number[][] {
        return this.board;
    }
}

export default SudokuSolver