var r1 = [1540, 1130, 1580, 1105];
var r2 = [2010, 1168, 2305, 4102];
var r3 = [2450, 1847, 2710, 2391];
var r4 = [1845, 1491, 1284, 1575];
var r5 = [2120, 1767, 1599, 3888];
var textDisplay;

var $ = function (id) {
    'use strict';
	return document.getElementById(id);
};

var byQuarter = function () {
    'use strict';
    var quarters = [0, 0, 0, 0];
    for (var i = 0; i < quarters.length; i++) {
        quarters[i] = r1[i] + r2[i] + r3[i] + r4[i] + r5[i];
    }
    $("results").innerHTML = "Sales by Quarters\n" +
        "Q1: " + quarters[0] + "\n" +
        "Q2: " + quarters[1] + "\n" +
        "Q3: " + quarters[2] + "\n" +
        "Q4: " + quarters[3] + "\n";
};

var byRegion = function () {
    'use strict';
    var regions = [r1, r2, r3, r4, r5];
    var math = [0, 0, 0, 0, 0];
    for (var i = 0; i < regions.length; i++) {
        for (var j = 0; j < regions[i].length; j++) {
            math[i] += regions[i][j];
        }
    }
    $("results").innerHTML = "Sales by Region\n" +
        "Region 1: " + math[0] + "\n" +
        "Region 2: " + math[1] + "\n" +
        "Region 3: " + math[2] + "\n" +
        "Region 4: " + math[3] + "\n" +
        "Region 5: " + math[4] + "\n";
};

var byTotal = function () {
  'use strict';
    var regions = [r1, r2, r3, r4, r5];
    var math = [0, 0, 0, 0, 0];
    var total = 0;
    for (var i = 0; i < regions.length; i++) {
        for (var j = 0; j < regions[i].length; j++) {
            math[i] += regions[i][j];
        }
        total += math[i];
    }
    $("results").innerHTML = "Total Sales: " + total;
};

window.onload = function () {
    'use strict';
    $("show_quarter").onclick = byQuarter;
    $("show_region").onclick = byRegion;
    $("show_total").onclick = byTotal;
};


