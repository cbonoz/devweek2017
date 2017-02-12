// Intended to provide all links and update functions
myApp.factory('ContractsFactory', function($http, CatalogueFactory) {
	var factory = {};
    // Start data ready for sce in Start Controller
    var contractsData = {};
    contractsData.programType = {};
    contractsData.supplier = {};
    contractsData.contractGeneration = {};
    // Raw data from csv file
    var csvData = CatalogueFactory.getCsvData();
    if(csvData) {
        // Use counter to track which row on csv file
        for(var i = 0; i < csvData.length; i++) {
            if(csvData[i][0] == "Contracts") {
                if(csvData[i][2] == "Managed Program") {
                    contractsData.programType.managedProgram = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Arranged Program") {
                    contractsData.programType.arrangedProgram = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Direct (Oracle as Supplier)") {
                    contractsData.supplier.direct = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Indirect (Partner/Distributor/Reseller as Supplier)") {
                    contractsData.supplier.indirect = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][1] == "Credit Enhancements" && csvData[i][2] == "Yes") {
                    contractsData.creditEnhancements = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Manual") {
                    contractsData.contractGeneration.manual = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "DocGen") {
                    contractsData.contractGeneration.docgen = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][1] == "Contract Negotiation") {
                    contractsData.contractNegotiation = CatalogueFactory.populateObject(csvData[i], i);
                } 
            }
        }
    }
    factory.getContractsData = function() {
        return contractsData;
    }
    return factory;
})