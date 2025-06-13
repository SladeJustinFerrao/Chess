import React from "react";
import "./Chessboard.css";
import Tile from "../tile/Tile";

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

interface Piece {
  image: string;
  x: number;
  y: number;
}

const pieces: Piece[] = [];

for (let p = 0; p < 2; p++) {
  const type = p === 0 ? "b" : "w";
  const y = p === 0 ? 7 : 0;
  pieces.push({ image: `assets/images/rook-${type}.png`, x: 0, y });
  pieces.push({ image: `assets/images/rook-${type}.png`, x: 7, y });

  pieces.push({ image: `assets/images/knight-${type}.png`, x: 1, y });
  pieces.push({ image: `assets/images/knight-${type}.png`, x: 6, y });

  pieces.push({ image: `assets/images/bishop-${type}.png`, x: 2, y });
  pieces.push({ image: `assets/images/bishop-${type}.png`, x: 5, y });

  pieces.push({ image: `assets/images/queen-${type}.png`, x: 3, y });

  pieces.push({ image: `assets/images/king-${type}.png`, x: 4, y });
}

for (let i = 0; i < 8; i++) {
  pieces.push({ image: "assets/images/pawn-b.png", x: i, y: 6 });
}

for (let i = 0; i < 8; i++) {
  pieces.push({ image: "assets/images/pawn-w.png", x: i, y: 1 });
}

let activePiece: HTMLElement | null = null;

function grabPiece(e: React.MouseEvent) {
  const element = e.target as HTMLElement;
  if (element.classList.contains("chess-piece")) {
    const x = e.clientX - 50;
    const y = e.clientY - 50;
    element.style.position = "absolute";
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;

    activePiece = element;
  }
}

function movePiece(e: React.MouseEvent) {
  if (activePiece) {
    const x = e.clientX - 50;
    const y = e.clientY - 50;
    activePiece.style.position = "absolute";
    activePiece.style.left = `${x}px`;
    activePiece.style.top = `${y}px`;
  }
}

function dropPiece(e: React.MouseEvent) {
  if (activePiece) {
    activePiece = null;
  }
}

const Chessboard = () => {
  let board = [];

  for (let i = verticalAxis.length - 1; i >= 0; i--) {
    for (let j = 0; j < horizontalAxis.length; j++) {
      const position = i + j;
      let image = undefined;

      pieces.forEach((p) => {
        if (p.y === i && p.x === j) {
          image = p.image;
        }
      });

      board.push(<Tile key={`${i},${j}`} position={position} image={image} />);
    }
  }

  return (
    <div
      onMouseMove={(e) => movePiece(e)}
      onMouseDown={(e) => grabPiece(e)}
      onMouseUp={(e) => dropPiece(e)}
      id="chessboard"
    >
      {board}
    </div>
  );
};

export default Chessboard;
