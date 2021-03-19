# Redbubble Price Calculator Test - (Redbubble Applicant)
A price calculator program for the Redbubble test: http://take-home-test.herokuapp.com/new-product-engineer
Takes in a JSON file reprensenting a cart alongside a JSON file containing the base prices for various items, their variants and respective price.
The cart total price is dependent on the items in the cart, their quantity and the artist's markup for the item.

## Dependencies
- Node v12+
- Jest (for testing)

## Build/setup instructions:
```
npm install
```

## Run instructions:
Usage:
```
node index.js [CART] [BASE PRICE LIST]
```
Example:
```
node index.js ./testData/cart-9500.json ./testData/base-prices.json
```

## Running tests:
```
npm test
```
