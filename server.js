const express =require('express');
const path=require('path');
const app=express();

//set static folder

app.use(express.static(path.joi));

const PORT = 3000 || process.env.PORT;

app.listen(PORT ,()=> console.log('server running on port ' + PORT));
