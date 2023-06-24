//Name : Abidali Sarangwala
//id : 300347885
function CalculateBMI(weight,height){
    height = height * 0.01;
    let bmi = (weight/(height*height)).toFixed(2);
    let color = GetColor(bmi)
    return {bmi,color};
}

function GetColor(bmi){
    let color;
    switch(true){
        case bmi<18.5:
            color="rgb(255,0,96)";
            break;
        case bmi>=18.5 && bmi<25:
            color="rgb(0,223,162)";
            break;
        case bmi>=25 && bmi<30:
            color="rgb(255,109,40)";
            break;
        case bmi>=30:
            color="rgb(255,0,96)";
            break;
        default:
            color="rgb(0,0,0)";
            break;
    }
    return color;
}

function ValidateData(req){
    if(req.body.age == undefined || req.body.age.length == 0){
        return false;
    }
    if(req.body.weight === undefined || req.body.weight.length == 0 )
    {
        return false;
    }
    if(req.body.height === undefined || req.body.height.length == 0){
        return false;
    }
    if(isNaN(req.body.weight)){
        return false;
    }
    if(isNaN(req.body.height)){
        return false;
    }
    if(isNaN(req.body.age)){
        return false;
    }
    return true;
}

exports.CalculateBMI = CalculateBMI;
exports.ValidateData = ValidateData;