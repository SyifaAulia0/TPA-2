var weightInput = document.querySelector(".weight-input-field");
var heightInput = document.querySelector(".height-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var BMI, height, weight;

calculateButton.addEventListener("click", ()=>{

    weight = weightInput.value;
    height = heightInput.value;
    BMI = weight/(height/100)**2; 
    // result.innerText = BMI;

    if(BMI < 18.5){
        statement.innerText = "Your BMI is "+BMI +" which means You are Underweight";    
    }else if((BMI > 18.5) && (BMI < 24.9)){
        statement.innerText = "Your BMI is "+BMI +" which means You are Normalweight";
    }else if((BMI > 25) && (BMI < 29.9 )){
        statement.innerText = "Your BMI is "+BMI +" which means You are Overweight";
    }else{
        statement.innerText = "Your BMI is "+BMI +" which means You are Obesity";
    }
});