import { Solution } from './Demo';

it('Validating the ouput is Array or not', () => {
  expect(Solution([1, 2, 3])).toBe(4);
})

it('Validating the ouput for single item', () => {
  expect(Solution([1])).toBe(2);
})

it('Validating the ouput for negative values', () => {
  expect(Solution([-1,-3])).toBe(1);
})

it('Validating the ouput for negative values', () => {
  expect(Solution([1,3,4,6,7,1,2])).toBe(5);
})

it('Validating the ouput for highest range', () => {
  expect(Solution([-1000000,1000000])).toBe(1);
})

it('Validating the ouput for highest range', () => {
  expect(Solution([0,1,2,3,100,102,104,200])).toBe(4);
})


