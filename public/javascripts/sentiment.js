/**
 * Created by Alicia on 21/06/2015.
 */

var data = results;

var margin = {top: 30, right: 10, bottom: 10, left: 10},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
var x = d3.scale.linear()
    .range([0, width]);
var y = d3.scale.ordinal()
    .rangeRoundBands([0, height], .2);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("top");
var svg = d3.select("div.main-content").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

x.domain(d3.extent(data, function (d) {
    return d.score;
})).nice();
y.domain(data.map(function (d) {
    return d.line;
}));
svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .style("fill", "#c33")
    .attr("class", function (d) {
        return d.score < 0 ? "bar negative" : "bar positive";
    })
    .attr("x", function (d) {
        return x(Math.min(0, d.score));
    })
    .attr("y", function (d) {
        return y(d.line);
    })
    .attr("width", function (d) {
        return Math.abs(x(d.score) - x(0));
    })
    .attr("height", y.rangeBand());
svg.append("g")
    .attr("class", "x axis")
    .style("fill", "#922323")
    .call(xAxis);
svg.append("g")
    .attr("class", "y axis")
    .append("line")
    .attr("x1", x(0))
    .attr("x2", x(0))
    .attr("y2", height);

function type(d) {
    d.score = +d.score;
    return d;
}