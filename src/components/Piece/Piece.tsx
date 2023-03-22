import "../Piece/Piece.css";

interface Props {
  image: string | null;
}

let selectedPiece: HTMLDivElement | null = null;

const handleMouseDown = (e: React.MouseEvent) => {
  selectedPiece = e.target as HTMLDivElement;
};

const handleDrag = (e: React.MouseEvent) => {

  if (selectedPiece && selectedPiece === e.target) {
    selectedPiece.style.position = "absolute";
    let x = e.clientX - 40;
    let y = e.clientY - 40;
    selectedPiece.style.left = `${x}px`;
    selectedPiece.style.top = `${y}px`;
  }
};

const handleMouseUp = (e: React.MouseEvent) => {
  let dropX = Math.round((e.clientX - 133 - 40) / 80);
  let dropY = Math.round((e.clientY - 54.5 - 40) / 80);

  console.log(dropX, dropY);
  
  selectedPiece = null;
}

export default function Piece({ image }: Props) {
  if (image) {
    return (
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleDrag}
        onMouseUp={handleMouseUp}
        className="piece"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    );
  } else {
    return <div className="piece empty-piece"></div>;
  }
}
