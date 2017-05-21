var c = d3.select("div#tools_diagram");

var width = parseFloat(c.style('width')) - 30,
    height = parseFloat(c.style('height')) - 30;

var graph = {
    "nodes": [
        {"id": "Ladybug", "group": 1, "img": "ladybug.png", "size": 60, "text": "Ladybug"},
        {"id": "Honeybee", "group": 2, "img": "honeybee.png", "size": 60, "text": "Honeybee"},
        {"id": "Butterfly", "group": 3, "img": "butterfly.png", "size": 60, "text": "Butterfly"},
        {"id": "Weather_Data", "group": 1, "img": "weather_data.png", "size": 90, "text": "Visualize data"},
        {"id": "Psychrometric", "group": 1, "img": "Psychrometric.png", "size": 90, "text": "Analyze data"},
        {"id": "Renewables", "group": 1, "img": "renewables.png", "size": 90, "text": "Renewables"},
        {"id": "Analysis", "group": 1, "img": "analysis.png", "size": 90, "text": "Analyze geometry"},
        {"id": "EnergyPlus", "group": 2, "img": "energyplus.png", "size": 50, "text": "EnergyPlus"},
        {"id": "OpenStudio", "group": 2, "img": "openstudio.png", "size": 50, "text": "OpenStudio"},
        {"id": "Energy", "group": 2, "img": "energy.png", "size": 90, "text": "Energy analysis"},
        {"id": "Radiance", "group": 2, "img": "radiance.png", "size": 50, "text": "Radiance"},
        {"id": "Daysim", "group": 2, "img": "daysim.png", "size": 50, "text": "Daysim"},
        {"id": "Daylight", "group": 2, "img": "daylight.png", "size": 90, "text": "Daylight analysis"},
        {"id": "Glare", "group": 2, "img": "glare.png", "size": 90, "text": "Glare analysis"},
        {"id": "Electric_Lighting", "group": 2, "img": "electric_lighting.png", "size": 90, "text": "Electric lighting"},
        {"id": "Annual_Daylight", "group": 2, "img": "annual_daylight.png", "size": 90, "text": "Annual daylight"},
        {"id": "Therm", "group": 2, "img": "therm.png", "size": 50, "text": "Therm & Window"},
        {"id": "Glazing_cnstr", "group": 2, "img": "glazing_construction.png", "size": 90, "text": "Construction analysis"},
        {"id": "Comfort", "group": 2, "img": "comfort.png", "size": 90, "text": "Indoor comfort"},
        {"id": "OpenFoam", "group": 3, "img": "OpenFoam.png", "size": 50, "text": "OpenFOAM"},
        {"id": "Airflow", "group": 3, "img": "airflow.png", "size": 90, "text": "Airflow"},
        {"id": "Outdoor_Comfort", "group": 3, "img": "outdoor_comfort.png", "size": 90, "text": "Outdoor comfort"},
    ],
    "links": [
        {"source": "Ladybug", "target": "Honeybee", "value": 4},
        {"source": "Honeybee", "target": "Butterfly", "value": 4},
        {"source": "Butterfly", "target": "Ladybug", "value": 4},
        {"source": "Ladybug", "target": "Weather_Data", "value": 4},
        {"source": "Ladybug", "target": "Psychrometric", "value": 4},
        {"source": "Ladybug", "target": "Renewables", "value": 4},
        {"source": "Ladybug", "target": "Analysis", "value": 4},
        {"source": "Honeybee", "target": "EnergyPlus", "value": 4},
        {"source": "Honeybee", "target": "OpenStudio", "value": 4},
        {"source": "OpenStudio", "target": "EnergyPlus", "value": 4},
        {"source": "EnergyPlus", "target": "Comfort", "value": 4},
        {"source": "EnergyPlus", "target": "Outdoor_Comfort", "value": 4},
        {"source": "EnergyPlus", "target": "Energy", "value": 4},
        {"source": "Honeybee", "target": "Radiance", "value": 4},
        {"source": "Honeybee", "target": "Daysim", "value": 4},
        {"source": "Radiance", "target": "Daylight", "value": 4},
        {"source": "Radiance", "target": "Glare", "value": 4},
        {"source": "Radiance", "target": "Electric_Lighting", "value": 4},
        {"source": "Daysim", "target": "Annual_Daylight", "value": 4},
        {"source": "Honeybee", "target": "Therm", "value": 4},
        {"source": "Therm", "target": "Glazing_cnstr", "value": 4},
        {"source": "Butterfly", "target": "OpenFoam", "value": 4},
        {"source": "OpenFoam", "target": "Airflow", "value": 4},
        {"source": "OpenFoam", "target": "Outdoor_Comfort", "value": 4},
        {"source": "OpenFoam", "target": "Comfort", "value": 4},
    ]
}

var transform = d3.zoomIdentity;
var svg = d3.select("#tools_diagram").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("stroke", "black")
    .attr("fill", "none")
    .attr("stroke-width", "1px")
    .call(d3.zoom().scaleExtent([1 / 2, 8]).on("zoom", zoomed))


var borderPath = svg.append("rect")
 			.attr("x", 0)
 			.attr("y", 0)
      .attr("width", width)
 			.attr("height", height)
 			.style("stroke", "black")
 			.style("fill", "none")
 			.style("stroke-width", "2px");

g = svg.append("g")
    .attr("transform", "translate(0,0)");

function zoomed() {
    g.attr("transform", d3.event.transform);
}

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("charge", d3.forceManyBody().strength(-2000))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide().radius(75).iterations(5))
    .force("y", d3.forceY(0))
    .force("x", d3.forceX(0))
    .on("tick", ticked);

simulation.nodes(graph.nodes);

simulation
  .force("link")
  .links(graph.links);

var link = g.selectAll(".link")
    .data(graph.links)
  .enter().append("line")
    .attr("class", "link");

var node = g.selectAll(".node")
    .data(graph.nodes)
  .enter().append("g")
    .attr("class", "node");

simulation.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; })

    node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
  });

node.append("image")
    .attr("xlink:href", function(d) { return "./assets/img/graph/" + d.img; })
    .attr("x", function(d) { return -d.size / 2; })
    .attr("y", function(d) { return -d.size / 2; })
    .attr("width", function(d) { return d.size; })
    .attr("height", function(d) { return d.size; })
      .call(d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended));

node.append("text")
    .attr("dx", function(d) { return d.size / 2 + 4; })
    .attr("dy", ".35em")
    .text(function(d) { return d.text; });

// add titles
d3.selectAll("image")
    .append("title")
    .text(function(d) { return d.text; })


d3.select(window).on("resize", center);

function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
}

function center(){
    var c = d3.select("div#tools_diagram");
    var x = parseFloat(c.style('width')) - 30; // 30 px for bootstrap padding

    var i = d3.select("div#ladybug_icon");
    var y = 4 * parseFloat(i.style('height')) - 30;

    svg.attr("width", x).attr("height", y);
    borderPath.attr("width", x).attr("height", y);

    simulation.force("center")
        .x(x / 2)
        .y(y / 2);

    simulation.alphaTarget(0.1).restart();
}

function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}
