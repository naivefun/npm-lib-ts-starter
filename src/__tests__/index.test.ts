import { sum, async } from '../index';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('async await', async () => {
  const result = await async();
  expect(result).toBe(100);
});
