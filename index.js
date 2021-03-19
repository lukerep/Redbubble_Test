const priceHandler = require('./priceHandler/priceHandler');
const args = process.argv.slice(2);

// If there are not enough args provided, display an error
if (args.length < 2) {
    console.error("\
        \nUnrecognized or incomplete command line.\n\
        \rUsage:   node index.js [CART] [BASE PRICE LIST]\n\
        \rExample: node index.js ./testData/cart-9500.json ./testData/base-prices.json\
    ");
    process.exitCode = 1;
    return;
}

// Load the JSON files that were specified
const cart = require(args[0]);
const basePrices = require(args[1]);

// Send the cart and base price files into the price handler to calculate the cart price
const cartPrice = priceHandler.calculateCartPrice(cart, basePrices);

console.log(cartPrice);