function findSmallest(arr){
    let smallest = arr[0];
    // for(let i = 1; i < arr.length; i++){
    //     if(arr[i] < arr[i-1])
    //         smallest = arr[i]
    // }
    return smallest
}

console.log(findSmallest([4,7,3,7,3,78,0,2,-7,4]))