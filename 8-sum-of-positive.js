function positiveSum(arr){
    let sum = 0;
    for(num in arr){
        if(arr[num] > 0)
            sum += arr[num]    
    }
    return sum
}

positiveSum([1,-4,7,12, 10])