// No DB, only array - assignment rule
let inventory = [
  { id: 1, name: "Laptop", category: "Electronics", quantity: 10, price: 75000 },
  { id: 2, name: "Mouse", category: "Accessories", quantity: 50, price: 500 }
];

let nextId = 3;

module.exports = { inventory, nextId };