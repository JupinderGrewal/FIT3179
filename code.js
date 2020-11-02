const datasetURL="https://raw.githubusercontent.com/JupinderGrewal/FIT3179/main/transformedData_noNA.csv"

const vlMap1= {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "width": "container",
    "height": "container",
    "resize": true,
    "title": "Global Use of the Internet, 2017",
    "data": {
        "url": "https://raw.githubusercontent.com/JupinderGrewal/FIT3179/main/custom.topo.geo.json",
        "format": {"type": "topojson", "feature": "countries"}
    },
    "projection": {"type": "equalEarth"},
    "layer": [
        {"mark": {"type": "geoshape", "fill": "lightgrey", "stroke": "white"}},
        {
            "transform": [
                {
                    "lookup": "properties.name",
                    "from": {
                        "data": {
                            "url": "https://raw.githubusercontent.com/JupinderGrewal/FIT3179/main/transformedData_noNA.csv",
                            "format": {"type": "csv"}
                        },
                        "key": "Country",
                        "fields": ["Individuals using the Internet (% of population)", "Time","Country"]
                    }
                },
                {"filter":{"field": "Individuals using the Internet (% of population)", "valid": true}},
                {"filter": {"timeUnit":"year","field": "Time", "equal": 2017}}
            ],
            "mark": {"type": "geoshape", "stroke": "white"},
            "encoding": {
                "color":
                    {"field": "Individuals using the Internet (% of population)",
                        "type": "quantitative",
                        "scale": {
                            "type": "linear", "domain":[0,100]
                        },
                        "legend": {"title": "Population %", "titleAlign":"center"}
                    },
                "tooltip": [
                    {"field": "Country", "type": "nominal"},
                    {"field": "Individuals using the Internet (% of population)", "type": "quantitative", "format": ".2f", "title": "Population Internet Use (%)"}
                ]
            }
        }
    ]
}

const vlSubMap1= {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "width": "container",
    "height": "container",
    "resize": true,
    "title": "Global Fixed Telephone Lines (per 100 people), 2017",
    "data": {
        "url": "https://raw.githubusercontent.com/JupinderGrewal/FIT3179/main/custom.topo.geo.json",
        "format": {"type": "topojson", "feature": "countries"}
    },
    "projection": {"type": "equalEarth"},
    "layer": [
        {"mark": {"type": "geoshape", "fill": "lightgrey", "stroke": "white"}},
        {
            "transform": [
                {
                    "lookup": "properties.name",
                    "from": {
                        "data": {
                            "url": "https://raw.githubusercontent.com/JupinderGrewal/FIT3179/main/transformedData_noNA.csv",
                            "format": {"type": "csv"}
                        },
                        "key": "Country",
                        "fields": ["Fixed telephone subscriptions (per 100 people)", "Time","Country"]
                    }
                },
                {"filter":{"field": "Fixed telephone subscriptions (per 100 people)", "valid": true}},
                {"filter": {"timeUnit":"year","field": "Time", "equal": 2017}}
            ],
            "mark": {"type": "geoshape", "stroke": "white"},
            "encoding": {
                "color":
                    {"field": "Fixed telephone subscriptions (per 100 people)",
                        "type": "quantitative",
                        "legend": {"title": "Per 100 people", "titleAlign":"center"},
                        "scale": {"type": "linear"}
                    },
                "tooltip": [
                    {"field": "Country", "type": "nominal"},
                    {"field": "Fixed telephone subscriptions (per 100 people)", "format":".2f","type": "quantitative", "title": "Fixed telephone subscriptions (per 100 people)"}
                ]
            }
        }
    ]
}

