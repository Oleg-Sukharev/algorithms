function isSubarray(arrayA: number[], arrayB: number[]):boolean {
  for (let i = 0; i < arrayA.length; i++) {
    let isSub = true;

    for (let j = 0; j < arrayB.length; j++) {
      const subEl = arrayB[j];
      const mainEl = arrayA[i +j];

      if (subEl !== mainEl){
        isSub = false;
        break;
      }
    }

    if (isSub) return isSub;
  }

  return false;
}