var $ = function (id) {
    'use strict';
    return document.getElementById(id);
};

var clickClear = function () {
    'use strict';
    $("investment").value = "";
    $("rate").value = "";
    $("years").value = "";
    $("futureValue").value = "";
};

var calculate = function () {
    'use strict';
    var investment = parseFloat($("investment").value),
        rate = parseFloat($("rate").value),
        years = parseInt($("years").value),
        math = investment,
        total = 0;

    if (years < 50 && rate < 20) {
        window.alert("Years must be less than 50 and interest rate must be less than 20.");
        if (isNaN($("investment").value) === false && $("investment").value > 0) {
            window.alert("Investment must be a number and greater than 0.");
            if (isNaN($("rate").value) === false && $("rate").value > 0) {
                window.alert("Interest rate must be a number and greater than 0.");
                if (isNaN($("years").value) === false &&  $("years").value > 0) {
                    window.alert("Years must be a number and greater than 0.");
                    rate = rate / 100;
                    for (var i = 0; i < years; i++) {
                        total = (math * rate) / 12;
                        for(var j = 0; j < 12; j++) {
                            math += total;

                        }
                    }
                }
            }
        }
    }
    $("futureValue").value = math.toFixed(0);
};

var clear = function () {
    'use strict';
    this.value = "";
};

window.onload = function () {
    'use strict';
    $("investment").focus;
    $("clear").onclick = clickClear;
    $("calculate").onclick = calculate;
    $("investment").ondblclick = clear;
    $("years").ondblclick = clear;
    $("rate").ondblclick = clear;
};