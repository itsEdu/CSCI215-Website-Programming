var $ = function (id) {
    return document.getElementById(id);
}
var _$ = function(id) {
    return document.getElementsByName(id);
}
function calculate() {
    if(!(_$("sex")[0].checked || _$("sex")[1].checked)) {
        alert("Must check Male or Female!");
    }
    else if($("weight").value == "" || $("height").value == "") {
        alert("Must enter values for both weight and height!")
    }
    else if(isNaN($("weight").value || isNaN($("height").value))) {
        alert("Must enter numbers for both weight and height!")
    }
    else {
        var female = _$("sex")[1].checked;
        var male = _$("sex")[0].checked;

        var weight = ($("weight").value);
        var height = ($("height").value);

        console.log('Male = ' + male);
        console.log('Weight = ' + weight);
        console.log('Height = ' + height);

        // -------------------------------
        // Conversions
        // -------------------------------
        // lbs to kg: 1 lb = 0.454 kg
        // inch to meter: 1 in = 0.0254 m
        // inch to cm: 1 in = 2.54 cm
        var INCH_TO_CM = 2.54;
        var LBS_TO_KG = 0.454;
        var INCH_TO_METER = 0.0254;

        // ==========================================
        // Todo: Perform conversion calculations here

        // -------------------------------
        // Body Surface Area (BSA)
        // -------------------------------
        var heightCM = height * INCH_TO_CM;
        var weightKG = weight * LBS_TO_KG;
        var BSA = 0;

        // ==========================================
        // Todo: Perform BSA calculation here
        BSA = Math.sqrt(((heightCM * weightKG)/3600));
        // -------------------------------
        // Ideal Body Weight (IBW)
        // -------------------------------

        var IBW = 0;

        if (female) {

            // ==========================================
            // Todo: Perform female IBW calculation here
            IBW = 45.5 + 2.3 * (height - 60);

        } else if (male) {

            // ==========================================
            // Todo: Perform male IBW calculation here
            IBW = 50 + 2.3 * (height - 60);
        }

        // -------------------------------
        // Body Mass Index (BMI)
        // -------------------------------

        var BMI = 0;

        // ==========================================
        // Todo: Perform BMI calculation here
        var heightM = height * INCH_TO_METER;
        BMI = weightKG / Math.pow(heightM, 2)


        // Do not modify this function call
        display(BSA, IBW, BMI);
    }
}

// ------------------------------------
// Do not modify this function
function display(BSA, IBW, BMI) {

    var message = 'Body Surface Area = ' + BSA.toPrecision(4) + ' m^2\nIdeal Body Weight = ' + IBW.toPrecision(4) + ' kg\nBody Mass Index = ' + BMI.toPrecision(4) + ' kg/m^2';

    document.getElementById("output").innerHTML = message;

}
