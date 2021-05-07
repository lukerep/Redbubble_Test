/**
 * @file Entrypoint for the Redbubble price calculator test
 */

const priceHandler = require('./priceHandler/priceHandler');
const args = process.argv.slice(2);

// Check how many args are provided, if insufficient display an error
if (args.length < 3) {
    console.error("\
        \nUnrecognized or incomplete command line.\n\
        \rUsage:   node index.js [CART] [BASE PRICE LIST] [DISCOUNT LIST]\n\
        \rExample: node index.js ./testData/cart-9500.json ./testData/base-prices.json ./testData/discounts.json\
    ");
    process.exitCode = 1;
    return;
}

// Load the JSON files that were specified
const cart = require(args[0]);
const basePrices = require(args[1]);
const discounts = require(args[2]);

// Send the cart and base price files into the price handler to calculate the cart price
const cartPrice = priceHandler.calculateCartPrice(cart, basePrices, discounts);

// Log/display the cartPrice
console.log(cartPrice);
