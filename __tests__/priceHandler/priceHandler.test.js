/**
 * @file Testing the priceHandler.js file
 */

const priceHandler = require('../../priceHandler/priceHandler');
const basePrices = require('../../testData/base-prices.json');

const testCarts = [
    require('../../testData/cart-4560.json'),
    require('../../testData/cart-9363.json'),
    require('../../testData/cart-9500.json'),
    require('../../testData/cart-11356.json'),
];

const expectedCartPrices = [
    4560,
    9363,
    9500,
    11356
];

describe('priceHandler testing', () => {
    test('calculateCartPrice', () => {
        testCarts.forEach((cart, index) => {
            expect(priceHandler.calculateCartPrice(cart, basePrices)).toEqual(expectedCartPrices[index]);
        });
    });
});