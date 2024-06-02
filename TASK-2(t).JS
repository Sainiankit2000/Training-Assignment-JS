

const productMaster = [
    { id: 'A441', name: 'Pepsi', category: 'Soft Drink', price: 15, quantity: 2 },
    { id: 'B234', name: 'Coke', category: 'Soft Drink', price: 10, quantity: 8 },
    { id: 'A617', name: 'Mirinda', category: 'Soft Drink', price: 20, quantity: 20 },
    // ... (other product objects)
];

function updateProductMaster(purchaseDetails) {
    const productId = purchaseDetails.id;
    const purchaseQuantity = purchaseDetails.purchaseQuantity;

    productMaster = productMaster.map(product => {
        if (product.id === productId) {
            return { ...product, quantity: product.quantity + purchaseQuantity };
        }
        return product;
    });
}

const purchaseDetails = { id: 'B635', purchaseQuantity: 6 };
updateProductMaster(purchaseDetails);

console.log(productMaster);
