import { useState } from 'react';
import { generateBoard } from '../utils/generateBoard';
import { generatePattern } from '../utils/generatePattern';
import { checkWinner } from '../utils/check-winner';

export type IPlayer = 'x' | 'y';

export const useTicTacToe = (dimension: number) => {
  const boards = generateBoard(dimension);
  const pattern = generatePattern(dimension);
  const totalIndex = boards.reduce((pre, e) => {
    return pre + e.length;
  }, 0);

  const [currentPlayer, setCurrentPlayer] = useState<IPlayer>('x');
  const [winner, setWinner] = useState<{
    name: IPlayer | undefined;
    pattern: number[] | undefined;
  }>();

  const [occupiedIndexes, setOccupiedIndex] = useState<{
    [k: number]: IPlayer;
  }>({});

  const handler = (index: number) => {
    const newOccupiedIndexes = {
      ...occupiedIndexes,
      [index]: currentPlayer,
    };
    setOccupiedIndex(newOccupiedIndexes);
    const result = checkWinner<IPlayer>(
      currentPlayer,
      newOccupiedIndexes,
      pattern
    );

    setWinner({
      name: result?.currentPlayer,
      pattern: result?.winnerPattern,
    });

    if (currentPlayer === 'x') {
      setCurrentPlayer('y');
    } else {
      setCurrentPlayer('x');
    }
  };

  const reset = () => {
    setCurrentPlayer('x');
    setOccupiedIndex({});
    setWinner(undefined);
  };

  return {
    boards,
    occupiedIndexes,
    handler,
    currentPlayer,
    winner,
    pattern,
    reset,
    isDraw:
      totalIndex === Object.keys(occupiedIndexes).length && !winner?.name
        ? true
        : false,
  };
};
