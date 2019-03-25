const inputs = require('items.json');

const sumItemPrice = (items) => {
  let sum = 0;
  items.forEach(item => {
    sum += item.price * item.amount
  });
  return sum
}