const vlSubMap2={
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "width": "container",
    "height": "container",
    "resize": true,
    "title": "Fixed broadband subscriptions (per 100 people), 2017",
    "data": {
        "url": "https://raw.githubusercontent.com/JupinderGrewal/FIT3179/main/custom.topo.geo.json",
        "format": {"type": "topojson", "feature": "countries"}
    },
    "projection": {"type": "equalEarth"},
    "layer": [
        {"mark": {"type": "geoshape", "fill": "lightgrey", "stroke": "white"}},
        {
            "transform": [
                {
                    "lookup": "properties.name",
                    "from": {
                        "data": {
                            "url": "https://raw.githubusercontent.com/JupinderGrewal/FIT3179/main/transformedData_noNA.csv",
                            "format": {"type": "csv"}
                        },
                        "key": "Country",
                        "fields": ["Fixed broadband subscriptions (per 100 people)", "Time","Country"]
                    }
                },
                {"filter":{"field": "Fixed broadband subscriptions (per 100 people)", "valid": true}},
                {"filter": {"timeUnit":"year","field": "Time", "equal": 2017}}
            ],
            "mark": {"type": "geoshape", "stroke": "white"},
            "encoding": {
                "color":
                    {"field": "Fixed broadband subscriptions (per 100 people)",
                        "type": "quantitative",
                        "legend": {"title": "Per 100 people", "titleAlign":"center"},
                        "scale": {"type": "linear"}
                    },
                "tooltip": [
                    {"field": "Country", "type": "nominal"},
                    {"field": "Fixed broadband subscriptions (per 100 people)", "format":".2f","type": "quantitative", "title": "Fixed broadband subscriptions (per 100 people)"},
                    {"field": "Time", "type":"nominal"}
                ]
            }
        }
    ]
}

const vlSubMap3= {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "width": "container",
    "height": "container",
    "resize": true,
    "title": "Mobile cellular subscriptions (per 100 people), 2017",
    "data": {
        "url": "https://raw.githubusercontent.com/JupinderGrewal/FIT3179/main/custom.topo.geo.json",
        "format": {"type": "topojson", "feature": "countries"}
    },
    "projection": {"type": "equalEarth"},
    "layer": [
        {"mark": {"type": "geoshape", "fill": "lightgrey", "stroke": "white"}},
        {
            "transform": [
                {
                    "lookup": "properties.name",
                    "from": {
                        "data": {
                            "url": "https://raw.githubusercontent.com/JupinderGrewal/FIT3179/main/transformedData_noNA.csv",
                            "format": {"type": "csv"}
                        },
                        "key": "Country",
                        "fields": ["Mobile cellular subscriptions (per 100 people)", "Time","Country"]
                    }
                },
                {"filter":{"field": "Mobile cellular subscriptions (per 100 people)", "valid": true}},
                {"filter": {"timeUnit":"year","field": "Time", "equal": 2017}}
            ],
            "mark": {"type": "geoshape"},
            "encoding": {
                "color":
                    {"field": "Mobile cellular subscriptions (per 100 people)",
                        "type": "quantitative",
                        "legend": {"title": "Per 100 people", "titleAlign":"center"},
                        "scale": {"type": "linear"}
                    },
                "tooltip": [
                    {"field": "Country", "type": "nominal"},
                    {"field": "Mobile cellular subscriptions (per 100 people)", "format":".2f","type": "quantitative", "title": "Mobile cellular subscriptions (per 100 people)"},
                    {"field": "Time", "type":"nominal"}
                ]
            }
        }
    ]
}

const vlLineChart = {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "width": "container",
    "height": "container",
    "resize": true,
    "title": "Global Popularity of Technologies (1975 - 2017)",
    "data": {
        "url": "https://raw.githubusercontent.com/JupinderGrewal/FIT3179/main/transformedData_noNA.csv"
    },
    "repeat": {
        "layer": ["Fixed telephone subscriptions", "Fixed broadband subscriptions","Mobile cellular subscriptions"]
    },
    "spec": {
        "mark": {"type":"line", "interpolate":"monotone", "strokeWidth":4},
        "transform": [{"filter": {"timeUnit":"year","field": "Time", "gt":1975}}],
        "encoding": {
            "x": {
                "field": "Time",
                "type": "temporal",
                "axis":{"gridColor":"white"}
            },
            "y": {
                "aggregate": "sum",
                "field": {"repeat": "layer"},
                "type": "quantitative",
                "title": "Total Global Subscriptions"
            },
            "color": {
                "datum": {"repeat": "layer"},
                "type": "nominal"
            }
        }
    }
}

