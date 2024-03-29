
    var bbVis, brush, createVis, dataSet, handle, height, margin, svg, svg2, width;

    margin = {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50
    };

    width = 960 - margin.left - margin.right;

    height = 300 - margin.bottom - margin.top;

    bbVis = {
        x: 0 + 100,
        y: 10,
        w: width - 100,
        h: 100
    };

    dataSet = [];

    svg = d3.select("#vis").append("svg").attr({
        width: width + margin.left + margin.right,
        height: height + margin.top + margin.bottom
    }).append("g").attr({
            transform: "translate(" + margin.left + "," + margin.top + ")"
        });

	var x = d3.time.scale()
    .range([0, width]);

	var y = d3.scale.linear()
	.range([0, height]); //used to look like .range([height, 0]); but I think this is why it was inverted


    d3.csv("timeline2.csv", function(data) {

		var line = d3.svg.line()
	    .x(function(d) { return x(d.date); })
	    .y(function(d) { return y(d.close); });        

		// convert your csv data and add it to dataSet
		console.log(data);
		console.log("hello");

		var parseDate = d3.time.format("%y").parse;
		console.log(parseDate);

		console.log(data[0]);

		  data.forEach(function(d) {
    		d.date = parseDate(d.date);
   			d.close = +d.close;		

 		  });

		


		console.log("test");
		//console.log(d.close);

		 x.domain(d3.extent(data, function(d) { return d.date; }));
 		 y.domain(d3.extent(data, function(d) { return d.close; }));

		  svg.append("path")
		  .datum(data)
		  .attr("class", "line")
		  .attr("d", line);
	
	});




   

        var xAxis, xScale, yAxis,  yScale;

		//var width = 100;
		//var height = 100;

		// the largest value in the wiki table is aprox 10,000,000,000



          xScale = d3.scale.linear().domain([0,2050]).range([0, bbVis.w]);  // define the right domain generically
		  yScale = d3.scale.pow().domain([10000000, 0]).range([0, 500])//bbVis.h])
		  // example that translates to the bottom left of our vis space:

/*
		  var visFrame = svg.append("g").attr({
		      "transform": "translate(" + bbVis.x + "," + (bbVis.y + bbVis.h) + ")",
		  	  //....
			  
		  });
		  
		  visFrame.append("rect");
*/		
  //....

//        yScale = .. // define the right y domain and range -- use bbVis

//        xAxis = ..
//        yAxis = ..
//        // add y axis to svg !

		var margin = {top: 20, right: 20, bottom: 30, left: 50},
		width = 960 - margin.left - margin.right,
		height = 500 - margin.top - margin.bottom;

		var x = d3.time.scale()
			.range([0, width]);

		var y = d3.scale.log()
			.range([100, height])
			.domain([10000000000, 1]); // the max population value is 10 billion aprox

		var xAxis = d3.svg.axis()
			.scale(xScale)
			.orient("bottom");

		var yAxis = d3.svg.axis()
			.scale(y)
			.orient("left");

		var svg = d3.select("body").append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		  .append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		  svg.append("g")
			  .attr("class", "x axis")
			  .attr("transform", "translate(0," + height + ")")
			  .call(xAxis)
			//.append("text")
			// .style("text-anchor", "end")
			// .attr("x", 6)
			// .text("Time (Yrs)");

		  svg.append("g")
			  .attr("class", "y axis")
			  .call(yAxis)
			.append("text")
			  .attr("transform", "rotate(-90)")
			  .attr("y", 6)
			  .attr("dy", ".71em")
			  .style("text-anchor", "end")
			  .text("Population");


