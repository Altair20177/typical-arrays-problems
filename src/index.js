
exports.min = function min (array) {
  if (array.size == 0) return 0;
  let minArr = array[0];
  for (let i = 0; i < array.size;i++)
  {
     if(array[i] < minArr)
     {
        minArr = array[i];
     }
  }
  return minArr;
}

exports.max = function max (array) {
  if (array.size == 0) return 0;
  let maxArr = array[0];
  for (let i = 0; i < array.size;i++)
  {
     if(array[i] > maxArr)
     {
        maxArr = array[i];
     }
  }
  return maxArr;
}

exports.avg = function avg (array) {
  if (array.size == 0) return 0;
  let avgSum = 0;
  for (let i = 0; i < array.size; i++)
  {
    avgSum += array[i];
  }
  avgSum = avgSum/array.size;
  return avgSum;
}
