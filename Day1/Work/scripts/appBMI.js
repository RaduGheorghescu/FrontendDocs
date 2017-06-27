/**
 * Created by Radu.Gheorghescu on 6/27/2017.
 */
function computeBMI(weight, height) {
    return 703*weight/(height*weight);
}

function calculate() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var bmi = computeBMI(weight, height);
    document.getElementById("scope").innerHTML = bmi;
    var bodyType;
    if(bmi<18)
        bodyType = 'Underweight';
    else if(bmi<25)
        bodyType = 'Normal';
    else if (bmi<30)
        bodyType = 'Overweight';
    else if (bmi>30)
        bodyType = 'Obese';
    document.getElementById("type").innerHTML = bodyType;
}