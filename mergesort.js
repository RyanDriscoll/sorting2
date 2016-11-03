///require('./splitArray');

function mergeSort(arr) {
  let result = [];

  while (arr[0].length && arr[0].length) {
    if (arr[0][0] < arr[1][0]) {
      result.push(arr[0].shift());
    } else {
      result.push(arr[1].shift());
    }
  }

  result = result.concat(arr[0], arr[1]);

  return result;
}
