const inputs = require('./items.json')

const itemPrice = item => {
  return item
    ? item.reduce((acc, item) => acc + item.price * item.amount, 0)
    : 0
}