const vlPointChart1= {
    "$schema":"https://vega.github.io/schema/vega-lite/v4.json",
    "title":"Mobile plans vs Average Income (2017)",
    "width": "container",
    "height": "container",
    "resize": true,
    "data": {
        "url":"https://raw.githubusercontent.com/JupinderGrewal/FIT3179/main/transformedData_noNA.csv"
    },
    "transform": [
        {"filter": {"field": "Time", "equal": 2017}},
        {"filter": {"field": "Mobile cellular subscriptions (per 100 people)", "gt": 0}},
        {"filter": {"field": "GNI per capita, Atlas method (current US$)","gt": 0}}
    ],
    "encoding":{
        "y": {
            "field": "Mobile cellular subscriptions (per 100 people)",
            "type": "quantitative",
            "scale": {"type": "linear"},
            "axis": {"tickCount": 8},
            "title": "Mobile Plans (per 100 people)"
        },
        "x":{
            "field": "GNI per capita, Atlas method (current US$)",
            "type":"quantitative",
            "axis": {"tickCount": 4, "gridColor":"white"},
            "title": "Average Income Per Capita",
            "scale":{"type": "log"}
        }

    },
    "layer":[
        {
            "mark":"circle",
            "selection":{
                "continent_highlight":{
                    "type":"multi",
                    "fields":["Continent"],
                    "bind":"legend"
                },
                "grid": {
                    "type": "interval",
                    "bind":"scales"
                },
                "paintbrush": {
                    "type": "single",
                    "on": "mouseover", "empty":"none"
                }
            },
            "encoding":{
                "color": {
                    "field": "Continent",
                    "type": "nominal",
                    "scale": {"scheme": "category10"}},
                "size": {
                    "field": "Population, total",
                    "type": "quantitative",
                    "scale":{
                        "type": "threshold",
                        "domain": [1e6,1e7,5e7,1e8,5e8],
                        "range": [10, 50, 150, 200, 300, 400]
                    },
                    "legend": {"format": ".1s", "title": "Population"},
                    "condition": {
                        "selection": "paintbrush", "value": 400
                    }
                },
                "opacity": {
                    "condition":{"selection": "continent_highlight", "value": 0.8},
                    "value": 0.2
                },
                "tooltip": [
                    {"field": "Country", "type": "nominal"},
                    {"field": "Mobile cellular subscriptions (per 100 people)", "type": "quantitative", "title": "Mobile Cell Subscriptions", "format":".1f"},
                    {"field": "GNI per capita, Atlas method (current US$)", "type": "quantitative", "title": "Average Income", "format": "$,"},
                    {"field": "Population, total", "type":"quantitative", "title": "Population", "format": ".1s"}
                ]
            }
        },
        {
            "mark":{
                "type":"text",
                "align":"center",
                "baseline":"middle",
                "dx":12,
                "dy": -10,
                "fontSize":12,
                "fontStyle":"italic",
                "fontWeight": "lighter"
            },
            "encoding":{
                "text":{
                    "field":"Country Code",
                    "type":"nominal"
                },
                "color":{
                    "value":"black"
                },
                "opacity":{
                    "condition":{
                        "test":"datum['Country'] == 'Burundi' || datum['Country'] == 'Hong Kong SAR, China' || datum['Country'] == 'Australia' || datum['Country'] == 'Indonesia' ||  datum['Country'] == 'Switzerland'||  datum['Country'] == 'Macao SAR, China'",
                        "value":1
                    },
                    "value":0
                }
            }
        }
    ]
}

