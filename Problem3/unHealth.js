var bbDetail, bbOverview, dataSet, svg;

var margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50
};

var width = 960 - margin.left - margin.right;

var height = 800 - margin.bottom - margin.top;

bbOverview = {
    x: 0,
    y: 10,
    w: width,
    h: 50
};

bbDetail = {
    x: 0,
    y: 100,
    w: width,
    h: 300
};

dataSet = [];

svg = d3.select("#visUN").append("svg").attr({
    width: width + margin.left + margin.right,
    height: height + margin.top + margin.bottom
}).append("g").attr({
        transform: "translate(" + margin.left + "," + margin.top + ")"
    });

var date, all, child, woman; 
var parseDate = d3.time.format("%b-%y").parse;



d3.csv("unHealth.csv", function(data) {
	//console.log(data);


	 data.forEach(function(d) {
		console.log(d.AnalysisDate);   
		//console.log(d.AllRelevant);
		//console.log(d.ChildrensHealth);
		//console.log(d.WomensHealth);    
		//d.date = parseDate(d.date);
		 //d.close = +d.close;

		all = convertToInt(d.AllRelevant);
		child = convertToInt(d.ChildrensHealth);
		woman = convertToInt(d.WomensHealth);
		date = parseDate(d.AnalysisDate);			
		
		console.log(woman);
		console.log(date);
	})

});

var convertToInt = function(s) {
    return parseInt(s.replace(/,/g, ""), 10);
};

