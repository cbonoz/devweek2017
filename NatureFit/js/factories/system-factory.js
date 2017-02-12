// Intended to provide all links and update functions
myApp.factory('SystemFactory', function($http, CatalogueFactory) {
	var factory = {};
    // Start data ready for sce in Start Controller
    var systemData = {};
    systemData.programs = {};
    systemData.hardware = {};
    systemData.publicCloud = {};
    systemData.publicCloud.saas = {};
    systemData.publicCloud.paas = {};
    systemData.publicCloud.iaas = {};
    systemData.privateCloud = {};
    systemData.services = {};
    // Raw data from csv file
    var csvData = CatalogueFactory.getCsvData();
    if(csvData) {
        // Use counter to track which row on csv file
        for(var i = 0; i < csvData.length; i++) {
            if(csvData[i][0] == "System") {
                // Product Breakdown Section
                if(csvData[i][2] == "P + S1") {
                    systemData.programs.ps1 = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "P + Sn") {
                    systemData.programs.psn = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "HW + S1") {
                    systemData.hardware.hws1 = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "HW + Sn") {
                    systemData.hardware.hwsn = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "SaaS Non-Metered") {
                    systemData.publicCloud.saas.nonMetered = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "SaaS Metered") {
                    systemData.publicCloud.saas.metered = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "PaaS Non-Metered") {
                    systemData.publicCloud.paas.nonMetered = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "PaaS Metered") {
                    systemData.publicCloud.paas.metered = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "IaaS Non-Metered") {
                    systemData.publicCloud.iaas.nonMetered = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "IaaS Metered") {
                    systemData.publicCloud.iaas.metered = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "IaaS Metered") {
                    systemData.publicCloud.iaas.metered = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "OMCS") {
                    systemData.privateCloud.omcs = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Partner Cloud") {
                    systemData.privateCloud.partnerCloud = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Advanced Customer Support (ACS)") {
                    systemData.services.acs = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Oracle Consulting") {
                    systemData.services.oracleConsulting = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Learning Credits") {
                    systemData.services.learningCredits = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Support Renewals") {
                    systemData.services.supportRenewals = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Linux Support / Oracle VM") {
                    systemData.services.linuxSupportOracleVM = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Oracle Consulting") {
                    systemData.services.oracleConsulting = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Business Process Services (BPS)") {
                    systemData.services.bps = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Other") {
                    systemData.services.other = CatalogueFactory.populateObject(csvData[i], i);
                } else if(csvData[i][2] == "Non-Oracle Products & Services") {
                    systemData.nonOracleProducts = CatalogueFactory.populateObject(csvData[i], i);
                }
            }
        }
    }
    factory.getSystemData = function() {
        return systemData;
    }
    return factory;
})