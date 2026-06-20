# Inventory Logic Flow - WebDriverIO

## Task

Launch URL: https://www.saucedemo.com/

### UC-1 Sorting Validation

1. Login with `standard_user`.
2. Select `Price (low to high)` from the sort dropdown.
3. Scrape all item prices from the inventory page.
4. Convert price strings like `$7.99` into numbers like `7.99`.
5. Create a sorted copy of the array using JavaScript sort logic.
6. Compare the actual prices array with the sorted array.

Sorting validation logic:

```js
const actualPrices = await InventoryPage.getProductPrices();
const expectedPrices = [...actualPrices].sort((a, b) => a - b);

expect(actualPrices).toEqual(expectedPrices);
