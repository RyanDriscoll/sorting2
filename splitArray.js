function splitArray(arr) {
  let result = [];
  let half = Math.ceil(arr.length / 2);

  result.push(arr.slice(0, half), arr.slice(half));

  return result;
}

function splitArrayRecursive(arr) {
  let result = [];
  let queue = [];
  let current;

  queue.push(arr);

  for (let i = 0; i < queue.length; i++) {
    if (queue[i].length === 1) {
      result.push(queue[i]);
    } else {
      current = splitArray(queue[i]);
      queue = queue.concat(current);
    }
  }

  return result;

}
