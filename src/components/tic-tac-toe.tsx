import { useState } from 'react';
import { useTicTacToe } from '../hooks/useTicTacToe';
import Cell from './cell';
import Settings from './settings';

const TicTacToe = () => {
  const [dimension, setDimension] = useState<number>(3);
  const [play, setPlay] = useState<boolean>(false);
  const [players, setPlayers] = useState<{
    [key: string]: string;
  }>({
    player1: 'Player 1',
    player2: 'Player 2',
  });

  const { boards, occupiedIndexes, handler, winner, reset, isDraw } =
    useTicTacToe(dimension);

  return (
    <div className='pt-8  md:pt-12 xl:pt-20  flex flex-col gap-20'>
      <div>
        <div className='size-fit relative mx-auto'>
          {play && !winner?.name ? null : (
            <div className='absolute inset-0 z-50 bg-white/20'></div>
          )}

          <div className='divide-y divide-indigo-600  size-fit'>
            {boards.map((row, index) => {
              return (
                <div
                  key={index}
                  className='flex divide-x divide-indigo-600  size-fit '
                >
                  {row.map((cell, i) => (
                    <Cell
                      key={i}
                      dimension={dimension}
                      handler={handler}
                      index={cell}
                      occupiedIndexes={occupiedIndexes}
                      winnerPattern={winner?.pattern}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {winner?.name && (
          <p className='mt-8 italic font-medium text-sm text-indigo-600 text-center'>
            Congratulations{' '}
            {winner.name === 'x' ? players?.['player1'] : players?.['player2']}!
            Click the restart button to play again.. 😎
          </p>
        )}

        {!play && (
          <p className='mt-8 italic font-medium text-sm text-indigo-600 text-center'>
            Let's configure the settings and start playing. ⬇️⏬
          </p>
        )}

        {isDraw && (
          <p className='mt-8 italic font-medium text-sm text-indigo-600 text-center'>
            Draw! 🎉 Click the restart button to play again.. 😎
          </p>
        )}
      </div>

      <Settings
        dimension={dimension}
        setDimension={setDimension}
        play={play}
        setPlay={setPlay}
        players={players}
        setPlayers={setPlayers}
        reset={reset}
      />
    </div>
  );
};

export default TicTacToe;
