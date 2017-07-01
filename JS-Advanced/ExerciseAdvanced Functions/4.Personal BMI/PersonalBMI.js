

function bmi(name, age, weight, height) {
    let obj = {name: name, personalInfo:{
        age: age, weight: weight, height: height
        }, BMI: 0, status: ''
    };

    obj.BMI = Math.round(weight/((height/100)*(height/100)));
    if(obj.BMI < 18.5 ){
        obj.status = 'underweight';
    }else if(obj.BMI >= 18.5 && obj.BMI < 25){
        obj.status = 'normal';
    }else if(obj.BMI >= 25 && obj.BMI <= 30){
        obj.status = 'overweight';
    }else {
        obj.status = 'obese';
        obj.recommendation = 'admission required';
    }
    console.log(obj);
    return obj

}
