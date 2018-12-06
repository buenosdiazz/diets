(function(){

    var width = 500;
    var height = 400;
    var selected;


                 function responsivefy(svg) {
    // get container + svg aspect ratio
    var container = d3.select(svg.node().parentNode),
        width = parseInt(svg.style("width")),
        height = parseInt(svg.style("height")),
        aspect = width / height;

    // add viewBox and preserveAspectRatio properties,
    // and call resize so that svg resizes on inital page load
    svg.attr("viewBox", "0 0 " + width + " " + height)
        .attr("perserveAspectRatio", "xMinYMid")
        .call(resize);

    // to register multiple listeners for same event type, 
    // you need to add namespace, i.e., 'click.foo'
    // necessary if you call invoke this function for multiple svgs
    // api docs: https://github.com/mbostock/d3/wiki/Selections#on
    d3.select(window).on("resize." + container.attr("id"), resize);

    // get width of container and resize svg to fit it
    function resize() {
        var targetWidth = parseInt(container.style("width"));
        svg.attr("width", targetWidth);
        svg.attr("height", Math.round(targetWidth / aspect));
    }
}
        //setup the svg

        var vis = d3.select("#changing_bars").append("svg");
        var svg = vis
            .attr("width", width+200)
            .attr("height", height); // adding some random padding
        svg.append("rect")
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("fill", "none")
        .call(responsivefy);

    
           


        d3.csv("data/yearlydiets.csv", function(error, data) {
            


          var selected = 2004;
          //console.log(column);
          var dataset = drawGraph(data, selected); // you need to finish this function below.
          //
          // //console.log(column, dataset);
          //
             sortedData =dataset.filter(function(d,i){
        return i < 10;
       });
          redraw(sortedData, selected);

          d3.select("button#y2004").classed("selected", true);
            
            

          d3.select("#y2004")
              .on("click", function(d,i) {
                  selected = "2004"
                  dataset = drawGraph(data, selected);
                sortedData =dataset.filter(function(d,i){
        return i < 10;
       });
                  redraw(sortedData, selected);
                  var thisButton = d3.select(this);
                  d3.selectAll("#buttons_1 button").classed("selected", false);
                  thisButton.classed("selected", true);
            
              
              });
   
          d3.select("#y2005")
              .on("click", function(d,i) {
                  selected = "2005"
                   dataset = drawGraph(data, selected);
                sortedData =dataset.filter(function(d,i){
        return i < 10;
       });
                  redraw(sortedData, selected);
                  var thisButton = d3.select(this);
                  d3.selectAll("#buttons_1 button").classed("selected", false);
                  thisButton.classed("selected", true);
              });
            
            d3.select("#y2006")
              .on("click", function(d,i) {
                  selected = "2006"
                  dataset = drawGraph(data, selected);
                sortedData =dataset.filter(function(d,i){
        return i < 10;
       });
                  redraw(sortedData, selected);
                  var thisButton = d3.select(this);
                  d3.selectAll("#buttons_1 button").classed("selected", false);
                  thisButton.classed("selected", true);

              });
                d3.select("#y2007")
              .on("click", function(d,i) {
                  selected = "2007"
                  dataset = drawGraph(data, selected);
                sortedData =dataset.filter(function(d,i){
        return i < 10;
       });
                  redraw(sortedData, selected);
                  var thisButton = d3.select(this);
                  d3.selectAll("#buttons_1 button").classed("selected", false);
                  thisButton.classed("selected", true);

              });
                d3.select("#y2008")
              .on("click", function(d,i) {
                  selected = "2008"
                  dataset = drawGraph(data, selected);
                sortedData =dataset.filter(function(d,i){
        return i < 10;
       });
                  redraw(sortedData, selected);
                  var thisButton = d3.select(this);
                  d3.selectAll("#buttons_1 button").classed("selected", false);
                  thisButton.classed("selected", true);

              });
            
                d3.select("#y2009")
              .on("click", function(d,i) {
                  selected = "2009"
                  dataset = drawGraph(data, selected);
                sortedData =dataset.filter(function(d,i){
        return i < 10;
       });
                  redraw(sortedData, selected);
                  var thisButton = d3.select(this);
                  d3.selectAll("#buttons_1 button").classed("selected", false);
                  thisButton.classed("selected", true);

              });
            
                d3.select("#y2010")
              .on("click", function(d,i) {
                  selected = "2010"
                  dataset = drawGraph(data, selected);
                sortedData =dataset.filter(function(d,i){
        return i < 10;
       });
                  redraw(sortedData, selected);
                  var thisButton = d3.select(this);
                  d3.selectAll("#buttons_1 button").classed("selected", false);
                  thisButton.classed("selected", true);

              });
            
                d3.select("#y2011")
              .on("click", function(d,i) {
                  selected = "2011"
                  dataset = drawGraph(data, selected);
                sortedData =dataset.filter(function(d,i){
        return i < 10;
       });
                  redraw(sortedData, selected);
                  var thisButton = d3.select(this);
                  d3.selectAll("#buttons_1 button").classed("selected", false);
                  thisButton.classed("selected", true);

              });
                d3.select("#y2012")
              .on("click", function(d,i) {
                  selected = "2012"
                  dataset = drawGraph(data, selected);
                sortedData =dataset.filter(function(d,i){
        return i < 10;
       });
                  redraw(sortedData, selected);
                  var thisButton = d3.select(this);
                  d3.selectAll("#buttons_1 button").classed("selected", false);
                  thisButton.classed("selected", true);

              });
                d3.select("#y2013")
              .on("click", function(d,i) {
                  selected = "2013"
                  dataset = drawGraph(data, selected);
                sortedData =dataset.filter(function(d,i){
        return i < 10;
       });
                  redraw(sortedData, selected);
                  var thisButton = d3.select(this);
                  d3.selectAll("#buttons_1 button").classed("selected", false);
                  thisButton.classed("selected", true);

              });
            
                d3.select("#y2014")
              .on("click", function(d,i) {
                  selected = "2014"
                  dataset = drawGraph(data, selected);
                sortedData =dataset.filter(function(d,i){
        return i < 10;
       });
                  redraw(sortedData, selected);
                  var thisButton = d3.select(this);
                  d3.selectAll("#buttons_1 button").classed("selected", false);
                  thisButton.classed("selected", true);

              });
            
            
          d3.select("#y2015")
              .on("click", function(d,i) {
                  selected = "2015"
                dataset = drawGraph(data, selected);
                sortedData =dataset.filter(function(d,i){
        return i < 10;
       });
                  redraw(sortedData, selected);
                  var thisButton = d3.select(this);
                  d3.selectAll("#buttons_1 button").classed("selected", false);
                  thisButton.classed("selected", true);
              });
            
                d3.select("#y2016")
              .on("click", function(d,i) {
                  selected = "2016"
                  dataset = drawGraph(data, selected);
                sortedData =dataset.filter(function(d,i){
        return i < 10;
       });
                  redraw(sortedData, selected);
                  var thisButton = d3.select(this);
                  d3.selectAll("#buttons_1 button").classed("selected", false);
                  thisButton.classed("selected", true);

              });
            
                d3.select("#y2017")
              .on("click", function(d,i) {
                  selected = "2017"
                  dataset = drawGraph(data, selected);
                sortedData =dataset.filter(function(d,i){
        return i < 10;
       });
                  redraw(sortedData, selected);
                  var thisButton = d3.select(this);
                  d3.selectAll("#buttons_1 button").classed("selected", false);
                  thisButton.classed("selected", true);

              });
            
                d3.select("#y2018")
              .on("click", function(d,i) {
                  selected = "2018"
                  dataset = drawGraph(data, selected);
                sortedData =dataset.filter(function(d,i){
        return i < 10;
       });
                  redraw(sortedData, selected);
                  var thisButton = d3.select(this);
                  d3.selectAll("#buttons_1 button").classed("selected", false);
                  thisButton.classed("selected", true);

              });

            //setup our ui -- requires access to data variable, so inside csv
            // d3.select("#menu select")
            //     .on("change", function() {
            //         column = d3.select("#menu select").property("value");
            //         dataset = drawGraph(data, column);
            //         //console.log(column, dataset);
            //         redraw(dataset, column);
            // });

        }) // end csv

    
        //make the bars for the first data set.  They will be red at first.

    function drawGraph(data, column) {

      return data.sort(function(a, b) {
        return b[column] - a[column]; // descending order, biggest at the top!
      }); // cut off the top 10!

    }

    // This function is used to draw and update the data. It takes different data each time.

    function redraw(data, column) {

        var max = d3.max(data, function(d) {return +d[column];});

        xScale = d3.scale.linear()
            .domain([0, max])
            .range([0, width]);

        yScale = d3.scale.ordinal()
            .domain(d3.range(data.length))
            .rangeBands([0, height], .2);


        var bars = vis.selectAll("rect.bar")
            .data(data, function (d) { return d.diet}); // key function!

        //update -- existing bars get blue when we "redraw". We don't change labels.
        // bars
        //   .attr("fill", "steelblue");

        //enter - new bars get set to darkorange when we "redraw."
        bars.enter()
            .append("rect")
            .attr("class", "bar");
            // .attr("fill", "steelblue");

        //exit -- remove ones that aren't in the index set
        bars.exit()
            .transition()
            .duration(300)
            .ease("exp")
            .attr("width", 0)
            .remove();

        // transition -- move the bars to proper widths and location
        bars
            .transition()
            .duration(500)
            .ease("quad")
            .attr("width", function(d) {
                return xScale(+d[column]);
            })
            .attr("height",  yScale.rangeBand())
            .attr("transform", function(d,i) {
                return "translate(" + [0, yScale(i)] + ")"
            })
            .attr("class", function(d,i){
              if (d.country === 'United States'){
                return "bar usFocus";
              }else{
                return "bar";
              }
            });


        //  We are attaching the labels separately, not in a group with the bars...

        var labels = svg.selectAll("text.labels")
            .data(data, function (d) { return d.diet}); // key function!

         var labels2 = svg.selectAll("text.labels")
            .data(data, function (d) { return d.diet}); // key function!
        // everything gets a class and a text field.  But we assign attributes in the transition.
        labels.enter()
            .append("text")
            .attr("class", "labels");

        labels.exit()
            .remove();

        labels.transition()
            .duration(900)
            .text(function(d) {
                return (d[column]) + " | " + d.diet;
            })
            .attr("transform", function(d,i) {
                    return "translate(" + xScale(+d[column]) + "," + yScale(i) + ")"
            })
            .attr("dy", "1.9em")
            .attr("dx", "6px")
            .attr("text-anchor", "inherit");


        
        } // end of draw function
})();
