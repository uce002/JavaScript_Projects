const inventory = [
];

function findProductIndex(productName) {
    productName = productName.toLowerCase();
    for(let i = 0; i < inventory.length; i++) {
        if(inventory[i].name.toLowerCase() === productName) {
            return i;
        }
    }
    return -1;
}

function addProduct(product) {
    let existingProduct = inventory.find(item => item.name.toLowerCase() === product.name.toLowerCase());
    if (existingProduct) {
        existingProduct.quantity += product.quantity;
        console.log(`${existingProduct.name} quantity updated`);
    } else {
        inventory.push({ name: product.name.toLowerCase(), quantity: product.quantity });
        console.log(`${product.name.toLowerCase()} added to inventory`);
    }
}

function removeProduct(productName, productQty) {
    let found = false;

    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name.toLowerCase() === productName.toLowerCase()) {
            found = true;
            let remainingQty = inventory[i].quantity - productQty;

            if (remainingQty < 0) {
                console.log(`Not enough ${productName.toLowerCase()} available, remaining pieces: ${inventory[i].quantity}`);
            } else if (remainingQty === 0) {
                console.log(`${productName.toLowerCase()} is now out of stock and removed from inventory.`);
                inventory.splice(i, 1); // Remove the product from inventory
            } else {
                inventory[i].quantity = remainingQty;
                console.log(`Remaining ${productName.toLowerCase()} pieces: ${remainingQty}`);
            }
            break; // Stop checking once the product is found
        }
    }

    if (!found) {
        console.log(`${productName.toLowerCase()} not found`);
    }
}