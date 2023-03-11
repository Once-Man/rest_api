const Product = require('../models/product');

createProduct = async(req, res) => {
    try{

        const data = req.body;
        console.log(data);
       
    }catch(error){
        
    }
}
getProducts = async(req, res) => {
    res.send('Hello World');
}
module.exports = {
    createProduct,
    getProducts
}