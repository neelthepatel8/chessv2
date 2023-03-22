import Piece from "../Piece/Piece";
import Tile from "../Tile/Tile";
import "../Chessboard/Chessboard.css";
import getPiece from "../../Helper";

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"].reverse();

let board: any = [];

const startFen: string = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
// const startFen: string = "r1b1k1r1/ppqp2pp/2n2n2/2b1pp2/4P3/3P1N2/PPPQBPPP/R1B2RK1";

interface PieceData {
  image: string | null;
  x: number;
  y: number;
}

const positions: object = {};

function generateBoard(fen: string): PieceData[] {
  let pieces: PieceData[] = [];

  let ranks: string[] = fen.split("/");

  let image: string | null = null;

  for (let rank = 0; rank < 8; rank++) {
    let curr = 0;
    for (let file = 0; file < 8; file++) {
      let piece: string = ranks[rank][curr];
      curr++;

      // Is normal piece letter
      if (isNaN(Number(piece))) {
        image = getPiece(piece);
        pieces.push({ image, x: rank, y: file });
      }

      // Is empty space line
      else {
        file += Number(piece) - 1;
      }
    }
  }

  return pieces;
}

export default function Chessboard() {
  let pieces = generateBoard(startFen);

  for (let x = 0; x < horizontalAxis.length; x++) {
    for (let y = 0; y < verticalAxis.length; y++) {
      let img: string | null = null;
      pieces.forEach((p: PieceData) => {
        if (p.x === x && p.y === y) {
          img = p.image;
        }
      });

      board.push(
        <Tile
          key={`${y}, ${x}`}
          tileNum={x + y + 2}
          piece={
            <Piece
              image={img}
            />
          }
        />
      );
      
    }
  }

  console.log(board);

  return <div id="chessboard">{board}</div>;
}
