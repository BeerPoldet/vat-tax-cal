const _ = require('lodash');
const inputs = require('./items.json');

const itemPrice = item => {
  return item
    ? item.reduce((acc, item) => acc + item.price * item.amount, 0)
    : 0
}

const showResult = (result) =>{
  console.log("price:"+result.price+", vat: "+result.vat)+", tax: "+result.tax;
}

const applyVat = (price) => {
    return price * 1.07
}

const showVatTax = _.flow(
  itemPrice,
  sumItemPrice,
  total => ({ total, tax, 0, vat, 0 }),
  output => ({ ...output, vat: applyVat(output.total) }),
  output => ({ ...output, tax: applyTax(output.total) }),
  showResult
)

showVatTax(inputs)
