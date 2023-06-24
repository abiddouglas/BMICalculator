const express = require('express');
const bodyParser = require('body-parser');
const {CalculateBMI, ValidateData} = require('./calculateBMI');
const port = 3000;
const app = express();

app.set('view engine','pug');

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));

app.get('/',(req,res,next)=>{
    res.render('index');
})

app.post('/',(req,res,next)=>{

    if(!ValidateData(req)){
        throw new Error('422');
    }
    let {bmi,color} = CalculateBMI(parseFloat(req.body.weight),parseFloat(req.body.height));
    res.render('index',{
        age: req.body.age,
        weight: req.body.weight,
        height: req.body.height,
        result: "Your BMI result is : ",
        resultValue: bmi,
        colorValue:color 
    });
})


app.use((req,res,next)=>{
    res.status(404);
    res.render('404');
    next();
})

app.use((error,req,res,next)=>{
    if(error.message == '422'){
        res.status(422);
        res.render('index',{ 
            age: req.body.age ,
            weight: req.body.weight,
            height: req.body.height,         
            result: "Please Provide Proper Data!",
            resultColor: 'red'
        });
    }
    next();
})


app.listen(port,()=>{console.log(`Web server running on ${port}`)});