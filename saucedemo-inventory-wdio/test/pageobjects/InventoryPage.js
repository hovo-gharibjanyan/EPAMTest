class InventoryPage {
    get sortDropdown() {
        return $('//select[contains(@class, "product_sort_container")]');
    }

    get priceElements() {
        return $$('//div[contains(@class, "inventory_item_price")]');
    }

    get cartBadge() {
        return $('//span[contains(@class, "shopping_cart_badge")]');
    }

    productButtonByName(productName) {
        return $(`//div[contains(@class, "inventory_item")][.//div[normalize-space()="${productName}"]]//button`);
    }

    async sortByPriceLowToHigh() {
        await this.sortDropdown.selectByVisibleText('Price (low to high)');
    }

    async getProductPrices() {
        const elements = await this.priceElements;
        const prices = [];

        for (const element of elements) {
            const priceText = await element.getText();
            const priceNumber = Number(priceText.replace('$', ''));
            prices.push(priceNumber);
        }

        return prices;
    }

    async addItemToCart(productName) {
        const button = await this.productButtonByName(productName);
        await button.click();
    }

    async removeItemFromInventory(productName) {
        const button = await this.productButtonByName(productName);
        await button.click();
    }
}

export default new InventoryPage();