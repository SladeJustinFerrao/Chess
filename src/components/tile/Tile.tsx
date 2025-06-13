import "./Tile.css";

interface Props {
  image?: string;
  position: number;
}

const Tile = ({ position, image }: Props) => {
  if (position % 2 === 0) {
    return (
      <div className="tile black-tile">
         {image && <div className="chess-piece" style={{backgroundImage: `url(${image})`}} />}
      </div>
    );
  } else {
    return (
      <div className="tile white-tile">
        {image && <div className="chess-piece" style={{backgroundImage: `url(${image})`}} />}
      </div>
    );
  }
};

export default Tile;
