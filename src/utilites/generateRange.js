export function generateRange(A, B, C) {
  const result = [];

  if (C <= 0) {
    throw new Error('Інтервал має бути більшим за нуль');
  }

  if (A <= B) {
    for (let i = A; i <= B; i += C) {
      result.push(i);
    }
  } else {
    for (let i = A; i >= B; i -= C) {
      result.push(i);
    }
  }

  return result;
}
