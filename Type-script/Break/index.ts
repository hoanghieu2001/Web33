let products = [
    { name: 'Phone', price: 700 },
    { name: 'Tablet', price: 900 },
    { name: 'Laptop', price: 1200 }
];
let discount = 0;
let product = products[2];
switch (product.name) {
    case 'Phone':
        discount = 5;
        break;
    case 'Tablet':
        discount = 10;
        break
    case 'Laptop':
        discount = 15;
        break
    default:
        discount = 100;
}
console.log(`There is a ${discount}% on ${product.name}`);