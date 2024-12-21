function countEvenOdd(nums) {
  const result = {
    even_count: 0, 
    odd_count: 0 
  }
   
  for(const num of nums){
    result[num % 2 === 0 ? 'even_count' : 'odd_count']++;
    //  if(num % 2 ===0){
    //      result.even_count = result.even_count + 1;
    //  }else{
    //      result.odd_count = result.odd_count + 1;
    //  }
  }
   
  return result;
}