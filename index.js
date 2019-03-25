const _ = require('lodash');
const inputs = require('./items.json');

showResult = (result) =>{
  console.log("price:"+result.price+", vat: "+result.vat)+", tax: "+result.tax;
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