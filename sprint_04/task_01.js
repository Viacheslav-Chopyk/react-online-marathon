// Implement the getPromise(delay, message) function, which takes an integer number delay(between 0 and 2000) and
// string message and returns a Promise that waits for specified amount of time(using delay argument) and resolves with the message.

const getPromise = (delay, message) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(message), delay);
    });
}
getPromise(2000, 'Hi').then((data) => { });