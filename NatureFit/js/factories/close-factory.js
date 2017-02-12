// Intended to provide all links and update functions
myApp.factory('CloseFactory', function($http, CatalogueFactory) {
	var factory = {};
    // Start data ready for sce in Start Controller
    var closeData = {};
    // Raw data from csv file
    var csvData = CatalogueFactory.getCsvData();
    if(csvData) {
        // console.log(csvdata);
        // Use counter to track which row on csv file
        for(var i = 0; i < csvData.length; i++) {
            if(csvData[i][0] == "Close a Deal") {
                if(csvData[i][1] == "Pre-Close") {
                    closeData.preClose = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][1] == "Closing & Booking") {
                    closeData.closingBooking = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][1] == "After-Booking") {
                    closeData.afterBooking = CatalogueFactory.populateObject(csvData[i], i);
                }
            }
        }
    }
    factory.getCloseData = function() {
        return closeData;
    }
    return factory;
})