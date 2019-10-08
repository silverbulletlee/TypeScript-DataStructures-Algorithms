import * as sorts from '../../../src/algorithms/sort';

let arrays = [
    [5, 4, 6, 3, 7, 2, 8, 1, 9, 0],
    [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48],
    [2, 3, 4, 6, 1, 3, 7, 9, 4, 7, 8, 4, 1]
];
let sorted = arrays.map(array => Array.from(array).sort((a, b) => a - b));

Object.entries(sorts).forEach(([sortName, sort]) => {
    test(sortName, () => {
        arrays.forEach((array, index) => expect(sort(Array.from(array))).toEqual(sorted[index]));
    });
});
