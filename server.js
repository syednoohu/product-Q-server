const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());  
app.use(cors())
app.get('/',(req,res)=>res.status(202).send(' API Running...111!!'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));