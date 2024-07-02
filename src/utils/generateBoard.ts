export const generateBoard = (dimension: number) => {
  const board: number[][] = [];

  for (let i = 0; i < dimension; i++) {
    const indexes: number[] = [];

    for (let j = 0; j < dimension; j++) {
      if (!indexes.length) {
        indexes.push(i * dimension);
      } else {
        indexes.push(indexes[indexes.length - 1] + 1);
      }
    }

    board.push(indexes);
  }

  return board;
};
