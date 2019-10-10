import { LCS } from '../../../../src/algorithms/dynamicPrograming/LCS';

test('longest common subsequence', () => {
    [{
        args: ['educational', 'advantage'],
        len: 4
    }, {
        args: ['didactical', 'advantage'],
        len: 4
    }, {
        args: ['abcdefg', 'hijklmn'],
        len: 0
    }].forEach(({args: [str1, str2], len}) => {
        expect(LCS(str1, str2)).toEqual(len);
    });
});
