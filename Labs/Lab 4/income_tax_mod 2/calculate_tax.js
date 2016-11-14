var $ = function (id) {
    'use strict';
    return document.getElementById(id);
};

var calculate_tax = function () {
    'use strict';
	var income = parseFloat($("income").value), tax;
	if (isNaN(income) || income <= 0) {
		window.alert("Income must be a valid number greater than zero");
	} else {
		if (income <= 8700) {
			tax = parseFloat(income * 0.10);
		} else if (income > 8700 && income <= 35350) {
			tax = 870 + parseFloat((income - 8700) * 0.15);
		} else if (income > 35350 && income <= 85650) {
			tax = 4867 + parseFloat((income - 35650) * 0.25);
		} else if (income > 85650 && income <= 178650) {
			tax = 17442 + parseFloat((income - 85650) * 0.28);
		} else if (income > 178650 && income <= 388350) {
			tax = 43482 + parseFloat((income - 178650) * 0.33);
		} else if (income > 388350) {
			tax = 112683 + parseFloat((income - 388350) * 0.35);
		}
		$("tax").value = tax.toFixed(2);
	}
};
window.onload = function () {
    'use strict';
    var calculate_taxes;
    $("calculate").onclick = calculate_tax;
};