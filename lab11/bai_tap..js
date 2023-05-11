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
let sum = orders.reduce((a, b) => a + b.price, 0)
console.log(sum);
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
// 2
// const number =[
//   [1,2],
//   [3,4],
//   [5,6],
// ]
// for(let i = 0; i< number.length;i++){
//   for(let j =0; j<number[i].length;j++){
//     console.log(number[i][j]);
//   }
// }
// 3
// for(let i=100; i>0;i-=5){
//   console.log(i);
// }
// 4
// function giaiThua(number){
//   if(number>0){
//     return number* giaiThua(number-1)
//   }
//   return 1;
// }
// console.log(giaiThua(3 ));

// const sports = [
//   {
//     name: 'Bóng rổ',
//     like: 6
//   },
//   {
//     name: 'Bơi lội',
//     like: 5
//   },
//   {
//     name: 'Bóng đá',
//     like: 10
//   },
// ]
// function getMostFavoriteSport(sport) {
//   return sport.filter(sport => sport.like > 5)
// }
// console.log(getMostFavoriteSport(sports))


// // let total = sports.reduce((a, b) => a + b.like, 0);
// // console.log(total);



// var watchList = [
//   {
//     "Title": "Inception",
//     "Year": "2010",
//     "Rated": "PG-13",
//     "Released": "16 Jul 2010",
//     "Runtime": "148 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Christopher Nolan",
//     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     "Language": "English, Japanese, French",
//     "Country": "USA, UK",
//     "imdbRating": "8.8",
//     "imdbVotes": "1,446,708",
//     "imdbID": "tt1375666",
//     "Type": "movie",
//   },
//   {
//     "Title": "Interstellar",
//     "Year": "2014",
//     "Rated": "PG-13",
//     "Released": "07 Nov 2014",
//     "Runtime": "169 min",
//     "Genre": "Adventure, Drama, Sci-Fi",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     "Language": "English",
//     "Country": "USA, UK",
//     "imdbRating": "8.6",
//     "imdbVotes": "910,366",
//     "imdbID": "tt0816692",
//     "Type": "movie",
//   },
//   {
//     "Title": "The Dark Knight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "18 Jul 2008",
//     "Runtime": "152 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     "Language": "English, Mandarin",
//     "Country": "USA, UK",
//     "imdbRating": "9.0",
//     "imdbVotes": "1,652,832",
//     "imdbID": "tt0468569",
//     "Type": "movie",
//   },
//   {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "Rated": "PG-13",
//     "Released": "15 Jun 2005",
//     "Runtime": "140 min",
//     "Genre": "Action, Adventure",
//     "Director": "Christopher Nolan",
//     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     "Language": "English, Urdu, Mandarin",
//     "Country": "USA, UK",
//     "imdbRating": "8.3",
//     "imdbVotes": "972,584",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//   },
//   {
//     "Title": "Avatar",
//     "Year": "2009",
//     "Rated": "PG-13",
//     "Released": "18 Dec 2009",
//     "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     "Language": "English, Spanish",
//     "Country": "USA, UK",
//     "imdbRating": "7.9",
//     "imdbVotes": "876,575",
//     "imdbID": "tt0499549",
//     "Type": "movie",
//   }
// ];

// function calculateRating(watchList) {
//   let film = watchList.filter(function (film) {
//     return film.Director === "Christopher Nolan";

//   });
//   console.log(film);
//   let totalIMDB = film.reduce(function (total, scoreIMDB) {
//     return total += parseFloat(scoreIMDB.imdbRating)
//   }, 0);
//   let average = totalIMDB / film.length
//   return average
// }

// // let nolan = watchList.filter(function(list){
// //   return list.filter(list => list.)
// // })
// // Expected results
// console.log(calculateRating(watchList)); // Output: 8.675

// const arr = [
//   ['name', 'Sơn Đặng'],
//   ['age', 18],
// ];

// function arrToObj(arr) {
//   return arr.reduce(function (a, b) {
//     a[b[0]] = b[1];
//     return a;
//   }, {});
// }
// console.log(arrToObj(arr))


const arr = [
  ['name', 'Sơn Đặng'],
  ['age', 18],
];

function arrToObj(arr) {
  return arr.reduce(function (a, b) {
    a[b[0]] = b[1];
    return a;
  }, {});
}
console.log(arrToObj(arr))


// let array = arr.reduce((a, b) => {
//   (a[b[0]] = b[1])
//   return a
// }, {})
// console.log(array);


// const ar = [
//   ['Hoàng', 'Hiệu'],
//   ['Tuổi', 18],
// ];
// const mang = ar.reduce((a, b) => {
//   a[b[0]] = b[1];
//   return a
// }, {})
// console.log(mang);

// function arobj(ar) {
//   return ar.reduce(function (a, b) {
//     a[b[0]] = b[1]
//     return a
//   }, {})
// }
// console.log(arobj(ar));
// function myFuncition(param){
// // console.log(myFuncition);
// if(typeof param==='function'){
//   param('Hoàng Văn Hiệu')

// }
// }
// function callBack(value){
//   console.log('value:' ,value);
// }
// myFuncition(callBack)

// Array.prototype.myMap = function (cb) {
//   let outPut = [], arrayLength = this.length;
//   for (let i = 0; i < arrayLength; i++) {
//     // let results = callback(this[i], i);
//     // outPut.push(results)
//     // console.log('results', results);
//     outPut.push(cb(this[i], i))
//   }
//   return outPut
// }

Array.prototype.forEach2=(function(callback){
  for(let index in this){
    console.log('index',index);
  }
})
const couses=[
  'javascript','php','ruby'
];
couses.forEach2(function(couse,index,array){
  console.log(couse,index,array);
})