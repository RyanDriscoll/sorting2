function bubbleSort(arr) {
  let a, b;
  let arrLength = arr.length;
  while (arrLength > 1) {
    for (let i = 1; i < arrLength; i++) {
      if (arr[i-1] >= arr[i]) {
        a = arr[i];
        b = arr[i-1];
      } else {
        a = arr[i-1];
        b = arr[i];
      }
      arr.splice(i-1, 2, a, b);
    }
    arrLength--;
  }
  return arr;
}
