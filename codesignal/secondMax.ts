function secondMax(nums:number[]):number | null {
  const uniqueNumbers = [...new Set(nums)]; 

  if (uniqueNumbers.length < 2) return null;

  let maxValue = -Infinity;
  let secondMaxValue = -Infinity;

  for (const currentVal of uniqueNumbers) {
    if (currentVal > maxValue) {
      secondMaxValue = maxValue;
      maxValue = currentVal; 
    } else if (currentVal > secondMaxValue) {
      secondMaxValue = currentVal;
    }
  }

  return secondMaxValue;
}
