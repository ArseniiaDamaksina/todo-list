/**
 * @jest-environment jsdom
 */

import sortFunction from './sortFunction.js'

describe('sortFunction', () => {
  it('should sort dates in ascending order', () => {
    const items = [
      { id: 1, dueDate: 1693432800000 },
      { id: 2, dueDate: 1696024800000 },
      { id: 3, dueDate: 1693519200000 }
    ];

    const sortedItems = items.sort(sortFunction);

    expect(sortedItems).toEqual([
      { id: 1, dueDate: 1693432800000 },
      { id: 3, dueDate: 1693519200000 },
      { id: 2, dueDate: 1696024800000 }
    ]);
  });

  it('should return an empty array for an empty input array', () => {
    const emptyArray = [];
    const sortedEmptyArray = emptyArray.sort(sortFunction);

    expect(sortedEmptyArray).toEqual([]);
  });
});