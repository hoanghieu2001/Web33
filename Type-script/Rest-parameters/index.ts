function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => {
        total += num
    })
    return total
}
// console.log("Check getTotal", getTotal());
// console.log("Check getTotal", getTotal(10,1,2,3));
// console.log("Check getTotal", getTotal(5,1,2,3));
// .join(",") + "."

function multiply(n: number, ...m: number[]) {
    // console.log(">>>Check X",X);
    return m.map((x) => { debugger; n * x; })
}
console.log(multiply(10, 1, 2, 3, 4));

function greet(k: string, ...l: string[]) {
    return k + " " + l.join(",") + "."
}
console.log(greet("Wellcome", "Hoàng Hiệu", "Hit"));

let sum8=[1,2,3,4]
let tong = sum8.map((num)=>{
    return num*2
})
console.log(tong);