'use strict';

var lodown = require("./lodown");

var customers = require("./data/customers.json");

var obj = {
    one: 'a',
    two: 'b',
    three: 'c'
};

function print(value) {
    console.log(value);
}

////////////////////////////////////////////////////////////////////////////////

lodown.each(customers, function(customer, index) {
    print(customer.name);
});

lodown.each(obj, print);

////////////////////////////////////////////////////////////////////////////////

var allCapNames = lodown.map(customers, function (customer) {
    return customer.name.toUpperCase();
});
print("All caps names:")
print(allCapNames);

////////////////////////////////////////////////////////////////////////////////

var allOverThirty = lodown.filter(customers, function(customer) {
    return customer.age >= 30;
});
print("All Customers Over 30");
lodown.each(allOverThirty, function (c) {print(c.name)});
