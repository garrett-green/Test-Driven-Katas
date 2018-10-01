const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Returns empty string if zero was length provided', () => {
    expect(wrap("", 0)).to.equal("");
  });
  it('Returns imput string if length is less than number provided', () => {
    expect(wrap("this test will pass", 25)).to.equal("this test will pass");
  });
  it('Returns 2 lines if string length is greater then the number provided but less than 2x', () => {
    expect(wrap("this test will pass", 11)).to.equal("this test\nwill pass");
  });
  it('Index of maxLength number will be line break', () => {
    const testLine = wrap("this test will pass", 11)
    expect(testLine.slice(9, 10)).to.equal("\n");
  });
  it('handles longer line inputs with multiple breakpoints', () => {
    const testLine = wrap("this test will pass this test will pass this test will pass this test will pass", 10)
    expect(testLine.slice(9, 10)).to.equal("\n");
    expect(testLine.slice(19, 20)).to.equal("\n");
    expect(testLine.slice(29, 30)).to.equal("\n");
  });
});
