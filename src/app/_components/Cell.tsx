import React from "react";

const Cell = ({
  row,
  col,
  value,
  changeNumber,
}: {
  row: number;
  col: number;
  value: number;
  changeNumber: (row: number, col: number) => void;
}) => {
  const displayValue = value === 0 ? " " : value;

  return (
    <div
      className="flex justify-center items-center w-20 h-20 bg-black border-white border-4 transition-colors duration-300 hover:bg-gray-900 cursor-pointer"
      onClick={() => changeNumber(row, col)}
    >
      <h1 className="font-bold text-2xl">{displayValue}</h1>
    </div>
  );
};

export default Cell;
