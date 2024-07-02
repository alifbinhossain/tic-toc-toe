export function checkWinner<T>(
  currentPlayer: T,
  occupiedIndexes: { [k: number]: T },
  patterns: number[][]
) {
  if (!occupiedIndexes) return;
  let isMatched: boolean = false;
  let winnerPattern;

  for (let i = 0; i < patterns.length; i++) {
    const pattern = patterns[i];
    const result: boolean[] = [];

    for (let j = 0; j < pattern.length; j++) {
      const index = pattern[j];
      result.push(occupiedIndexes[index] === currentPlayer);
    }

    isMatched = result.filter((e) => Boolean(e)).length === pattern.length;

    if (isMatched) {
      winnerPattern = pattern;
      break;
    }
  }

  return isMatched ? { currentPlayer, winnerPattern } : undefined;
}
