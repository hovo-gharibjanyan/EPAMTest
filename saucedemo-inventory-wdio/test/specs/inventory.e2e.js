import { expect } from '@wdio/globals';

import LoginPage from '../pageobjects/LoginPage.js';
import InventoryPage from '../pageobjects/InventoryPage.js';
import { cartTestData } from '../data/items.data.js';

describe('"Inventory Logic" Flow', () => {
    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        const currentUrl = await browser.getUrl();
        expect(currentUrl).toContain('inventory.html');
    });

    it('UC-1 Sorting Validation: should sort items by price from low to high', async () => {
        await InventoryPage.sortByPriceLowToHigh();

        const actualPrices = await InventoryPage.getProductPrices();
        const expectedPrices = [...actualPrices].sort((a, b) => a - b);

        expect(actualPrices).toEqual(expectedPrices);
    });

    it('UC-2 Cart State Logic: should update cart badge after adding and removing items', async () => {
        for (const item of cartTestData.itemsToAdd) {
            await InventoryPage.addItemToCart(item);
        }

        await expect(InventoryPage.cartBadge).toHaveText('2');

        await InventoryPage.removeItemFromInventory(cartTestData.itemToRemove);

        await expect(InventoryPage.cartBadge).toHaveText('1');
    });
});