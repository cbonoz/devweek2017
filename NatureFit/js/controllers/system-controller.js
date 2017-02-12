myApp.controller('SystemController', function($scope, $sce, MainFactory, SystemFactory) {
    // Initiate Categories
    $scope.programs = {};
    $scope.hardware = {};
    $scope.publicCloud = {};
    $scope.publicCloud.saas = {};
    $scope.publicCloud.paas = {};
    $scope.publicCloud.iaas = {};
    $scope.privateCloud = {};
    $scope.services = {};

    var systemData = SystemFactory.getSystemData();
    // Variables that appear on multiple pages
    var sharedVariables = MainFactory.getSharedVariables();

    // Persist checkbox when switching pages
    if(sharedVariables['programs']) {
        if(sharedVariables.programs.ps1) {
            $scope.programs.ps1 = true;
        }
        if (sharedVariables.programs.psn) {
            $scope.programs.psn = true;
        }
    }
    if(sharedVariables['hardware']) {
        if(sharedVariables.hardware.hws1) {
            $scope.hardware.hws1 = true;
        }  
        if(sharedVariables.hardware.hwsn) {
            $scope.hardware.hwsn = true;
        }  
    }
    if(sharedVariables['publicCloud']) {
        if(sharedVariables.publicCloud.saasNonMetered) {
            $scope.publicCloud.saasNonMetered = true;
        }
        if(sharedVariables.publicCloud.saasMetered) {
            $scope.publicCloud.saasMetered = true;
        }
        if(sharedVariables.publicCloud.paasNonMetered) {
            $scope.publicCloud.paasNonMetered = true;
        }
        if(sharedVariables.publicCloud.paasMetered) {
            $scope.publicCloud.paasMetered = true;
        }
        if(sharedVariables.publicCloud.iaasNonMetered) {
            $scope.publicCloud.iaasNonMetered = true;
        }
        if(sharedVariables.publicCloud.iaasMetered) {
            $scope.publicCloud.iaasMetered = true;
        }
    }
    if(sharedVariables['privateCloud']) {
        if(sharedVariables.privateCloud.omcs) {
            $scope.privateCloud.omcs = true;
        }
        if(sharedVariables.privateCloud.partnerCloud) {
            $scope.privateCloud.partnerCloud = true;
        }
    }
    if(sharedVariables['services']) {
        if(sharedVariables.services.acs) {
            $scope.services.acs = true;
        }
        if(sharedVariables.services.oracleConsulting) {
            $scope.services.oracleConsulting = true;
        }
        if(sharedVariables.services.learningCredits) {
            $scope.services.learningCredits = true;
        }
        if(sharedVariables.services.supportRenewals) {
            $scope.services.supportRenewals = true;
        }
        if(sharedVariables.services.linuxSupportOracleVM) {
            $scope.services.linuxSupportOracleVM = true;
        }
        if(sharedVariables.services.bps) {
            $scope.services.bps = true;
        }
        if(sharedVariables.services.other) {
            $scope.services.other = true;
        }
    }
    if(sharedVariables['nonOracleProducts']) {
        $scope.nonOracleProducts = true;
    }

    // End Persisting checkboxes


    // retrieve singular definition for readability on view
    $scope.definition = MainFactory.getDefinitions();
    // custom directive to display possible 3 boxes
    $scope.myRecords = [
        {
            title: 'Tips',
            clas: 'tips-box',
            // img: './img/Tips.png'
            img: '/site/fin/ofd/internal/sales/cnt2586320.png'
        }, 
        {
            title: 'Toolkit',
            clas: 'toolkit-box',
            // img: './img/Toolkit.png'
            img: '/site/fin/ofd/internal/sales/cnt2586321.png'
        }, 
        {
            title: 'Know More',
            clas: 'know-more-box',
            // img: './img/KnowMore.png'
            img: '/site/fin/ofd/internal/sales/cnt2586322.png'
        }
    ];
    $scope.myRecords[0]['result'] = [];

    function convertToSce(data) {
        // To avoid TypeError for null resultboxes
        if(!data) {
            return data;
        }
        var result = [];
        for(var i = 0; i < data.length; i++) {
            result.push({html: $sce.trustAsHtml(data[i])})
        }
        return result;
    }

    $scope.$watchGroup(["programs.ps1", "programs.psn", "hardware.hws1", "hardware.hwsn", "publicCloud.saasNonMetered", "publicCloud.saasMetered", "publicCloud.paasNonMetered", "publicCloud.paasMetered", "publicCloud.iaasNonMetered", "publicCloud.iaasMetered", "privateCloud.omcs", "privateCloud.partnerCloud", "services.acs", "services.oracleConsulting", "services.learningCredits", "services.supportRenewals", "services.linuxSupportOracleVM", "services.bps", "services.other", "nonOracleProducts"], function() {

        MainFactory.updatePrograms($scope.programs);
        MainFactory.updateHardware($scope.hardware);
        MainFactory.updatePublicCloud($scope.publicCloud);
        MainFactory.updatePrivateCloud($scope.privateCloud);
        MainFactory.updateServices($scope.services);
        MainFactory.updateNonOracleProducts($scope.nonOracleProducts);

        if($scope.programs.ps1) {
            $scope.myRecords[0]['ps1'] = convertToSce(systemData.programs.ps1.tips);
            $scope.myRecords[1]['ps1'] = convertToSce(systemData.programs.ps1.toolkit);
            $scope.myRecords[2]['ps1'] = convertToSce(systemData.programs.ps1.knowmore);
        } else if(!$scope.programs.ps1) {
            delete $scope.myRecords[0]['ps1'];
            delete $scope.myRecords[1]['ps1'];
            delete $scope.myRecords[2]['ps1'];
        }
        if($scope.programs.psn) {
            $scope.myRecords[0]['psn'] = convertToSce(systemData.programs.psn.tips);
            $scope.myRecords[1]['psn'] = convertToSce(systemData.programs.psn.toolkit);
            $scope.myRecords[2]['psn'] = convertToSce(systemData.programs.psn.knowmore);
        } else if(!$scope.programs.psn) {
            delete $scope.myRecords[0]['psn'];
            delete $scope.myRecords[1]['psn'];
            delete $scope.myRecords[2]['psn'];
        }
        if($scope.hardware.hws1) {
            $scope.myRecords[0]['hws1'] = convertToSce(systemData.hardware.hws1.tips);
            $scope.myRecords[1]['hws1'] = convertToSce(systemData.hardware.hws1.toolkit);
            $scope.myRecords[2]['hws1'] = convertToSce(systemData.hardware.hws1.knowmore);
        } else if(!$scope.hardware.hws1) {
            delete $scope.myRecords[0]['hws1'];
            delete $scope.myRecords[1]['hws1'];
            delete $scope.myRecords[2]['hws1'];
        }
        if($scope.hardware.hwsn) {
            $scope.myRecords[0]['hwsn'] = convertToSce(systemData.hardware.hwsn.tips);
            $scope.myRecords[1]['hwsn'] = convertToSce(systemData.hardware.hwsn.toolkit);
            $scope.myRecords[2]['hwsn'] = convertToSce(systemData.hardware.hwsn.knowmore);
        } else if(!$scope.hardware.hwsn) {
            delete $scope.myRecords[0]['hwsn'];
            delete $scope.myRecords[1]['hwsn'];
            delete $scope.myRecords[2]['hwsn'];
        }
        if($scope.publicCloud.saasNonMetered) {
            $scope.myRecords[0]['saasNonMetered'] = convertToSce(systemData.publicCloud.saas.nonMetered.tips);
            $scope.myRecords[1]['saasNonMetered'] = convertToSce(systemData.publicCloud.saas.nonMetered.toolkit);
            $scope.myRecords[2]['saasNonMetered'] = convertToSce(systemData.publicCloud.saas.nonMetered.knowmore);
        } else if(!$scope.publicCloud.saasNonMetered) {
            delete $scope.myRecords[0]['saasNonMetered'];
            delete $scope.myRecords[1]['saasNonMetered'];
            delete $scope.myRecords[2]['saasNonMetered'];
        }
        if($scope.publicCloud.saasMetered) {
            $scope.myRecords[0]['saasMetered'] = convertToSce(systemData.publicCloud.saas.metered.tips);
            $scope.myRecords[1]['saasMetered'] = convertToSce(systemData.publicCloud.saas.metered.toolkit);
            $scope.myRecords[2]['saasMetered'] = convertToSce(systemData.publicCloud.saas.metered.knowmore);
        } else if(!$scope.publicCloud.saasMetered) {
            delete $scope.myRecords[0]['saasMetered'];
            delete $scope.myRecords[1]['saasMetered'];
            delete $scope.myRecords[2]['saasMetered'];
        }
        if($scope.publicCloud.paasNonMetered) {
            $scope.myRecords[0]['paasNonMetered'] = convertToSce(systemData.publicCloud.paas.nonMetered.tips);
            $scope.myRecords[1]['paasNonMetered'] = convertToSce(systemData.publicCloud.paas.nonMetered.toolkit);
            $scope.myRecords[2]['paasNonMetered'] = convertToSce(systemData.publicCloud.paas.nonMetered.knowmore);
        } else if(!$scope.publicCloud.paasNonMetered) {
            delete $scope.myRecords[0]['paasNonMetered'];
            delete $scope.myRecords[1]['paasNonMetered'];
            delete $scope.myRecords[2]['paasNonMetered'];
        }
        if($scope.publicCloud.paasMetered) {
            $scope.myRecords[0]['paasMetered'] = convertToSce(systemData.publicCloud.paas.metered.tips);
            $scope.myRecords[1]['paasMetered'] = convertToSce(systemData.publicCloud.paas.metered.toolkit);
            $scope.myRecords[2]['paasMetered'] = convertToSce(systemData.publicCloud.paas.metered.knowmore);
        } else if(!$scope.publicCloud.paasMetered) {
            delete $scope.myRecords[0]['paasMetered'];
            delete $scope.myRecords[1]['paasMetered'];
            delete $scope.myRecords[2]['paasMetered'];
        }
        if($scope.publicCloud.iaasNonMetered) {
            $scope.myRecords[0]['iaasNonMetered'] = convertToSce(systemData.publicCloud.iaas.nonMetered.tips);
            $scope.myRecords[1]['iaasNonMetered'] = convertToSce(systemData.publicCloud.iaas.nonMetered.toolkit);
            $scope.myRecords[2]['iaasNonMetered'] = convertToSce(systemData.publicCloud.iaas.nonMetered.knowmore);
        } else if(!$scope.publicCloud.iaasNonMetered) {
            delete $scope.myRecords[0]['iaasNonMetered'];
            delete $scope.myRecords[1]['iaasNonMetered'];
            delete $scope.myRecords[2]['iaasNonMetered'];
        }
        if($scope.publicCloud.iaasMetered) {
            $scope.myRecords[0]['iaasMetered'] = convertToSce(systemData.publicCloud.iaas.metered.tips);
            $scope.myRecords[1]['iaasMetered'] = convertToSce(systemData.publicCloud.iaas.metered.toolkit);
            $scope.myRecords[2]['iaasMetered'] = convertToSce(systemData.publicCloud.iaas.metered.knowmore);
        } else if(!$scope.publicCloud.iaasMetered) {
            delete $scope.myRecords[0]['iaasMetered'];
            delete $scope.myRecords[1]['iaasMetered'];
            delete $scope.myRecords[2]['iaasMetered'];
        }
        if($scope.publicCloud.iaasMetered) {
            $scope.myRecords[0]['iaasMetered'] = convertToSce(systemData.publicCloud.iaas.metered.tips);
            $scope.myRecords[1]['iaasMetered'] = convertToSce(systemData.publicCloud.iaas.metered.toolkit);
            $scope.myRecords[2]['iaasMetered'] = convertToSce(systemData.publicCloud.iaas.metered.knowmore);
        } else if(!$scope.publicCloud.iaasMetered) {
            delete $scope.myRecords[0]['iaasMetered'];
            delete $scope.myRecords[1]['iaasMetered'];
            delete $scope.myRecords[2]['iaasMetered'];
        }
        if($scope.privateCloud.omcs) {
            $scope.myRecords[0]['omcs'] = convertToSce(systemData.privateCloud.omcs.tips);
            $scope.myRecords[1]['omcs'] = convertToSce(systemData.privateCloud.omcs.toolkit);
            $scope.myRecords[2]['omcs'] = convertToSce(systemData.privateCloud.omcs.knowmore);
        } else if(!$scope.privateCloud.omcs) {
            delete $scope.myRecords[0]['omcs'];
            delete $scope.myRecords[1]['omcs'];
            delete $scope.myRecords[2]['omcs'];
        }
        if($scope.privateCloud.partnerCloud) {
            $scope.myRecords[0]['partnerCloud'] = convertToSce(systemData.privateCloud.partnerCloud.tips);
            $scope.myRecords[1]['partnerCloud'] = convertToSce(systemData.privateCloud.partnerCloud.toolkit);
            $scope.myRecords[2]['partnerCloud'] = convertToSce(systemData.privateCloud.partnerCloud.knowmore);
        } else if(!$scope.privateCloud.partnerCloud) {
            delete $scope.myRecords[0]['partnerCloud'];
            delete $scope.myRecords[1]['partnerCloud'];
            delete $scope.myRecords[2]['partnerCloud'];
        }
        if($scope.services.acs) {
            $scope.myRecords[0]['acs'] = convertToSce(systemData.services.acs.tips);
            $scope.myRecords[1]['acs'] = convertToSce(systemData.services.acs.toolkit);
            $scope.myRecords[2]['acs'] = convertToSce(systemData.services.acs.knowmore);
        } else if(!$scope.services.acs) {
            delete $scope.myRecords[0]['acs'];
            delete $scope.myRecords[1]['acs'];
            delete $scope.myRecords[2]['acs'];
        }
        if($scope.services.oracleConsulting) {
            $scope.myRecords[0]['oracleConsulting'] = convertToSce(systemData.services.oracleConsulting.tips);
            $scope.myRecords[1]['oracleConsulting'] = convertToSce(systemData.services.oracleConsulting.toolkit);
            $scope.myRecords[2]['oracleConsulting'] = convertToSce(systemData.services.oracleConsulting.knowmore);
        } else if(!$scope.services.oracleConsulting) {
            delete $scope.myRecords[0]['oracleConsulting'];
            delete $scope.myRecords[1]['oracleConsulting'];
            delete $scope.myRecords[2]['oracleConsulting'];
        }
        if($scope.services.learningCredits) {
            $scope.myRecords[0]['learningCredits'] = convertToSce(systemData.services.learningCredits.tips);
            $scope.myRecords[1]['learningCredits'] = convertToSce(systemData.services.learningCredits.toolkit);
            $scope.myRecords[2]['learningCredits'] = convertToSce(systemData.services.learningCredits.knowmore);
        } else if(!$scope.services.learningCredits) {
            delete $scope.myRecords[0]['learningCredits'];
            delete $scope.myRecords[1]['learningCredits'];
            delete $scope.myRecords[2]['learningCredits'];
        }
        if($scope.services.supportRenewals) {
            $scope.myRecords[0]['supportRenewals'] = convertToSce(systemData.services.supportRenewals.tips);
            $scope.myRecords[1]['supportRenewals'] = convertToSce(systemData.services.supportRenewals.toolkit);
            $scope.myRecords[2]['supportRenewals'] = convertToSce(systemData.services.supportRenewals.knowmore);
        } else if(!$scope.services.supportRenewals) {
            delete $scope.myRecords[0]['supportRenewals'];
            delete $scope.myRecords[1]['supportRenewals'];
            delete $scope.myRecords[2]['supportRenewals'];
        }
        if($scope.services.linuxSupportOracleVM) {
            $scope.myRecords[0]['linuxSupportOracleVM'] = convertToSce(systemData.services.linuxSupportOracleVM.tips);
            $scope.myRecords[1]['linuxSupportOracleVM'] = convertToSce(systemData.services.linuxSupportOracleVM.toolkit);
            $scope.myRecords[2]['linuxSupportOracleVM'] = convertToSce(systemData.services.linuxSupportOracleVM.knowmore);
        } else if(!$scope.services.linuxSupportOracleVM) {
            delete $scope.myRecords[0]['linuxSupportOracleVM'];
            delete $scope.myRecords[1]['linuxSupportOracleVM'];
            delete $scope.myRecords[2]['linuxSupportOracleVM'];
        }
        if($scope.services.bps) {
            $scope.myRecords[0]['bps'] = convertToSce(systemData.services.bps.tips);
            $scope.myRecords[1]['bps'] = convertToSce(systemData.services.bps.toolkit);
            $scope.myRecords[2]['bps'] = convertToSce(systemData.services.bps.knowmore);
        } else if(!$scope.services.bps) {
            delete $scope.myRecords[0]['bps'];
            delete $scope.myRecords[1]['bps'];
            delete $scope.myRecords[2]['bps'];
        }
        if($scope.services.other) {
            $scope.myRecords[0]['other'] = convertToSce(systemData.services.other.tips);
            $scope.myRecords[1]['other'] = convertToSce(systemData.services.other.toolkit);
            $scope.myRecords[2]['other'] = convertToSce(systemData.services.other.knowmore);
        } else if(!$scope.services.other) {
            delete $scope.myRecords[0]['other'];
            delete $scope.myRecords[1]['other'];
            delete $scope.myRecords[2]['other'];
        }
        if($scope.nonOracleProducts) {
            $scope.myRecords[0]['nonOracleProducts'] = convertToSce(systemData.nonOracleProducts.tips);
            $scope.myRecords[1]['nonOracleProducts'] = convertToSce(systemData.nonOracleProducts.toolkit);
            $scope.myRecords[2]['nonOracleProducts'] = convertToSce(systemData.nonOracleProducts.knowmore);
        } else if(!$scope.nonOracleProducts) {
            delete $scope.myRecords[0]['nonOracleProducts'];
            delete $scope.myRecords[1]['nonOracleProducts'];
            delete $scope.myRecords[2]['nonOracleProducts'];
        }
    });

    $scope.updateHardware = function() {
        MainFactory.updateHardware($scope.hardware);
    }
    $scope.updatePublicCloud = function() {
        MainFactory.updatePublicCloud($scope.publicCloud);
    }
    $scope.updatePrivateCloud = function() {
        MainFactory.updatePrivateCloud($scope.privateCloud);
    }
    $scope.updateServices = function() {
        MainFactory.updateServices($scope.services);
    }
    $scope.updateNonOracleProducts = function() {
        MainFactory.updateNonOracleProducts($scope.nonOracleProducts);
    }

    $scope.updateSaaS = function() {
        if($scope.saasMetered && $scope.saasNonMetered) {
            $scope.myRecords[0]['saas'] =[{
                html: $sce.trustAsHtml('Tips for SaaS Non-Metered')
            }, {
                html: $sce.trustAsHtml('Tips for SaaS Metered')
            }];
            $scope.myRecords[1]['saas'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
        } else if ($scope.saasMetered && !$scope.saasNonMetered) {
            $scope.myRecords[0]['saas'] =  [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
        } else if(!$scope.saasMetered && $scope.saasNonMetered) {
             $scope.myRecords[0]['saas'] =  [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
        } else {
            delete $scope.myRecords[0]['saas'];
        }
    }
});