const vlPointChart2={
    "$schema":"https://vega.github.io/schema/vega-lite/v4.json",
    "title":"Telephone Subscriptions vs Average Income (2017)",
    "width": "container",
    "height": "container",
    "resize": true,
    "data": {
        "url":"https://raw.githubusercontent.com/JupinderGrewal/FIT3179/main/transformedData_noNA.csv"
    },
    "transform": [
        {"filter": {"field": "Time", "equal": 2017}},
        {"filter": {"field": "Fixed telephone subscriptions (per 100 people)", "gt": 0}},
        {"filter": {"field": "GNI per capita, Atlas method (current US$)","gt": 0}}
    ],
    "encoding":{
        "y": {
            "field": "Fixed telephone subscriptions (per 100 people)",
            "type": "quantitative",
            "scale": {"type": "linear"},
            "axis": {"tickCount": 8},
            "title": "Subscriptions (per 100 people)"
        },
        "x":{
            "field": "GNI per capita, Atlas method (current US$)",
            "type":"quantitative",
            "axis": {"tickCount": 4, "gridColor":"white"},
            "title": "Average Income Per Capita",
            "scale":{"type": "log"}
        }

    },
    "layer":[
        {
            "mark":"circle",
            "selection":{
                "continent_highlight":{
                    "type":"multi",
                    "fields":["Continent"],
                    "bind":"legend"
                },
                "grid": {
                    "type": "interval",
                    "bind":"scales"
                },
                "paintbrush": {
                    "type": "single",
                    "on": "mouseover", "empty":"none"
                }
            },
            "encoding":{
                "color": {
                    "field": "Continent",
                    "type": "nominal",
                    "scale": {"scheme": "category10"}},
                "size": {
                    "field": "Population, total",
                    "type": "quantitative",
                    "scale":{
                        "type": "threshold",
                        "domain": [1e6,1e7,5e7,1e8,5e8],
                        "range": [10, 50, 150, 200, 300, 400]
                    },
                    "legend": {"format": ".1s", "title": "Population"},
                    "condition": {
                        "selection": "paintbrush", "value": 400
                    }
                },
                "opacity": {
                    "condition":{"selection": "continent_highlight", "value": 0.8},
                    "value": 0.2
                },
                "tooltip": [
                    {"field": "Country", "type": "nominal"},
                    {"field": "Fixed telephone subscriptions (per 100 people)", "type": "quantitative", "title": "Telephone Subs. (per 100 people)", "format":".1f"},
                    {"field": "GNI per capita, Atlas method (current US$)", "type": "quantitative", "title": "Average Income", "format": "$,"},
                    {"field": "Population, total", "type":"quantitative", "title": "Population", "format": ".1s"}
                ]
            }
        },
        {
            "mark":{
                "type":"text",
                "align":"center",
                "baseline":"middle",
                "dx":12,
                "dy": -10,
                "fontSize":12,
                "fontStyle":"italic",
                "fontWeight": "lighter"
            },
            "encoding":{
                "text":{
                    "field":"Country Code",
                    "type":"nominal"
                },
                "color":{
                    "value":"Black"
                },
                "opacity":{
                    "condition":{
                        "test":"datum['Country'] == 'Malawi' || datum['Country'] == 'Norway' || datum['Country'] == 'Australia' || datum['Country'] == 'France' ||  datum['Country'] == 'Belarus'||  datum['Country'] == 'Finland'",
                        "value":1
                    },
                    "value":0
                }
            }
        }
    ]
}

const vlPointChart3={
    "$schema":"https://vega.github.io/schema/vega-lite/v4.json",
    "title":"Broadband Subscriptions vs Average Income (2017)",
    "width": "container",
    "height": "container",
    "resize": true,
    "data": {
        "url":"https://raw.githubusercontent.com/JupinderGrewal/FIT3179/main/transformedData_noNA.csv"
    },
    "transform": [
        {"filter": {"field": "Time", "equal": 2017}},
        {"filter": {"field": "Fixed broadband subscriptions (per 100 people)", "gt": 0}},
        {"filter": {"field": "GNI per capita, Atlas method (current US$)","gt": 0}}
    ],
    "encoding":{
        "y": {
            "field": "Fixed broadband subscriptions (per 100 people)",
            "type": "quantitative",
            "scale": {"type": "linear"},
            "axis": {"tickCount": 8},
            "title": "Subscriptions (per 100 people)"
        },
        "x":{
            "field": "GNI per capita, Atlas method (current US$)",
            "type":"quantitative",
            "axis": {"tickCount": 4, "gridColor":"white"},
            "title": "Average Income Per Capita",
            "scale":{"type": "log"}
        }

    },
    "layer":[
        {
            "mark":"circle",
            "selection":{
                "continent_highlight":{
                    "type":"multi",
                    "fields":["Continent"],
                    "bind":"legend"
                },
                "grid": {
                    "type": "interval",
                    "bind":"scales"
                },
                "paintbrush": {
                    "type": "single",
                    "on": "mouseover", "empty":"none"
                }
            },
            "encoding":{
                "color": {
                    "field": "Continent",
                    "type": "nominal",
                    "scale": {"scheme": "category10"}},
                "size": {
                    "field": "Population, total",
                    "type": "quantitative",
                    "scale":{
                        "type": "threshold",
                        "domain": [1e6,1e7,5e7,1e8,5e8],
                        "range": [10, 50, 150, 200, 300, 400]
                    },
                    "legend": {"format": ".1s", "title": "Population"},
                    "condition": {
                        "selection": "paintbrush", "value": 400
                    }
                },
                "opacity": {
                    "condition":{"selection": "continent_highlight", "value": 0.8},
                    "value": 0.2
                },
                "tooltip": [
                    {"field": "Country", "type": "nominal"},
                    {"field": "Fixed broadband subscriptions (per 100 people)", "type": "quantitative", "title": "Broadband Subs. (per 100 people)", "format":".1f"},
                    {"field": "GNI per capita, Atlas method (current US$)", "type": "quantitative", "title": "Average Income", "format": "$,"},
                    {"field": "Population, total", "type":"quantitative", "title": "Population", "format": ".1s"}
                ]
            }
        },
        {
            "mark":{
                "type":"text",
                "align":"center",
                "baseline":"middle",
                "dx":12,
                "dy": 10,
                "fontSize":12,
                "fontStyle":"italic",
                "fontWeight": "lighter"
            },
            "encoding":{
                "text":{
                    "field":"Country Code",
                    "type":"nominal"
                },
                "color":{
                    "value":"Black"
                },
                "opacity":{
                    "condition":{
                        "test":"datum['Country'] == 'Malawi' || datum['Country'] == 'Norway' || datum['Country'] == 'Australia' || datum['Country'] == 'Cayman Islands' ||  datum['Country'] == 'Belarus'||  datum['Country'] == 'Qatar'||  datum['Country'] == 'St. Kitts and Nevis'",
                        "value":1
                    },
                    "value":0
                }
            }
        }
    ]
}

