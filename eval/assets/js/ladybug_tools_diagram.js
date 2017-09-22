var c = d3.select("div#tools_diagram");
var i = d3.select("img.img-software-icon");

var width = parseFloat(c.style('width')) - 30,
    height = 5.25 * parseFloat(i.style('height')) - 30;

var graph = {
    "nodes": [
        {"id": "Center", "group": 0, "img": "center.png", "size": 20, "text": "", "link": ""},
        {"id": "Ladybug", "group": 1, "img": "ladybug.png", "size": 50, "text": "Ladybug", "link": "./ladybug.html"},
        {"id": "Honeybee", "group": 2, "img": "honeybee.png", "size": 50, "text": "Honeybee", "link": "./honeybee.html"},
        {"id": "Butterfly", "group": 3, "img": "butterfly.png", "size": 50, "text": "Butterfly", "link": "./butterfly.html"},
        {"id": "Dragonfly", "group": 4, "img": "dragonfly.png", "size": 50, "text": "Dragonfly", "link": "./dragonfly.html"},
        {"id": "Weather_Data", "group": 1, "img": "weather_data.png", "size": 75, "text": "Visualize data", "link": "./ladybug.html#sunpath"},
        {"id": "Psychrometric", "group": 1, "img": "Psychrometric.png", "size": 75, "text": "Analyze data", "link": "./ladybug.html#psych"},
        {"id": "Renewables", "group": 1, "img": "renewables.png", "size": 75, "text": "Renewables", "link": "./ladybug.html#renewables"},
        {"id": "Analysis", "group": 1, "img": "analysis.png", "size": 75, "text": "Analyze geometry", "link": "./ladybug.html#radiation"},
        {"id": "EnergyPlus", "group": 2, "img": "energyplus.png", "size": 50, "text": "EnergyPlus", "link": "https://energyplus.net/"},
        {"id": "OpenStudio", "group": 2, "img": "openstudio.png", "size": 50, "text": "OpenStudio", "link": "https://www.openstudio.net/"},
        {"id": "Energy", "group": 2, "img": "energy.png", "size": 75, "text": "Energy models", "link": "./honeybee.html#heatingCooling"},
        {"id": "Radiance", "group": 2, "img": "radiance.png", "size": 50, "text": "Radiance", "link": "https://www.radiance-online.org/"},
        {"id": "Daysim", "group": 2, "img": "daysim.png", "size": 50, "text": "Daysim", "link": "http://daysim.ning.com/"},
        {"id": "Daylight", "group": 2, "img": "daylight.png", "size": 75, "text": "Daylight analysis", "link": "./honeybee.html#illuminance"},
        {"id": "Glare", "group": 2, "img": "glare.png", "size": 75, "text": "Glare analysis", "link": "./honeybee.html#glare"},
        {"id": "Electric_Lighting", "group": 2, "img": "electric_lighting.png", "size": 75, "text": "Electric lighting", "link": "./honeybee.html#electric"},
        {"id": "Annual_Daylight", "group": 2, "img": "annual_daylight.png", "size": 75, "text": "Annual daylight", "link": "./honeybee.html#annualDaylight"},
        {"id": "Therm", "group": 2, "img": "therm.png", "size": 50, "text": "Therm", "link": "https://windows.lbl.gov/software/therm/therm.html"},
        {"id": "Glazing_cnstr", "group": 2, "img": "glazing_construction.png", "size": 75, "text": "U-Value", "link": "./honeybee.html#envelope"},
        {"id": "Comfort", "group": 2, "img": "comfort.png", "size": 75, "text": "Indoor comfort", "link": "./honeybee.html#comfort"},
        {"id": "OpenFoam", "group": 3, "img": "OpenFoam.png", "size": 50, "text": "OpenFOAM", "link": "http://www.openfoam.com/"},
        {"id": "Airflow", "group": 3, "img": "airflow.png", "size": 75, "text": "Airflow", "link": "./butterfly.html#indoorairflow"},
        {"id": "Outdoor_Comfort", "group": 3, "img": "outdoor_comfort.png", "size": 75, "text": "Outdoor comfort", "link": "./honeybee.html#microclimate"},
        {"id": "HVAC_Sizing", "group": 3, "img": "hvac_sizing.png", "size": 75, "text": "HVAC sizing", "link": "./honeybee.html#hvac"},
        {"id": "NOAA", "group": 4, "img": "noaa.png", "size": 50, "text": "NOAA Database", "link": ""},
        {"id": "UWG", "group": 4, "img": "uwg.png", "size": 50, "text": "Urban Weather Gen.", "link": ""}
    ],
    "links": [
        {"source": "Center", "target": "Ladybug", "value": 0},
        {"source": "Center", "target": "Honeybee", "value": 0},
        {"source": "Center", "target": "Butterfly", "value": 0},
        {"source": "Center", "target": "Dragonfly", "value": 0},
        {"source": "Butterfly", "target": "Ladybug", "value": 4},
        {"source": "Butterfly", "target": "Honeybee", "value": 4},
        {"source": "Ladybug", "target": "Dragonfly", "value": 4},
        {"source": "Dragonfly", "target": "Honeybee", "value": 4},
        {"source": "Ladybug", "target": "Weather_Data", "value": 4},
        {"source": "Ladybug", "target": "Psychrometric", "value": 4},
        {"source": "Ladybug", "target": "Renewables", "value": 4},
        {"source": "Ladybug", "target": "Analysis", "value": 4},
        {"source": "Honeybee", "target": "EnergyPlus", "value": 4},
        {"source": "Honeybee", "target": "OpenStudio", "value": 4},
        {"source": "OpenStudio", "target": "EnergyPlus", "value": 4},
        {"source": "EnergyPlus", "target": "HVAC_Sizing", "value": 4},
        {"source": "EnergyPlus", "target": "Comfort", "value": 4},
        {"source": "EnergyPlus", "target": "Outdoor_Comfort", "value": 4},
        {"source": "EnergyPlus", "target": "Energy", "value": 4},
        {"source": "Honeybee", "target": "Radiance", "value": 4},
        {"source": "Honeybee", "target": "Daysim", "value": 4},
        {"source": "Radiance", "target": "Daylight", "value": 4},
        {"source": "Radiance", "target": "Glare", "value": 4},
        {"source": "Radiance", "target": "Electric_Lighting", "value": 4},
        {"source": "Radiance", "target": "Annual_Daylight", "value": 4},
        {"source": "Daysim", "target": "Annual_Daylight", "value": 4},
        {"source": "Honeybee", "target": "Therm", "value": 4},
        {"source": "Therm", "target": "Glazing_cnstr", "value": 4},
        {"source": "Butterfly", "target": "OpenFoam", "value": 4},
        {"source": "OpenFoam", "target": "Airflow", "value": 4},
        {"source": "OpenFoam", "target": "Outdoor_Comfort", "value": 4},
        {"source": "OpenFoam", "target": "Comfort", "value": 4},
        {"source": "Dragonfly", "target": "NOAA", "value": 4},
        {"source": "Dragonfly", "target": "UWG", "value": 4},
    ]
}

