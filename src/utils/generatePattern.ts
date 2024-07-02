export const generatePattern = (dimension: number) => {
  return [
    ...horizontalPattern(dimension),
    ...verticalPattern(dimension),
    ...diagonalPattern(dimension),
  ];
};

const horizontalPattern = (number: number) => {
  const patterns: number[][] = [];

  for (let i = 0; i < number; i++) {
    const indexes: number[] = [];
    for (let j = 0; j < number; j++) {
      if (!indexes.length) {
        indexes.push(i * number);
      } else {
        indexes.push(indexes[indexes.length - 1] + 1);
      }
    }
    patterns.push(indexes);
  }

  return patterns;
};

const verticalPattern = (number: number) => {
  const patterns: number[][] = [];

  for (let i = 0; i < number; i++) {
    const indexes: number[] = [];
    for (let j = 0; j < number; j++) {
      if (!indexes.length) {
        indexes.push(i);
      } else {
        indexes.push(indexes[indexes.length - 1] + number);
      }
    }
    patterns.push(indexes);
  }

  return patterns;
};

const diagonalPattern = (number: number) => {
  const patterns: number[][] = [];

  for (let i = 0; i < 2; i++) {
    const indexes: number[] = [];

    if (i === 0) {
      for (let j = 0; j < number; j++) {
        if (!indexes.length) {
          indexes.push(i * number);
        } else {
          indexes.push(indexes[indexes.length - 1] + number + 1);
        }
      }
    } else {
      for (let j = 0; j < number; j++) {
        if (!indexes.length) {
          indexes.push(i * number - 1);
        } else {
          indexes.push(indexes[indexes.length - 1] + (number - 1));
        }
      }
    }

    patterns.push(indexes);
  }

  return patterns;
};
