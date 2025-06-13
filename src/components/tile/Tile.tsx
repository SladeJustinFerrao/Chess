import "./Tile.css";

interface Props {
  image?: string;
  position: number;
}

const Tile = ({ position, image }: Props) => {
  if (position % 2 === 0) {
    return (
      <div className="tile black-tile">
        <img src={image} alt={image} />
      </div>
    );
  } else {
    return (
      <div className="tile white-tile">
        <img src={image} alt={image} />
      </div>
    );
  }
};

export default Tile;
