import React from "react";
import Cell from "./Cell";
const Board = ({ board }: { board: number[][] }) => {
  return (
    <div className="grid grid-cols-9 gap-0 border-white border-4">
      {board.map((row, rowIndex) =>
        row.map((value, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            row={rowIndex}
            col={colIndex}
            value={value}
          />
        ))
      )}
    </div>
  );
};

export default Board;
