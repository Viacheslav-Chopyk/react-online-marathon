// Find the maximum interval between two consecutive numbers. Numbers are entered as arguments
// Example:
// maxInterv(3, 5, 2, 7); //5
// maxInterv(3, 5, 2, 7, 11, 0, -2); //11
// maxInterv(3, 5); //2
// maxInterv(3); //0

const maxInterv = (...arg) => {
    let arr = [...arg];
    let a = arr[0];
    let b = 0;
    let res = 0;
    for (let i = 1; i < arr.length; i++) {
        a > arr[i] ? b = a - arr[i] : b = arr[i] - a;
        res < b ? res = b : false;
        a = arr[i];
    }
    return res;
};