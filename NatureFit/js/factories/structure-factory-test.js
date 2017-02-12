// Intended to provide all links and update functions
myApp.factory('StructureFactory', function($http, CatalogueFactory) {
	var factory = {};
    // Start data ready for sce in Start Controller
    var structureData = {};
    structureData.basicPricing = {};
    structureData.paymentSolution = {};
    structureData.paymentSolution.eot = {};
    structureData.passThroughYes = {};
    structureData.midTerm = {};
    structureData.approvals = {};
    structureData.proposals = {};
    // Raw data from csv file
    var csvData = CatalogueFactory.getCsvData();
    if(csvData) {
        // console.log(csvdata);
        // Use counter to track which row on csv file
        for(var i = 0; i < csvData.length; i++) {
            if(csvData[i][0] == "Structure & Policies") {
                // Basic Pricing
                if(csvData[i][1] == "Basic Pricing") {
                    structureData.basicPricing = CatalogueFactory.populateObject(csvData[i], i);
                }
                // Structuring
                else if(csvData[i][2] == "Market-Rate Financing") {
                    structureData.paymentSolution.marketRateFinancing = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Incentive-Rate Financing") {
                    structureData.paymentSolution.incentiveRateFinancing = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Payment Plan") {
                    structureData.paymentSolution.paymentPlan = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Lease/Term") {
                    structureData.paymentSolution.leaseTerm = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Lease/Term, Purchase") {
                    structureData.paymentSolution.eot.purchase = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Lease/Term, Renew") {
                    structureData.paymentSolution.eot.renew = CatalogueFactory.populateObject(csvData[i], i);
                }  else if(csvData[i][2] == "Promotions") {
                    structureData.paymentSolution.promotions = CatalogueFactory.populateObject(csvData[i], i);
                }
                // Pass-Through & Periodic Funding
                else if(csvData[i][2] == "Yes, Renewal Services") {
                    structureData.passThroughYes.renewalServices = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Yes, Cloud Services") {
                    structureData.passThroughYes.cloudServices = CatalogueFactory.populateObject(csvData[i], i);
                } 
                // Mid-term Upsell & Portfolio Management
                else if(csvData[i][2] == "Migration") {
                    structureData.midTerm.migration = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Tech Refresh") {
                    structureData.midTerm.techRefresh = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Refinance/Roll-Over") {
                    structureData.midTerm.refinanceRollOver = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Sale Lease-Back") {
                    structureData.midTerm.saleLeaseBack = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Trade In") {
                    structureData.midTerm.tradeIn = CatalogueFactory.populateObject(csvData[i], i);
                } 
                // Cross-Border
                else if(csvData[i][1] == "Cross-Border" && csvData[i][2] == "Yes") {
                    structureData.crossBorderYes = CatalogueFactory.populateObject(csvData[i], i);
                }
                // Approval
                else if(csvData[i][1] == "Approvals") {
                    structureData.approvals = CatalogueFactory.populateObject(csvData[i], i);
                }
                // Proposals
                else if(csvData[i][1] == "Proposals" && csvData[i][2] == "Yes") {
                    structureData.proposalYes = CatalogueFactory.populateObject(csvData[i], i);
                }
            }
        }
    }
    factory.getStructureData = function() {
        return structureData;
    }
    return factory;
})