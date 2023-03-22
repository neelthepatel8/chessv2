import {
    PawnB,
    PawnW,
    RookB,
    RookW,
    KnightB,
    KnightW,
    BishopB,
    BishopW,
    QueenB,
    QueenW,
    KingB,
    KingW,
  } from "./pieces_export";

  export default function getPiece(pieceName: string): string {
    switch (pieceName) {
        case 'r':
            return RookB.src;
        case 'R':
            return RookW.src;
        case 'p':
            return PawnB.src;
        case 'P':
            return PawnW.src;
        case 'q':
            return QueenB.src;
        case 'Q':
            return QueenW.src;
        case 'b':
            return BishopB.src;
        case 'B':
            return BishopW.src;
        case 'n':
            return KnightB.src;
        case 'N':
            return KnightW.src;
        case 'k':
            return KingB.src;
        case 'K':
            return KingW.src;
        default:
            return "";
    }

  }