const Product = require('../models/Product');


exports.createProduct = async (req, res) => {
    try {
        let product;

        product = new Product(req.body)

        await  product.save();
        res.send(product);

    } catch(error){
        console.log(error)
        res.status(500).send('Server Error')
    }
}

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);

    } catch(error){
        console.log(error)
        res.status(500).send('Server Error');
    }
}

exports.updateProduct = async (req, res) => {
    try{
        let product = await Product.findById(req.params.id);

        if(!product) {
            res.status(404).json({msg: 'Product not found'});
        }

        const { name, category, ubication, price } = req.body;
        
        product.name= name;
        product.category= category;
        product.ubication= ubication;
        product.price= price;



        product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );

        res.json(product);
        
    } catch(error) {
        console.log(error)
        res.status(500).send('Server Error')
    }
}


exports.getProductById = async (req, res) => {
    try{
        let product = await Product.findById(req.params.id);

        if(!product) {
            res.status(404).json({msg: 'Product not found'});
        }

        /*const { name, category, ubication, price } = req.body;*/

        res.json(product);
        
    } catch(error) {
        console.log(error)
        res.status(500).send('Server Error')
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ msg: 'Product not found' });
        }
        await Product.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Product deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};