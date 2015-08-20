function largestOfFour(arr) {
  // You can do this!
  var high;
  var array = [4];
  for (var i = 0; i < arr.length; i++) {
    high = 0;
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > high)
        high = arr[i][j];
    }
    array[i] = high;
  }
  return array;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
