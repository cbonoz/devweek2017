// Intended to provide all links and update functions
myApp.factory('StartFactory', function($http, CatalogueFactory) {
	var factory = {};
	// Start data ready for sce in Start Controller
	var startData = {};
	// Raw data from csv file
    var csvData = CatalogueFactory.getCsvData();
    if(csvData) {
        // Use counter to track which row on csv file
        for(var i = 0; i < csvData.length; i++) {
        	if(csvData[i][0] == "Start a Deal") {
        		 // Obligor Analysis Section
	            if(csvData[i][2] == "Commercial Entity") {
	                startData.commercialEntity = CatalogueFactory.populateObject(csvData[i], i);
	            } else if(csvData[i][2] == "Government") {
	                startData.government = CatalogueFactory.populateObject(csvData[i], i);
	            } else if(csvData[i][2] == "Partner Acting as Service Provider/Outsourcer") {
	                startData.partnerServiceProvider = CatalogueFactory.populateObject(csvData[i], i);
	            } else if(csvData[i][2] == "Independent Software Vendor (ISV/OEM)") {
	                startData.isv = CatalogueFactory.populateObject(csvData[i], i);
	            } else if(csvData[i][2] == "Reseller Financing") {
	                startData.resellerFinancing = CatalogueFactory.populateObject(csvData[i], i);
	            }
	            // OFD Customer Financial Information Review Section
	            else if(csvData[i][2] == "Publicly Listed Entity") {
	                startData.publiclyListedEntity = CatalogueFactory.populateObject(csvData[i], i);
	            } else if(csvData[i][2] == "Privately Listed Entity") {
	                startData.privatelyListedEntity = CatalogueFactory.populateObject(csvData[i], i);
	            } else if(csvData[i][2] == "National/Federal") {
	                startData.nationalFederal = CatalogueFactory.populateObject(csvData[i], i);
	            } else if(csvData[i][2] == "Local") {
	                startData.local = CatalogueFactory.populateObject(csvData[i], i);
	            } else if(csvData[i][2] == "State/Provincial") {
	                startData.stateProvincial = CatalogueFactory.populateObject(csvData[i], i);
	            } else if(csvData[i][2] == "Quasi-Government") {
	                startData.quasiGovernment = CatalogueFactory.populateObject(csvData[i], i);
	            } 
	            // OFD Customer Financial Footprint
	            else if(csvData[i][1] == "OFD Customer Financial Footprint") {
	            	startData.customerFinancialFootprint = CatalogueFactory.populateObject(csvData[i], i);
	            }
	            // Start a Deal
	            else if(csvData[i][1] == "Start a Deal") {
	                startData.startADeal = CatalogueFactory.populateObject(csvData[i], i);
	            }
        	}
        }
    }
    factory.getStartData = function() {
        return startData;
    }
	return factory;
})