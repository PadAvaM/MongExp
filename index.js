const express = require('express');
const app=express();
const path=require('path');
const mongoose=require('mongoose');

const Product = require('./models/product');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/farmStand');
    console.log("connection open");
}

main().catch(err => console.log(err));



app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))

app.get('/products/new',(req,res)=>
{
    res.render('products/new.ejs')
})

app.post('/products',async (req,res)=>
{
   const newp = new Product(req.body);
   await newp.save();
   res.redirect(`/products/${newp._id}`)
})

app.get('/products',async (req,res)=>{
    const products = await Product.find({})
    //console.log(products)
    res.render('products/index.ejs',{products})
})

app.get('/products/:id', async(req,res)=>{
    const {id}= req.params;
    const found = await Product.findById(id);
    res.render('products/show.ejs',{found})
})

app.listen(3000,()=>{
    console.log("Listening on -port..");
})