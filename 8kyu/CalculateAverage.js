// The task is to calculate the average of the numbers in a given list.

function findAverage(array) {
  if (array.length !== 0) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total / array.length;
  }
  return 0;
}