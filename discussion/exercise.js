
var product = {
    name: 'Safeguard',
    price: 10,
    stockQuantity: 6,
    category: 'Soap',
 }

 console.log(product);

 function displayProducts(){
    const products = [
        {
        name: 'Safeguard', 
        price: 10, 
        stockQuantity: 6, 
        category: 'Soap'
    },
    {
        name: 'Dove', 
        price: 20, 
        stockQuantity: 10, 
        category: 'Soap'
    },
];

    console.log(products);
 }

 function addProduct() {
    var product = [
        {
        name: 'Safeguard',
        price: 10,
        stockQuantity: 6,
        category: 'Soap',
    },
    {
        name: 'Dove',
        price: 20,
        stockQuantity: 10,
        category: 'Soap',
    },
];

    var products = [];
    
    products.push(product);

    console.log(products);
}

function updateProduct() {
    let list = [
        { name: 'Safeguard', price: 10, stockQuantity: 6, category: 'Soap' },
        { name: 'Dove', price: 15, stockQuantity: 10, category: 'Soap' },
        { name: 'Lux', price: 12, stockQuantity: 8, category: 'Soap' }
    ];

    let update = [
        { name: 'Dove', price: 11, stockQuantity: 7, category: 'Soap' },
        { name: 'Safeguard', price: 10, stockQuantity: 6, category: 'Soap' },
        { name: 'Bioderm', price: 10, stockQuantity: 6, category: 'Soap' }
    ];

    update.forEach(updatedProduct => {
        let product = list.find(p => p.name === updatedProduct.name);
        if (product) {
            product.price = updatedProduct.price;
            product.stockQuantity = updatedProduct.stockQuantity;
        } else {
            list.push(updatedProduct);
        }
    });

    console.log(list);
}


 function removeProduct(){
    let product = [
        {
            name: 'Safeguard',
            price: 10,
            stockQuantity: 6,
            category: 'Soap'
        },
        {
            name: 'Dove',
            price: 15,
            stockQuantity: 10,
            category: 'Soap'
        },
        {
            name: 'Lux',
            price: 12,
            stockQuantity: 8,
            category: 'Soap'
        }
    ];

    delete product[0];

    console.log(product);
}

let action = prompt("Select Action\n 1: Display\n 2: Add\n 3: Update\n 4: Remove");

if (action = 1){
    displayProducts();
}
else if (action = 2){
    addProduct();
}
else if (action = 3){
    updateProduct();
}
else if (action = 4){
    removeProduct();
}
else 
    {
        displayProducts();
    }


