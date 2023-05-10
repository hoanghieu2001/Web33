let myArray = ["Hiệu", "Hit", "Hoàng"];
let hit = myArray.length;
for (let i = 0; i < hit; i++) {
  console.log(myArray[i]);
}

var orders = [
  {
    name: "Khóa học HTML - CSS Pro",
    price: 3000000,
  },
  {
    name: "Khóa học Javascript Pro",
    price: 2500000,
  },
  {
    name: "Khóa học React Pro",
    price: 3200000,
  },
];
// function getTotal(x) {
//   let total = 0;
//   for (i in orders) {
//     const price = x[i].price;
//     total += price;
//   }
//   return total;
// }
// console.log(getTotal(orders));

function getTotal(orders) {
  let t = 0;
  let ordersLength = orders.length;
  for (let i = 0; i < ordersLength; i++) {
    t += orders[i].price
  }
  return t
};
console.log(getTotal(orders))
// function getTotal() {
//   let giaTien = orders.length;
//   for (let i = 0; i < giaTien; i++) {
//     giatien += orders[i].price;
//     console.log(orders[i]);
//   }
// }
// var giatien = 0;

// // let giaTien = orders.length;
// for (let i in orders) {
//   giaTien += orders[i].price;
// }

// console.log(giatien);
// var total = 0;
// for (let i in orders) {
//   total += orders[i].price;
// }
// console.log(total);
// let total = 0;

// for (let product in items) {
//   const price = items[product];

//   total += price;
// }

// console.log(total);

// let items = {
//   //key là tên sản phẩm
//   //value là giá sản phẩm
//   iphone: 1000,
//   macbook: 2000,
//   clothes: 10,
// };
// /// tính tổng
// total = 0;
// var sum = 0;
// for (let i in items) {
//   const price = items[i];
//   sum += items[i];
// }
// console.log(sum);

// for (let product in items) {
//   const price = items[product];
//   total += price;
// }
// console.log(total);
// function run(object) {
//   const outPut = []
//   for (let key in object) {
//     outPut.push(`Thuộc tính có ${key} thuộc tính có giá trị là ${object[key]}`)
//   }
//   return outPut;
// }

// // Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));
// 1
// for(let i=0 ; i<10;i++){
//   if(i%2 ==1){
//     continue;
//   }
//   console.log(i);
// }
const number =[
  [1,2],
  [3,4],
  [5,6],
]
for(let i = 0; i< number.length;i++){
  for(let j =0; j<number[i].length;j++){
    console.log(number[i][j]);
  }
}