const lbs = document.getElementById("form-value")
const output = document.getElementById("outputs").style.visibility = 'hidden';

lbs.addEventListener("input", (e) =>{
    document.getElementById("outputs").style.visibility = 'visible';
    var value = e.target.value
    document.getElementById("grams-output").innerHTML = value/0.0022046;
    document.getElementById("kg-output").innerHTML = value/2.2046;
    document.getElementById("oz-output").innerHTML = value*16;
})


//For practice purposes only