import { EMPTY } from "./Constants";
import { isValid } from "./Validation";

class SudokuSolver {
    private board: number[][];
    private onBoardUpdate: (board: number[][]) => void;
    private delay: number;
  
    constructor(board: number[][], onBoardUpdate: (board: number[][]) => void, delay: number) {
      this.board = board;
      this.onBoardUpdate = onBoardUpdate;
      this.delay = delay;
    }
  
    public async solve(): Promise<boolean> {
      return this.solveRecursive();
    }

    private async solveRecursive(): Promise<boolean> {
        const N = this.board.length;

        const delayPromise = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    
        // loop through each cell on the board
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {

                // check if the cell is empty
                const value = this.board[i][j];
                if (value === EMPTY) {

                    // check all possible choices
                    for (let choice = 1; choice <= N; choice++) {

                        // make sure that the choice is a valid
                        // choice to make on current board
                        if (isValid(this.board, i, j, choice)) {

                            // check to see if this leads to a possible solution
                            this.board[i][j] = choice
                            this.onBoardUpdate(this.board);
                            await delayPromise(this.delay);
                            
                            if (await this.solveRecursive()) {
                                return true
                            }

                            // if it does NOT lead to a solution, reset
                            this.board[i][j] = EMPTY
                            this.onBoardUpdate(this.board);
                            await delayPromise(this.delay);
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