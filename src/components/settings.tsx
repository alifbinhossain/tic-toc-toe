import { RxCross1 } from 'react-icons/rx';
import { TbCircle } from 'react-icons/tb';

interface IProps {
  reset: () => void;
  dimension: number;
  setDimension: (number: number) => void;
  play: boolean;
  setPlay: React.Dispatch<React.SetStateAction<boolean>>;
  players: { [key: string]: string };
  setPlayers: React.Dispatch<
    React.SetStateAction<{
      [key: string]: string;
    }>
  >;
}

const Settings = ({
  dimension,
  play,
  setPlay,
  players,
  reset,
  setDimension,
  setPlayers,
}: IProps) => {
  return (
    <div className=' rounded-md bg-white/20 flex-1 h-fit p-4 md:p-8 flex flex-col justify-between gap-20 '>
      <div className='space-y-4'>
        <div className='flex items-center gap-2 w-full'>
          <p className='text-lg font-medium text-black'>Select Dimension :</p>
          <select
            className='py-2 px-4 bg-white rounded-md flex-1 max-w-[200px] '
            onChange={(e) => {
              reset();
              setDimension(Number(e.target.value));
            }}
          >
            <option value={3}>3✖️3</option>
            <option value={4}>4✖️4</option>
            <option value={5}>5✖️5</option>
            <option value={6}>6✖️6</option>
          </select>
        </div>

        <div className='flex  items-center gap-2'>
          <p className='w-32 flex items-center gap-1'>
            <span> Player 1</span>
            <span className='flex-1 flex items-center text-indigo-600 font-medium'>
              {' ('}
              <RxCross1 />
              {')'}
            </span>{' '}
            :
          </p>
          {play ? (
            <p className='flex-1' onClick={() => setPlay((prev) => !prev)}>
              <span> {players?.['player1']}</span>
            </p>
          ) : (
            <input
              onChange={(e) => {
                setPlayers((prev) => {
                  return {
                    ...prev,
                    player1: e?.target?.value,
                  };
                });
              }}
              type='text'
              placeholder='Player 1'
              className='px-4 py-2 bg-white rounded-md flex-1 max-w-[200px]'
            />
          )}
        </div>

        <div className='flex items-center gap-2'>
          <p className='w-32 flex items-center gap-1'>
            <span> Player 2</span>
            <span className=' flex-1 flex items-center text-indigo-600 font-medium'>
              {' ('}
              <TbCircle />
              {')'}
            </span>{' '}
            :
          </p>
          {play ? (
            <p className='flex-1 ' onClick={() => setPlay((prev) => !prev)}>
              <span> {players?.['player2']}</span>
            </p>
          ) : (
            <input
              onChange={(e) => {
                setPlayers((prev) => {
                  return {
                    ...prev,
                    player2: e?.target?.value,
                  };
                });
              }}
              type='text'
              placeholder='Player 2'
              className='px-4 py-2 bg-white rounded-md flex-1 max-w-[200px]'
            />
          )}
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <button
          disabled={
            play || !dimension || !players?.['player1'] || !players?.['player2']
          }
          className='rounded-md py-2 px-4 bg-indigo-500 text-white disabled:opacity-50'
          onClick={() => {
            setPlay(true);
          }}
        >
          Start
        </button>

        <button
          disabled={!play}
          className='rounded-md py-2 px-4 bg-indigo-500 text-white disabled:opacity-50'
          onClick={() => {
            reset();
            setPlay(true);
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default Settings;