const vlArea1={
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "width": "container",
    "height": "container",
    "resize": true,
    "title": "Growth of Broadband Subscriptions Over Time (1998-2017)",
    "data": {"url": "https://raw.githubusercontent.com/JupinderGrewal/FIT3179/main/transformedData_noNA.csv"},
    "mark": "area",
    "transform": [
        {"filter": {"field": "Fixed broadband subscriptions", "gt": 0}},
        {"filter": {"timeUnit": "year", "field": "Time", "lte":2017}}
    ],
    "selection": {
        "grid": {
            "type": "interval",
            "bind": "scales"
        }
    },
    "encoding": {
        "x": {
            "timeUnit": "year", "field": "Time",
            "type":"temporal",
            "axis": {"format": "%Y", "gridColor": "white"},
            "title": "Year"
        },
        "y": {
            "aggregate": "sum",
            "field": "Fixed broadband subscriptions",
            "type": "quantitative",
            "title": "Total Subscriptions",
            "axis": {
                "format": ",f"
            }
        },
        "color": {
            "field": "Continent",
            "type": "nominal"
        },
        "tooltip": [
            {"field": "Continent"},
            {"field": "Fixed broadband subscriptions",
                "aggregate":"sum",
                "format":".2s",
                "title": "Total Number of Broadband Subs."},
            {"field": "Time",
                "timeUnit": "year",
                "title":"Year"}

        ]

    }
}

const vlArea2= {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "width": "container",
    "height": "container",
    "resize": true,
    "title": "Growth of Telephone Subscriptions (1960-2017)",
    "data": {"url": "https://raw.githubusercontent.com/JupinderGrewal/FIT3179/main/transformedData_noNA.csv"},
    "mark": "area",
    "transform": [
        {"filter": {"field": "Fixed telephone subscriptions", "gt": 0}},
        {"filter": {"timeUnit": "year", "field": "Time", "lte":2017}},
        {"filter": {"field": "Continent", "oneOf": ["Americas","Europe","Asia","Oceania","Africa"]}}
    ],
    "selection": {
        "grid": {
            "type": "interval",
            "bind": "scales"
        }
    },
    "encoding": {
        "x": {
            "timeUnit": "year", "field": "Time",
            "type":"temporal",
            "axis": {"format": "%Y", "gridColor": "white"},
            "title": "Year"
        },
        "y": {
            "aggregate": "sum",
            "field": "Fixed telephone subscriptions",
            "type": "quantitative",
            "title": "Total Subscriptions",
            "axis": {
                "format": ",f"
            },
            "sort":"-y"
        },
        "color": {
            "field": "Continent",
            "type": "nominal"
        },
        "tooltip": [
            {"field": "Continent"},
            {"field": "Fixed telephone subscriptions",
                "aggregate":"sum",
                "format":".2s",
                "title": "Total Number of Telephone Subs."},
            {"field": "Time",
                "timeUnit":"year",
                "title":"Year"}

        ]

    }
}

