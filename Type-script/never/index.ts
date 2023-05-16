function handleException(message: string): never {
    throw Error(message)
}
function runInfinity(): never {
    // console.log("run inside runInfinity");
    // while (true) {
    //     // console.log("running..");
    //     // console.log("run bottom runInfinity"); q
    // }
}
let a = runInfinity();
console.log(">>>Check Out ", a);