var transform = d3.zoomIdentity;
var svg = d3.select("#tools_diagram").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("fill", "black")
    .attr("stroke-width", "1px");


var zooming = false;
var zoom = d3.zoom().scaleExtent([1 / 2, 8])
  .on("zoom", zoomed);

svg.on("dblclick.zoom", null); //disable double click zoom


g = svg.append("g")
    .attr("transform", "translate(0,0)");

function zoomed() {
  // only zoom and pan when ctrl key is pressed.
  if (zooming){
    g.attr("transform", d3.event.transform);
  }
}

d3.select("body").on("keydown", function () {
  	zooming = d3.event.ctrlKey;
    svg.call(zoom);
	});

d3.select("body").on("keyup", function () {
  svg.on('.zoom', null);
  zooming = false;
});

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("charge", d3.forceManyBody().strength(-1500))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide().radius(75).iterations(6))
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
    .attr("font-size", "13px")
    .text(function(d) { return d.text; });

node.on("dblclick", function(d){
      d3.event.preventDefault(); //stop showing browser menu
      window.open(d.link, '_blank')
      //location.href = d.link;
    });

// for touch interface
node.on("click", function(d){
      d3.event.preventDefault(); //stop showing browser menu
      window.open(d.link, '_blank')
      //location.href = d.link;
    });

// add titles
d3.selectAll("image")
    .append("title")
    .text(function(d) { return d.text; })


// add border
var borderPath = svg.append("rect")
 			.attr("x", 0)
 			.attr("y", 0)
      .attr("width", width)
 			.attr("height", height)
 			.style("fill", "none")

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
    var x = parseFloat(c.style('width')) - 30; // 30 px for bootstrap padding
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
