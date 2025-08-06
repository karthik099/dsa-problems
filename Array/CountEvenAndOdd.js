// PROBLEM: 
// You are given an array arr[]. 
// Your task is to count the number of EVEN and ODD elements within the array and return it.

function countEvenAndOdd(arr){
    let oddCount = 0;
    let evenCount = 0;
    for(let i=0; i < arr.length; i++){
        console.log(arr[i]);
        if(arr[i] % 2 == 0){
            oddCount = oddCount + 1;
        } else{
           evenCount = evenCount + 1;
        }
    }
    return [oddCount, evenCount];
}
// Input Array
const arr = [3,23,32,45,1212,48,16,111,399,104,7]; // Expected Output [ 5, 6 ]

console.log(countEvenAndOdd(arr)); // Output
