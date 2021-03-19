/**
 * @file Responsible for handling price related matters
 */

/**
 * Calculates the price for a cart item based on a number of factors such as: quantity and artist markup
 * @param {Object} item - The item object which this calculation is concerning
 * @param {Number} itemPrice - The price of the item
 * @returns {Number} Returns the adjusted price for the cart item
 */
const calculateAdjustedItemPrice = (item, itemPrice) => {
    return (itemPrice + Math.round(itemPrice * (item['artist-markup']/100))) * item.quantity;
}

/**
 * Calculates the total price of a cart dependent on the items in the cart and the basePrices provided
 * @param {Object} cart - The cart object which you wish to calculate the total price of
 * @param {Object} basePrices - The base price object that is used to find the appropriate price for each item in the cart
 * @returns {Number} Returns the total price of the cart
 */
const calculateCartPrice = (cart, basePrices) => {
    let cartPrice = 0;
    cart.forEach((item) => {
        const itemPrice = priceLookup(item, basePrices);
        cartPrice += calculateAdjustedItemPrice(item, itemPrice);
    });
    return cartPrice;
}

/**
 * Finds the price of an item and its variant from the basePrices object
 * @param {*} item  - The item object which this lookup is concerning
 * @param {*} basePrices - The base price which contains the price for each item and its variants
 * @returns {Number} Returns the price for an item found in the basePrices object
 */
const priceLookup = (item, basePrices) => {
    let price = 0;

    // Loop through all the base prices until we find one that matches the provided item
    for (let basePrice of basePrices) {
        if (basePrice["product-type"] == item["product-type"]) {
            // Go through all the options available for the current base price item
            // check if ALL the options it has available includes the options provided in the item
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

module.exports = {
    calculateAdjustedItemPrice,
    calculateCartPrice,
    priceLookup
};
