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

var convertToInt = function(s) {
    return parseInt(s.replace(/,/g, ""), 10);
};

d3.csv("unHealth.csv", function(data) {
	//console.log(data);

var x, y;

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

// draw the line chart of time vs woman

x = d3.time.scale()
    .range([0, width]);
//	.domain([0, date]):

y = d3.scale.linear()
    .range([height, 0]);

	  x.domain(d3.extent(data, function(d) { return d.date; }));
	  //  y.domain(d3.extent(data, function(d) { return d.close; }));

	})
xScale = d3.scale.linear().domain([0,2050]).range([0,300]); //d3.time.scale();// define the right domain generically
yScale = d3.scale.pow().domain([600000, 0]).range([0, 800])//bbOverview.h)

var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");

var line = d3.svg.line()
    .x(function(d) { console.log(parseDate(d.AnalysisDate)); return x(parseDate(d.AnalysisDate)); })
    .y(function(d) { console.log(convertToInt(d.WomensHealth)); return y(convertToInt(d.WomensHealth)); });

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Tweets");

  svg.append("path")
      .datum(data) //used to be datum
      .attr("class", "line")
      .attr("d", line);

});

