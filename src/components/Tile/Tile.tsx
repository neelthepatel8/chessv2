import "../Tile/Tile.css"

interface Props {
    tileNum: number,
    piece: React.ReactNode,
}

export default function Tile({ tileNum, piece }: Props) {
  let color = tileNum % 2 === 0 ? "tile-white" : "tile-black";

  return <div className={`tile ${color}`}>
    {piece}
  </div>;
}
