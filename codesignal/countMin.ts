function countMin(numbers:number[]):number {
    if (!numbers?.length) return 0;

    let counter = 1;
    let minValue = numbers[0];

    for(let i = 1; i < numbers.length; i++){
        const currentValue = numbers[i];
        
        if(currentValue === minValue){
            counter +=1;
            continue;
        }
        
        if(currentValue < minValue){
            minValue = currentValue;
            counter = 1;
        }        
    }
    
    return counter;
}
