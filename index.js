const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');



//Create server
const app = express()
const port = process.env.PORT;

//Connect Database
connectDB();

app.use(cors(
    {
        origin: 'http://localhost:4200'
    }
));

app.use(express.json());

app.use('/api/products', require('./routes/product'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