const vlArea3 ={
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "width": "container",
    "height": "container",
    "resize": true,
    "title": "Growth of Mobile Subscriptions (1985-2017)",
    "data": {"url": "https://raw.githubusercontent.com/JupinderGrewal/FIT3179/main/transformedData_noNA.csv"},
    "mark": "area",
    "transform": [
        {"filter": {"field": "Mobile cellular subscriptions", "gt": 0}},
        {"filter": {"timeUnit": "year", "field": "Time", "gt":1985}},
        {"filter": {"field": "Continent", "oneOf": ["Americas","Europe","Asia","Oceania","Africa"]}}
    ],
    "selection": {
        "grid": {
            "type": "interval",
            "bind": "scales"
        }
    },
    "encoding": {
        "x": {
            "timeUnit": "year", "field": "Time",
            "type":"temporal",
            "axis": {"format": "%Y", "gridColor":"white"},
            "title": "Year"
        },
        "y": {
            "aggregate": "sum",
            "field": "Mobile cellular subscriptions",
            "type": "quantitative",
            "title": "Total Subscriptions",
            "axis": {
                "format": ",f"
            },
            "sort":"-y"
        },
        "color": {
            "field": "Continent",
            "type": "nominal"
        },
        "tooltip": [
            {"field": "Continent"},
            {"field": "Mobile cellular subscriptions",
                "aggregate":"sum",
                "format":",",
                "title": "Total Number of Mobile Subs."},
            {"field": "Time",
                "timeUnit":"year",
                "title":"Year"}

        ]

    }
}

const vlHeatMap= {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "data": {"url": "https://raw.githubusercontent.com/JupinderGrewal/FIT3179/main/transformedData_noNA.csv"},
    "title": "Global ICT Imports and Exports (2017)",
    "transform": [{
        "filter": {"and": [
                {"field": "ICT goods exports (% of total goods exports)", "gt": 0},
                {"field": "ICT goods imports (% total goods imports)", "gt": 0},
                {"field": "Time", "equal": 2017}
            ]}
    }],
    "mark": "rect",
    "width": "container",
    "height": "container",
    "resize": true,
    "encoding": {
        "x": {
            "bin": {"maxbins": 20},
            "field": "ICT goods imports (% total goods imports)",
            "type": "quantitative",
            "title": "ICT Goods Imports (% of Total Imports)"
        },
        "y": {
            "bin": {"maxbins": 20},
            "field": "ICT goods exports (% of total goods exports)",
            "type": "quantitative",
            "title": "ICT Goods Exports (% of Total Exports)"
        },
        "color": {
            "aggregate": "count",
            "type": "quantitative",
            "scale":{
                "type": "sqrt"
            }
        },
        "tooltip": [
            {"field": "ICT goods imports (% total goods imports)",
                "type": "quantitative",
                "aggregate":"average",
                "title": "Average ICT Imports (%)",
                "format": ".2f"},
            {"field": "ICT goods exports (% of total goods exports)",
                "type": "quantitative",
                "aggregate":"average",
                "title": "Average ICT Exports (%)",
                "format": ".2f"}
        ]
    },
    "config": {
        "view": {
            "stroke": "transparent"
        }
    }
}


// Embed the visualization in the container with id `vis`
vegaEmbed('#vlMap1', vlMap1);
vegaEmbed('#vlLineChart', vlLineChart);
vegaEmbed('#vlHeatMap',vlHeatMap);


// form handling
const charts = {
    line:{
        vlSubMap1,
        vlSubMap2,
        vlSubMap3
    },
    point:{
        vlPointChart1,
        vlPointChart2,
        vlPointChart3
    },
    area:{
        vlArea1,
        vlArea2,
        vlArea3
    }
}
$("input[type=radio][name=interactiveChart]").on("change",function(){

    const selectedChart = $(this).val(); //vlSubMap2
    vegaEmbed("#interactiveChart",charts["line"][selectedChart])
})

$("input[type=radio][name=interactiveAreaRadio]").on("change",function(){
    const selectedChart = $(this).val();
    vegaEmbed("#interactiveAreaChart",charts["area"][selectedChart])
})
$("input[type=radio][name=interactivePointRadio]").on("change",function(){
    const selectedChart = $(this).val();
    vegaEmbed("#interactivePointChart",charts["point"][selectedChart])
})

// set a default
vegaEmbed("#interactiveChart",charts["line"]["vlSubMap1"])
vegaEmbed("#interactiveAreaChart",charts["area"]["vlArea1"])
vegaEmbed("#interactivePointChart",charts["point"]["vlPointChart1"])
