/**
 * Created by BJ Rutledge
 * Date: 2022-08-25
 * Living with Conviction.org
 * Test wordwrap
 */
const { wordWrap } = require('../../src/lib/stringWordWrap');

const testCase = [
  {
    string:
      'this is a test string. this is the second line this is the third line. this is the 4th line.',
    width: 23,
    expectedOutput:
      'this is a test string.\nthis is the second line\nthis is the third line.\nthis is the 4th line.',
  },
];

test('Test wordwrap. String should be equal to expected output.', () => {
  testCase.forEach((c) => {
    expect(wordWrap(c.string, c.width)).toBe(c.expectedOutput);
  });
});
