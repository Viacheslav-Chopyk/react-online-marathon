// Write a function combineArray(arr1, arr2), which takes 2 arrays, 
//and returns a new array consisting only of numeric elements of arrays arr1 and arr2.
// Function example:
// combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15]));  // [12, 22, -8, 6, 15]

const arr1 = [12, "user01", 22, true, -8];
const arr2 = ["Index", 6, null, 15];
function combineArray(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        if (typeof arr1[i] === 'number') {
            arr3.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (typeof arr2[i] === 'number') {
            arr3.push(arr2[i]);
        }

    }
    return arr3;
}

combineArray(arr1, arr2);