const express= require('express');
const app = express();
const port = 3000;
const mongoDB = require("./db");
const cors = require("cors");
mongoDB();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use('/api', require("./Routes/Createintern"));
app.use('/api' , require('./Routes/verifyintern'));
app.use('/api' , require('./Routes/Createdonate'));
app.use('/api' , require('./Routes/Adminlogin'));

app.use('/api' , require('./Routes/Createcertificate'));
app.use('/api', require('./Routes/Createadmin'));
app.use('/api', require('./Routes/Verificationmnscode'));
app.use('/api', require('./Routes/payment'));



app.get('/' , (req, res)=>{
    res.send("Server started successfully ");
})


app.listen(port , ()=> {
    console.log(`App running at port ---> ${port}`);
    
})