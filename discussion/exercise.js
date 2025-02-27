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

    let product  = [{name: 'Bioderm', price: 10, stockQuantity: 9, category: 'Soap'},
                   {name: 'Lux', price: 9, stockQuantity: 10, category: 'Soap'}];

    products.push(product);

    console.log(products);


const updatedProducts = products.filter(product => product[0]);

updatedProducts.push({ id: product[0], name: "Palmolive", price: 28, stockQuantity: 10, category: 'Soap' });

console.log(updatedProducts);



    let catalog = [
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

    delete catalog[0];

    console.log(catalog);