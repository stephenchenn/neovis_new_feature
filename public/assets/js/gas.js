
    var driver = neo4j.driver(
        "bolt://35.189.34.111:7687",
        neo4j.auth.basic("neo4j", "enzen"),
                                  );
    
    popoto.runner.DRIVER = driver
    
    popoto.provider.node.Provider = {
    
    "CEO Dashboard": {
        "returnAttributes": ["Name","Description","Category","Level","Cost"],
        "constraintAttribute": "Name",
        "displayResults": function (pResultElmt) {
            var tbody = pResultElmt.append("table").attr("class", "json-object").append("tbody");
            var name1 = tbody.append("tr");
            //name1.append("th").text("Name");
            name1.append("th").attr("colspan",2).text(function (result) {
                return result.attributes.Name;
            });
    
            var desc = tbody.filter(function (result) {
                // Filter on attribute having Description attribute value
                return result.attributes.Description;
            }).append("tr");
            //desc.append("th").text("Description");
            desc.append("td").attr("colspan",2).style("text-align","center").text(function (result) {
                return result.attributes.Description;
            });
            var cat = tbody.filter(function (result) {
                // Filter on attribute having Category attribute value
                return result.attributes.Category;
            }).append("tr");
            cat.append("th").text("Category");
            cat.append("td").text(function (result) {
                return result.attributes.Category;
            });
            var lev = tbody.filter(function (result) {
                // Filter on attribute having Level attribute value
                return result.attributes.Level;
            }).append("tr");
            lev.append("th").text("Level");
            lev.append("td").text(function (result) {
                return result.attributes.Level;
            });
            var cost1 = tbody.filter(function (result) {
                // Filter on attribute having Cost attribute value
                return result.attributes.Cost;
            }).append("tr");
            cost1.append("th").text("Cost");
            cost1.append("td").text(function (result) {
                return result.attributes.Cost;
            });
        }
    },
    
    "Sustainably cost efficient": {
        "returnAttributes": ["Name","Description","Category","Level","Cost"],
        "constraintAttribute": "Name",
        "displayResults": function (pResultElmt) {
            var tbody = pResultElmt.append("table").attr("class", "json-object").append("tbody");
            var name1 = tbody.append("tr");
            //name1.append("th").text("Name");
            name1.append("th").attr("colspan",2).text(function (result) {
                return result.attributes.Name;
            });
    
            var desc = tbody.filter(function (result) {
                // Filter on attribute having Description attribute value
                return result.attributes.Description;
            }).append("tr");
            //desc.append("th").text("Description");
            desc.append("td").attr("colspan",2).style("text-align","center").text(function (result) {
                return result.attributes.Description;
            });
            var cat = tbody.filter(function (result) {
                // Filter on attribute having Category attribute value
                return result.attributes.Category;
            }).append("tr");
            cat.append("th").text("Category");
            cat.append("td").text(function (result) {
                return result.attributes.Category;
            });
            var lev = tbody.filter(function (result) {
                // Filter on attribute having Level attribute value
                return result.attributes.Level;
            }).append("tr");
            lev.append("th").text("Level");
            lev.append("td").text(function (result) {
                return result.attributes.Level;
            });
            var cost1 = tbody.filter(function (result) {
                // Filter on attribute having Cost attribute value
                return result.attributes.Cost;
            }).append("tr");
            cost1.append("th").text("Cost");
            cost1.append("td").text(function (result) {
                return result.attributes.Cost;
            });
        }
    },
    
    "Progress on Renewable energy": {
        "returnAttributes": ["Name","Description","Category","Level","Cost"],
        "constraintAttribute": "Name",
        "displayResults": function (pResultElmt) {
            var tbody = pResultElmt.append("table").attr("class", "json-object").append("tbody");
            var name1 = tbody.append("tr");
            //name1.append("th").text("Name");
            name1.append("th").attr("colspan",2).text(function (result) {
                return result.attributes.Name;
            });
    
            var desc = tbody.filter(function (result) {
                // Filter on attribute having Description attribute value
                return result.attributes.Description;
            }).append("tr");
            //desc.append("th").text("Description");
            desc.append("td").attr("colspan",2).style("text-align","center").text(function (result) {
                return result.attributes.Description;
            });
            var cat = tbody.filter(function (result) {
                // Filter on attribute having Category attribute value
                return result.attributes.Category;
            }).append("tr");
            cat.append("th").text("Category");
            cat.append("td").text(function (result) {
                return result.attributes.Category;
            });
            var lev = tbody.filter(function (result) {
                // Filter on attribute having Level attribute value
                return result.attributes.Level;
            }).append("tr");
            lev.append("th").text("Level");
            lev.append("td").text(function (result) {
                return result.attributes.Level;
            });
            var cost1 = tbody.filter(function (result) {
                // Filter on attribute having Cost attribute value
                return result.attributes.Cost;
            }).append("tr");
            cost1.append("th").text("Cost");
            cost1.append("td").text(function (result) {
                return result.attributes.Cost;
            });
        }
    },
    
    "Notify customer to improve customer experience": {
        "returnAttributes": ["Name","Description","Category","Level","Cost"],
        "constraintAttribute": "Name",
        "displayResults": function (pResultElmt) {
            var tbody = pResultElmt.append("table").attr("class", "json-object").append("tbody");
    
            var name1 = tbody.append("tr");
            //name1.append("th").text("Name");
            name1.append("th").attr("colspan",2).text(function (result) {
               return result.attributes.Name;
            });   
    
            var desc = tbody.filter(function (result) {
                // Filter on attribute with Description attribute value
                return result.attributes.Description;
            }).append("tr");
            //desc.append("th").text("Description");
            desc.append("td").attr("colspan",2).style("text-align","center").text(function (result) {
                return result.attributes.Description;
            });
    
            var cat = tbody.filter(function (result) {
                // Filter on attribute having Category attribute value
                return result.attributes.Category;
            }).append("tr");
            cat.append("th").text("Category");
            cat.append("td").text(function (result) {
                return result.attributes.Category;
            });
    
            var lev = tbody.filter(function (result) {
                // Filter on attribute having Level attribute value
                return result.attributes.Level;
            }).append("tr");
            lev.append("th").text("Level");
            lev.append("td").text(function (result) {
                return result.attributes.Level;
            });
    
            var cost1 = tbody.filter(function (result) {
                // Filter on attribute having Cost attribute value
                return result.attributes.Cost;
            }).append("tr");
            cost1.append("th").text("Cost");
            cost1.append("td").text(function (result) {
                return result.attributes.Cost;
            });
    
        }
    },
    
    "Notify customer of outages": {
        "returnAttributes": ["Name","Description","Category","Level","Cost"],
        "constraintAttribute": "Name",
        "displayResults": function (pResultElmt) {
            var tbody = pResultElmt.append("table").attr("class", "json-object").append("tbody");
            var name1 = tbody.append("tr");
            //name1.append("th").text("Name");
            name1.append("th").attr("colspan",2).text(function (result) {
                return result.attributes.Name;
            });
    
            var desc = tbody.filter(function (result) {
                // Filter on attribute having Description attribute value
                return result.attributes.Description;
            }).append("tr");
            //desc.append("th").text("Description");
            desc.append("td").attr("colspan",2).style("text-align","center").text(function (result) {
                return result.attributes.Description;
            });
            var cat = tbody.filter(function (result) {
                // Filter on attribute having Category attribute value
                return result.attributes.Category;
            }).append("tr");
            cat.append("th").text("Category");
            cat.append("td").text(function (result) {
                return result.attributes.Category;
            });
            var lev = tbody.filter(function (result) {
                // Filter on attribute having Level attribute value
                return result.attributes.Level;
            }).append("tr");
            lev.append("th").text("Level");
            lev.append("td").text(function (result) {
                return result.attributes.Level;
            });
            var cost1 = tbody.filter(function (result) {
                // Filter on attribute having Cost attribute value
                return result.attributes.Cost;
            }).append("tr");
            cost1.append("th").text("Cost");
            cost1.append("td").text(function (result) {
                return result.attributes.Cost;
            });
        }
    },
    
    "Vegetation data": {
        "returnAttributes": ["Name","Description","Category","Level","Cost"],
        "constraintAttribute": "Name",
        "displayResults": function (pResultElmt) {
            var tbody = pResultElmt.append("table").attr("class", "json-object").append("tbody");
            var name1 = tbody.append("tr");
            //name1.append("th").text("Name");
            name1.append("th").attr("colspan",2).text(function (result) {
                return result.attributes.Name;
            });
    
            var desc = tbody.filter(function (result) {
                // Filter on attribute having Description attribute value
                return result.attributes.Description;
            }).append("tr");
            //desc.append("th").text("Description");
            desc.append("td").attr("colspan",2).style("text-align","center").text(function (result) {
                return result.attributes.Description;
            });
            var cat = tbody.filter(function (result) {
                // Filter on attribute having Category attribute value
                return result.attributes.Category;
            }).append("tr");
            cat.append("th").text("Category");
            cat.append("td").text(function (result) {
                return result.attributes.Category;
            });
            var lev = tbody.filter(function (result) {
                // Filter on attribute having Level attribute value
                return result.attributes.Level;
            }).append("tr");
            lev.append("th").text("Level");
            lev.append("td").text(function (result) {
                return result.attributes.Level;
            });
            var cost1 = tbody.filter(function (result) {
                // Filter on attribute having Cost attribute value
                return result.attributes.Cost;
            }).append("tr");
            cost1.append("th").text("Cost");
            cost1.append("td").text(function (result) {
                return result.attributes.Cost;
            });
        }
    },
    
    "Notify the customer when there is a health and safety risk  2": {
        "returnAttributes": ["Name","Description","Category","Level","Cost"],
        "constraintAttribute": "Name",
        "displayResults": function (pResultElmt) {
            var tbody = pResultElmt.append("table").attr("class", "json-object").append("tbody");
            var name1 = tbody.append("tr");
            //name1.append("th").text("Name");
            name1.append("th").attr("colspan",2).text(function (result) {
                return result.attributes.Name;
            });
    
            var desc = tbody.filter(function (result) {
                // Filter on attribute having Description attribute value
                return result.attributes.Description;
            }).append("tr");
            //desc.append("th").text("Description");
            desc.append("td").attr("colspan",2).style("text-align","center").text(function (result) {
                return result.attributes.Description;
            });
            var cat = tbody.filter(function (result) {
                // Filter on attribute having Category attribute value
                return result.attributes.Category;
            }).append("tr");
            cat.append("th").text("Category");
            cat.append("td").text(function (result) {
                return result.attributes.Category;
            });
            var lev = tbody.filter(function (result) {
                // Filter on attribute having Level attribute value
                return result.attributes.Level;
            }).append("tr");
            lev.append("th").text("Level");
            lev.append("td").text(function (result) {
                return result.attributes.Level;
            });
            var cost1 = tbody.filter(function (result) {
                // Filter on attribute having Cost attribute value
                return result.attributes.Cost;
            }).append("tr");
            cost1.append("th").text("Cost");
            cost1.append("td").text(function (result) {
                return result.attributes.Cost;
            });
        }
    },
    
    "Perform Predictive Fault analysis to model planning of resource to fix fault": {
        "returnAttributes": ["Name","Description","Category","Level","Cost"],
        "constraintAttribute": "Name",
        "displayResults": function (pResultElmt) {
            var tbody = pResultElmt.append("table").attr("class", "json-object").append("tbody");
            var name1 = tbody.append("tr");
            //name1.append("th").text("Name");
            name1.append("th").attr("colspan",2).text(function (result) {
                return result.attributes.Name;
            });
    
            var desc = tbody.filter(function (result) {
                // Filter on attribute having Description attribute value
                return result.attributes.Description;
            }).append("tr");
            //desc.append("th").text("Description");
            desc.append("td").attr("colspan",2).style("text-align","center").text(function (result) {
                return result.attributes.Description;
            });
            var cat = tbody.filter(function (result) {
                // Filter on attribute having Category attribute value
                return result.attributes.Category;
            }).append("tr");
            cat.append("th").text("Category");
            cat.append("td").text(function (result) {
                return result.attributes.Category;
            });
            var lev = tbody.filter(function (result) {
                // Filter on attribute having Level attribute value
                return result.attributes.Level;
            }).append("tr");
            lev.append("th").text("Level");
            lev.append("td").text(function (result) {
                return result.attributes.Level;
            });
            var cost1 = tbody.filter(function (result) {
                // Filter on attribute having Cost attribute value
                return result.attributes.Cost;
            }).append("tr");
            cost1.append("th").text("Cost");
            cost1.append("td").text(function (result) {
                return result.attributes.Cost;
            });
        }
    }
    
    }
    
    popoto.result.onTotalResultCount(function (count) {
        d3.select("#rescount").text(function (d) {
            return "" + count;}
                                   )
        });
    
    
        //popoto.queryviewer.QUERY_STARTER = "You have Clicked";
    //popoto.queryviewer.CHOOSE_LABEL = "Selected";
    
    popoto.tools.TOGGLE_TAXONOMY = true;
    popoto.graph.USE_FIT_TEXT = true;
    
    driver.verifyConnectivity().then(function () {
        // Start the generation using parameter as root label of the query.
        popoto.start("CEO Dashboard");
    }).catch(function (error) {
        document.getElementById("modal").style.display = "block";
        
        document.getElementById("error-content").innerText = error;
        console.error(error)
    })
    
    document.getElementById("myBtn").addEventListener("click", myFunction);
      function myFunction() {
          window.location.href = "neovis.html";
      }
    
    




            




 

