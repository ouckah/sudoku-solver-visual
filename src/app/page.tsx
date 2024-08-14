"use client";

import React, { useState } from "react";
import Board from "./_components/Board";
import SudokuSolver from "./_util/Solver";

export default function Home() {
  const [board, setBoard] = useState(() => {
    const initialBoard = Array.from({ length: 9 }, () => Array(9).fill(0));
    return initialBoard;
  });

  const handleBoardUpdate = (newBoard: number[][]) => {
    setBoard(newBoard.map((row) => [...row]));
  };

  const solveSudoku = async () => {
    console.log("Solving...");
    const solver = new SudokuSolver(board, handleBoardUpdate, 100);
    if (await solver.solve()) {
      console.log("Solved board:", solver.getBoard());
    } else {
      alert("No solution exists.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col z-10 w-full max-w-5xl items-center justify-between gap-5 font-mono text-sm lg:flex">
        <Board board={board} />
        <button className="p-5 bg-gray-700" onClick={solveSudoku}>
          <h1>Solve</h1>
        </button>
      </div>
    </main>
  );
}
