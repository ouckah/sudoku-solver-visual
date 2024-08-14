"use client";

import React, { useState } from "react";
import Board from "./_components/Board";
import { EMPTY } from "./_util/Constants";

export default function Home() {
  const [board, setBoard] = useState(() => {
    const initialBoard = Array.from({ length: 9 }, () => Array(9).fill(0));
    return initialBoard;
  });

  const changeNumber = (row: number, col: number) => {
    setBoard((prevBoard) => {
      const newBoard = prevBoard.map((row) => row.slice());
      const prevValue = newBoard[row][col];
      let newValue = prevValue + 1;
      if (newValue === board.length + 1) newValue = EMPTY;
      newBoard[row][col] = newValue;
      return newBoard;
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Board board={board} changeNumber={changeNumber} />
      </div>
    </main>
  );
}
