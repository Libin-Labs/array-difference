export function arrayDifference<T>(left: readonly T[], right: readonly T[]): T[] {
  if (!Array.isArray(left) || !Array.isArray(right)) throw new TypeError('Expected arrays');
  const excluded = new Set(right);
  return [...new Set(left)].filter((value) => !excluded.has(value));
}
