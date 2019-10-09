import { binarySearch } from '../../../../src/algorithms/search/binarySearch';

test('binarySearch', () => {
    [{target: 6, result: 6}, {target: 11, result: -1}].forEach(({target, result}) => {
        expect(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], target)).toEqual(result);
    });
});
