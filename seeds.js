const mongoose=require('mongoose');

const Product = require('./models/product');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/farmStand');
    console.log("connection open");
}

main().catch(err => console.log(err));

/*const p=new Product({
    name:'Grapefruit',
    price:8,
    category:'fruit'
})
p.save().then(p=>{
    console.log(p);
})
.catch(e=>{
console.log(e);
})*/

const seedproducts=[
    {
        name:'Melon',
        price:3.9,
        category:'fruit'   
    },
    {
        name:'Celery',
        price:1.5,
        category:'vegetable'   
    },
    {
        name:'Chocolate Milk',
        price:2.69,
        category:'dairy'   
    },
    {
        name:'Eggplant',
        price:2,
        category:'vegetable'   
    },
    {
        name:'Apple',
        price:7.22,
        category:'fruit'   
    },
]

Product.insertMany(seedproducts).then(res=>{
    console.log(res)
}).catch(e=>{
    console.log(e)
})