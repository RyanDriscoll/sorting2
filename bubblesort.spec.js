describe('Bubble Sort', function() {
  // let spies = {};
  let testArr = [3,6,12,23,1];
  let sortedArr = [].concat(testArr).sort(function(a,b) {
    return a > b;
  });
  // beforeEach(function() {
  //   this.sort
  // });
  it('handles empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('returns a sorted array', function() {
    expect(bubbleSort(testArr)).toEqual(sortedArr);
  });

  xit('doesn\'t run recursively', function() {

  })
});
