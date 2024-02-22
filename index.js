const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config({
    path: '.env'
});
console.log(process.env.USER, process.env.PASS, process.env.DATABASE, process.env.HOST);
app.use(express.json());



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
