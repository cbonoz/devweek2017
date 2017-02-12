myApp.factory('SearchFactory', function($http, CatalogueFactory) {
	var factory = {};
	var catalogue = [];
	var returnCatalogue = [];
	var urlBank = [];
	var csvData = CatalogueFactory.getCsvData();
	// Push all documents into catalogue
	if(csvData) {
		for(var i = 0; i < csvData.length; i++) {
			var arr = CatalogueFactory.convertToSearchable(csvData[i], i);
			for(var j = 0; j < arr.length; j++) {
				if(catalogue.indexOf(arr[j]) == -1) {
					catalogue.push(arr[j]);
				}
			}
		}
	}
	// // Count documents once by checking the url in urlBank
	for(var i = 0; i < catalogue.length; i++) {
		var added = false;
		for(var j = 0; j < returnCatalogue.length; j++) {
			// Check if catalogue url is inside url bank. If so, check and only add new sections
			if(catalogue[i].url == returnCatalogue[j].url) {
				// if(returnCatalogue[j].stepSections.indexOf(catalogue[i].stepSections[0]) == -1 ) {
				// 	returnCatalogue[j].stepSections.push(catalogue[i].stepSections[0]);
				// }
				// Add all sections and filter w/ angular
				returnCatalogue[j].stepSections.push(catalogue[i].stepSections[0]);
				added = true;
			}
		}
		// Add catalogue item to show for first time
		if(!added) {
			urlBank.push(catalogue[i]);
			// console.log(catalogue[i]);
			returnCatalogue.push(catalogue[i]);
		}
	}

	// console.log(returnCatalogue);
	// Need to be array of objects
	factory.getCatalogue = function() {
		return returnCatalogue;
	}
	return factory;
})