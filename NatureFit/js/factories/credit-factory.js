// Intended to provide all links and update functions
myApp.factory('CreditFactory', function($http, CatalogueFactory) {
	var factory = {};
    // Start data ready for sce in Start Controller
    var creditData = {};
    creditData.customerObligor = {};
    creditData.programType = {};
    // Raw data from csv file
    var csvData = CatalogueFactory.getCsvData();
    if(csvData) {
        // console.log(csvdata);
        // Use counter to track which row on csv file
        for(var i = 0; i < csvData.length; i++) {
            if(csvData[i][0] == "Credit") {
                // Pricing (Generic)
                if(csvData[i][2] == "Commercial Entity") {
                    creditData.customerObligor.commercialEntity = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Government") {
                    creditData.customerObligor.government = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Partner Acting as Service Provider/Outsourcer") {
                    creditData.customerObligor.partnerServiceProvider = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Independent Software Vendor (ISV/OEM)") {
                    creditData.customerObligor.isv = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Reseller Financing") {
                    creditData.customerObligor.resellerFinancing = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][1] == "Credit Analysis") {
                    creditData.creditAnalysis = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Managed Program") {
                    creditData.programType.managedProgram = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Arranged Program") {
                    creditData.programType.arrangedProgram = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][1] == "Credit Enhancements" && csvData[i][2] == "Yes") {
                    creditData.creditEnhancementsYes = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][1] == "Compliance") {
                    creditData.compliance = CatalogueFactory.populateObject(csvData[i], i);
                } 
            }
        }
    }
    factory.getCreditData = function() {
        // console.log(startData);
        return creditData;
    }
    return factory;
})