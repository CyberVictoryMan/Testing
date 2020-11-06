const fs = require('fs')
const customer = require('./newCustomer.json')
let curcus = customer.coins
customer.coins = curcus + 10
console.log(customer.coins)

fs.writeFile('./newCustomer.json', JSON.stringify(customer, null, 2), err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})