import Tile from './Tile';

const Grid = () => {
  return (
    <div className="grid grid-cols-2 gap-[1px] md:grid-cols-3 xl:grid-cols-4">
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </div>
  );
};

export default Grid;
