/**
 * @file Testing the priceHandler.js file
 */

const priceHandler = require('../../priceHandler/priceHandler');
const basePrices = require('../../testData/base-prices.json');
const discounts = require('../../testData/discounts.json');

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
    test('calculateAdjustedItemPrice', () => {
            const mockItem = {
                "artist-markup": 0,
                "quantity": 10
          };
            const value = priceHandler.calculateAdjustedItemPrice(mockItem, 10, 50);
            expect(value).toBe(10 * 10 * 0.5);
        });

    test('calculateCartPrice - no discount', () => {
        testCarts.forEach((cart, index) => {
            expect(priceHandler.calculateCartPrice(cart, basePrices, discounts)).toEqual(expectedCartPrices[index]);
        });

    });
});