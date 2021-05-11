import { toLastNames } from './CC12';

test('Five and greater only', () => {
  const input = [{ firstName: 'Jane', lastName: 'Doe' }, { firstName: 'James', lastName: 'Bond' }]; // arrange
  const output = toLastNames(input); // act
  expect(output).toEqual(['Jane Doe', 'James Bond']); // assert
});