import { RxCross1 } from 'react-icons/rx';
import { TbCircle } from 'react-icons/tb';
import { cn } from '../utils/cn';

const Cell: React.FC<{
  index: number;
  dimension: number;
  handler: (index: number) => void;
  occupiedIndexes: { [key: number]: string };
  winnerPattern: number[] | undefined;
}> = ({ dimension, handler, occupiedIndexes, index, winnerPattern }) => {
  return (
    <button
      onClick={() => handler(index)}
      disabled={occupiedIndexes[index] ? true : false}
      className={cn(
        'flex justify-center items-center text-6xl uppercase text-indigo-600',
        dimension === 3 && 'size-20 md:size-32 xl:size-40',
        dimension === 4 && 'size-16 md:size-28 xl:size-36',
        dimension === 5 && 'size-16 md:size-24 xl:size-32',
        dimension === 6 && 'size-12 md:size-20 xl:size-28',
        winnerPattern
          ? winnerPattern.includes(index)
            ? 'bg-lime-500 text-white'
            : 'disabled:bg-white/10'
          : 'disabled:bg-white/10'
      )}
    >
      {occupiedIndexes[index] ? (
        occupiedIndexes[index] === 'x' ? (
          <RxCross1 />
        ) : (
          <TbCircle />
        )
      ) : (
        ''
      )}
    </button>
  );
};

export default Cell;
