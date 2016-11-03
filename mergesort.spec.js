let testArr = [3,6,12,23,1];

describe('mergeSort', function() {
  let sortedArr = [].concat(testArr).sort(function(a,b) {
    return a > b;
  });

  it('handles empty array', function() {
    expect(mergeSort([])).toEqual([]);
  });
  it('returns a sorted array', function() {
    expect(mergeSort([[1,3,5], [2,4,9]])).toEqual([1,2,3,4,5,9]);
  });
});

describe('splitArray', function() {
  let result = [[3,6,12],[23, 1]];

  it('should split an array', function() {
    expect(splitArray(testArr)).toEqual(result);
  });
});

describe('splitArrayRecursive', function() {
  it('should split to the end', function() {
    let result = splitArrayRecursive(testArr).every(function(v) {
      return v.length === 1 && testArr.indexOf(v[0]) > -1;
    });
    expect(result).toEqual(true);

  });
});
