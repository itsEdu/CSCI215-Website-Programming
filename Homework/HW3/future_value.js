var $ = function (id) {
    'use strict';
    return document.getElementById(id);
};
function calculate() {
    'use strict';
    var future_value, investment = $("investment").value, interest = $("rate").value,
        years = $("years").value;
    
    if (investment === "" || interest === "" || years === "") {
        window.alert("You must enter a value for each box.");
    } else if (isNaN(investment) || isNaN(interest) || isNaN(years)) {
        window.alert("Entries in the boxes must be numbers.");
    } else if (investment < 0 || interest < 0 || years < 0) {
        window.alert("Values in the boxes must be positive.");
    } else {
        future_value = investment * Math.pow((1 + interest), years);
        //Console output to check math.
        window.console.log("Math outputs: " + future_value);
        $("future_value").value = future_value;
    }
}