export const isValid = (
    board: number[][],
    row: number,
    col: number,
    value: number
): boolean => {

    // check row
    if (board[row].includes(value)) return false;

    // check column
    if (board.some(row => row[col] === value)) return false;

    // check 3x3 subgrid
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let r = startRow; r < startRow + 3; r++) {
        for (let c = startCol; c < startCol + 3; c++) {
            if (board[r][c] === value) return false;
        }
    }

    return true;
};