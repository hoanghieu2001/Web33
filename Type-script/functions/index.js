// // unction sum(a,b){
// //     return a+b;
// // }
// // console.log('>>> check Sum', sum(9,3));f
// var sum2 = function (a, b) {
//     return a * b;
// };
// console.log(">>>Check Sum2", sum2(9, 3));
// function sum3(a, b) {
//     return a + b;
// }
// console.log(">>>check Sum3", sum3(8, 3));
// function average(a, b) {
//     return (a + b) / 2;
// }
// console.log("Check average", average(9, 3));
// var m = function (a, b) {
//     return a + b;
// };
// console.log("Check out", m("Hiệu", 'Hoàng'));
function getRandomItem(array){
    var random1 = Math.floor(Math.random() * array.length)
    return array[random1]
}
console.log(getRandomItem([33,33,2,3]));