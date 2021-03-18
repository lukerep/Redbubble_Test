const basePrices = require('./test_data/base-prices.json');
const cart = require('./test_data/cart-9363.json');

let cost = 0;

const priceLookup = (item) => {
    // Variable initialised to -1, will get overwritten if a match exists for the provided item
    // -1 is used to indicate the item was not found
    let price = -1;

    // Loop through all the base prices until we find one that matches the provided item
    for (let basePrice of basePrices) {
        if (basePrice["product-type"] == item["product-type"]) {
            // Go through all the options available for the current base price item
            // check if all the options it has available includes the options provided in the item
            const itemMatch = Object.keys(basePrice.options).every((option) => {
                return basePrice.options[option].includes(item.options[option]);
            });

            // If we match all the base-price properties for the product-type, update the price and break from the loop
            if (itemMatch) {
                price = basePrice["base-price"];
                break;
            }
        }
    };
    return price;
};

cart.forEach((item) => {
    const price = priceLookup(item);
    cost += (price + Math.round(price * (item['artist-markup']/100))) * item.quantity;
});

console.log(cost);