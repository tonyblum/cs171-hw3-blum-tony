Look at the data given in the Wiki table. Describe the data types. What is different from the datasets you've used before?
This dataset is different in that numbers are listed as strings (with ,s). Also there is blank and missing data.
The data types are ints which possibly should be changed into times, strings which should be ints, and NUlL values which should
be preserved.

Take a look at the DOM tree for the Wikipedia table. Formulate in jQuery selector syntax the selection that would give you the DOM element for the second row in the Wikipedia table. Write down in selection syntax how you would get all table rows that are not the header row.

I got the rows of of the table using the following code:

            var content = root.find("#content"); // find all the nodes that have ID "content"
            //var h2s = content.find(".mw-headline"); // search in all "content" nodes for nodes of class ".mw-headline"
			var trs = content.find(".wikitable tbody tr");

to get just the 2nd row I would just loop through using $.each(trs, function(index, value) and then only select the row with the index of 2.

