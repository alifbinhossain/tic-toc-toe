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
    <div className=' rounded-md bg-white/20 flex-1 h-fit p-8 flex flex-col justify-between gap-20'>
      <div className='space-y-4'>
        <div className='flex items-center gap-2'>
          <p className='text-lg font-medium text-black'>Select Dimension :</p>
          <select
            className='py-2 px-4 bg-white rounded-md '
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

        <div className='flex items-center gap-2'>
          <p className='w-20'>Player 1 :</p>
          {play ? (
            <p onClick={() => setPlay((prev) => !prev)}>
              {players?.['player1']} {}
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
              className='px-4 py-2 bg-white rounded-md'
            />
          )}
        </div>

        <div className='flex items-center gap-2'>
          <p onClick={() => setPlay((prev) => !prev)} className='w-20'>
            Player 2 :
          </p>
          {play ? (
            <p>{players?.['player2']}</p>
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
              className='px-4 py-2 bg-white rounded-md'
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
