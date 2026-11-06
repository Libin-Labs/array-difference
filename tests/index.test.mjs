import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('removes right-side values', () => {
  assert.deepEqual(api.arrayDifference([1, 2, 3], [2]), [1, 3]);
});
test('preserves unique left order', () => {
  assert.deepEqual(api.arrayDifference([3, 2, 1], [2]), [3, 1]);
});
test('deduplicates left values', () => {
  assert.deepEqual(api.arrayDifference([1, 1, 2], []), [1, 2]);
});
test('supports empty right side', () => {
  assert.deepEqual(api.arrayDifference([1, 2], []), [1, 2]);
});
test('returns empty when all excluded', () => {
  assert.deepEqual(api.arrayDifference([1], [1]), []);
});
test('rejects non-array input', () => {
  assert.throws(() => api.arrayDifference([], 0), TypeError);
});
