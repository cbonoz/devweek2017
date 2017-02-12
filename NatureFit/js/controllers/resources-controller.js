myApp.controller('ResourcesController', function($scope, $sce, MainFactory) {
    // Variables that appear on multiple pages
    var sharedVariables = MainFactory.getSharedVariables();
    $scope.customerObligor = sharedVariables.customerObligor;
    $scope.programType = sharedVariables.programType;

    // retrieve singular definition for readability on view
    $scope.definition = MainFactory.getDefinitions();
    // custom directive to display possible 3 boxes
    $scope.myRecords = [
        {
            title: 'Tips',
            clas: 'tips-box',
            img: './img/Tips.png',
        }, 
        {
            title: 'Toolkit',
            clas: 'toolkit-box',
            img: './img/Toolkit.png'
        }, 
        {
            title: 'Know More',
            clas: 'know-more-box',
            img: './img/KnowMore.png'
        }
    ];

    // 0: Tips, 1: Toolkit, 2: Know More

    // To update entity type on this page
    $scope.updateCustomerObligor = function(customerObligor) {
        MainFactory.updateCustomerObligor(customerObligor);
        if(customerObligor == "commercialEntity" ) {
            delete $scope.myRecords[0]['customerObligor'];
            $scope.myRecords[1]['customerObligor'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
            delete $scope.myRecords[2]['customerObligor'];
            $scope.entityTypes = [
            {value: "Publicly Listed Entity",
            definition: $scope.definition.publiclyListedEntity,
            id: "publiclyListedEntity"},
            {value: "Privately Owned Entity",
            definition: $scope.definition.privatelyOwnedEntity,
            id: "privatelyOwnedEntity"}
            ];
            // Credit. Will need to separate and rewrite function in Credit Controller
            // Tips
            $scope.myRecords[0]['creditCustomerObligor'] = [{
                html: $sce.trustAsHtml('Financial information publicly available'),
            }];
            // Toolkit
            $scope.myRecords[1]['creditCustomerObligor'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
        } else if (customerObligor == "government") {
            $scope.myRecords[0]['customerObligor'] = [{
                html: $sce.trustAsHtml("<span class='light-gray'>Under Construction</span>"),
            }];
            $scope.myRecords[1]['customerObligor'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
            delete $scope.myRecords[2]['customerObligor'];

            $scope.entityTypes = [
            {value: "National/Federal",
            definition: $scope.definition.nationalFederal},
            {value: "State/Provincial",
            definition: $scope.definition.stateProvincial},
            {value: "Local",
            definition: $scope.definition.local},
            {value: "Quasi-Government",
            definition: $scope.definition.quasiGovernment}
            ];

            // Credit
            // Tips
            $scope.myRecords[0]['creditCustomerObligor'] = [{
                html: $sce.trustAsHtml('Research financial information'),
            }];
            // Toolkit
            $scope.myRecords[1]['creditCustomerObligor'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
        } else if(customerObligor == "partner") {
            $scope.myRecords[0]['customerObligor'] = [{
                html: $sce.trustAsHtml('Partner Tip'),
            }];
            $scope.myRecords[1]['customerObligor'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
            $scope.myRecords[2]['customerObligor'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
            $scope.entityTypes = [
            {value: "Publicly Listed Entity",
            definition: $scope.definition.publiclyListedEntity,
            id: "publiclyListedEntity"},
            {value: "Privately Owned Entity",
            definition: $scope.definition.privatelyOwnedEntity,
            id: "privatelyOwnedEntity"}
            ];

            // Credit
            // Tips
            $scope.myRecords[0]['creditCustomerObligor'] = [{
                html: $sce.trustAsHtml('Financial information publicly available'),
            }];
            // Toolkit
            $scope.myRecords[1]['creditCustomerObligor'] = [{
                html: $sce.trustAsHtml("<a href='#'>Link 1</a>"),
            }];
        } else if(customerObligor == "independentSoftwareVendor") {
            $scope.myRecords[0]['customerObligor'] = [{
                html: $sce.trustAsHtml("<span class='light-gray'>Under Construction</span>"),
            }];
            $scope.myRecords[1]['customerObligor'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
            $scope.myRecords[2]['customerObligor'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
            $scope.entityTypes = [
            {value: "Publicly Listed Entity",
            definition: $scope.definition.publiclyListedEntity,
            id: "publiclyListedEntity"},
            {value: "Privately Owned Entity",
            definition: $scope.definition.privatelyOwnedEntity,
            id: "privatelyOwnedEntity"}
            ];

            // Credit
            // Tips
            $scope.myRecords[0]['creditCustomerObligor'] = [{
                html: $sce.trustAsHtml('Financial information publicly available'),
            }];
            // Toolkit
            $scope.myRecords[1]['creditCustomerObligor'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
        } else if(customerObligor == "resellerFinancing") {
            delete $scope.myRecords[0]['customerObligor'];
            delete $scope.myRecords[1]['customerObligor'];
            delete $scope.myRecords[2]['customerObligor'];
            $scope.entityTypes = [
            {value: "Publicly Listed Entity",
            definition: $scope.definition.publiclyListedEntity,
            id: "publiclyListedEntity"},
            {value: "Privately Owned Entity",
            definition: $scope.definition.privatelyOwnedEntity,
            id: "privatelyOwnedEntity"}
            ];

            // Credit
            // Tips
            $scope.myRecords[0]['creditCustomerObligor'] = [{
                html: $sce.trustAsHtml('Financial information publicly available'),
            }];
            // Toolkit
            $scope.myRecords[1]['creditCustomerObligor'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
        } else {
            delete $scope.myRecords[0]['customerObligor'];
            delete $scope.myRecords[1]['customerObligor'];
            delete $scope.myRecords[2]['customerObligor'];
            $scope.entityType = false;
        }
    }
    // To change Entity Types when changed on Credit page
    $scope.$watch('commercialEntity', function() {
        if($scope.customerObligor == "Commercial Entity") {
            $scope.entityTypes = [
            {value: "Publicly Listed Entity",
            definition: $scope.definition.publiclyListedEntity,
            id: "publiclyListedEntity"},
            {value: "Privately Owned Entity",
            definition: $scope.definition.privatelyOwnedEntity,
            id: "privatelyOwnedEntity"}
            ];
            $scope.myRecords[0]['customerObligor'] = [{
                html: $sce.trustAsHtml('Commercial Entity Tip'),
            }];
            $scope.myRecords[1]['customerObligor'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
            $scope.myRecords[2]['customerObligor'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
        } else if ($scope.customerObligor == "Government") {
            $scope.entityTypes = [
            {value: "National/Federal",
            definition: $scope.definition.nationalFederal},
            {value: "State/Provincial",
            definition: $scope.definition.stateProvincial},
            {value: "Local",
            definition: $scope.definition.local},
            {value: "Quasi-Government",
            definition: $scope.definition.quasiGovernment}
            ];
            $scope.myRecords[0]['customerObligor'] = [{
                html: $sce.trustAsHtml("<span class='light-gray'>Under Construction</span>"),
            }];
            $scope.myRecords[1]['customerObligor'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
            $scope.myRecords[2]['customerObligor'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
        } else if($scope.customerObligor == "Partner") {
            $scope.entityTypes = [
            {value: "Publicly Listed Entity",
            definition: $scope.definition.publiclyListedEntity,
            id: "publiclyListedEntity"},
            {value: "Privately Owned Entity",
            definition: $scope.definition.privatelyOwnedEntity,
            id: "privatelyOwnedEntity"}
            ];
            $scope.myRecords[0]['customerObligor'] = [{
                html: $sce.trustAsHtml('Partner Tip'),
            }];
            $scope.myRecords[1]['customerObligor'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
            $scope.myRecords[2]['customerObligor'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
        } else if($scope.customerObligor == "Independent Software Vendor") {
            $scope.entityTypes = [
            {value: "Publicly Listed Entity",
            definition: $scope.definition.publiclyListedEntity,
            id: "publiclyListedEntity"},
            {value: "Privately Owned Entity",
            definition: $scope.definition.privatelyOwnedEntity,
            id: "privatelyOwnedEntity"}
            ];
            $scope.myRecords[0]['customerObligor'] = [{
                html: $sce.trustAsHtml("<span class='light-gray'>Under Construction</span>"),
            }];
            $scope.myRecords[1]['customerObligor'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
            $scope.myRecords[2]['customerObligor'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
        } else if($scope.customerObligor == "Reseller Financing") {
            $scope.entityTypes = [
            {value: "Publicly Listed Entity",
            definition: $scope.definition.publiclyListedEntity,
            id: "publiclyListedEntity"},
            {value: "Privately Owned Entity",
            definition: $scope.definition.privatelyOwnedEntity,
            id: "privatelyOwnedEntity"}
            ];
            delete$scope.myRecords[0]['customerObligor'];
            delete$scope.myRecords[1]['customerObligor'];
            delete$scope.myRecords[2]['customerObligor'];
        } else {
            $scope.entityType = false;
        }
    })
    // Use watch to change answers that are tied in multiple ways. Such as results generated by different pages & the deal parameters
    $scope.$watch('customerObligor', function() {
        MainFactory.updateCustomerObligor($scope.customerObligor); 
    });

    // Oddly cannot toggle back and forth if already clicked on a radio button. Must fix!!!
    $scope.updateEntityType = function(entityType) {
    console.log(entityType);
        if(entityType == "Publicly Listed Entity") {
            $scope.myRecords[0]['entityType'] = [{
                html: $sce.trustAsHtml('Financial information publicly available')
            }];
        } else if(entityType == "Privately Owned Entity") {
            $scope.myRecords[0]['entityType'] = [{
                html: $sce.trustAsHtml('Research financial information')
            }];
        } else if(entityType == "National/Federal") {
            $scope.myRecords[0]['entityType'] = [{
                html: $sce.trustAsHtml('Financial information publicly available')
            }];
        } else if(entityType == "Local") {
            $scope.myRecords[0]['entityType'] = [{
                html: $sce.trustAsHtml('Financial information publicly available')
            }];
        } else if(entityType == "State/Provincial") {
            $scope.myRecords[0]['entityType'] = [{
                html: $sce.trustAsHtml('Financial information publicly available')
            }];
        } else if(entityType == "Quasi-Government") {
            $scope.myRecords[0]['entityType'] = [{
                html: $sce.trustAsHtml('Financial information publicly available')
            }];
        } else {

        }
    }

    $scope.$watch('programType', function() {
        MainFactory.updateProgramType($scope.programType);  
         if($scope.programType == "Managed Program") {
            $scope.myRecords[2]['creditProgramType'] = [{
                html: $sce.trustAsHtml("Submission - deal in <a href='#'>WebX</a>")
            }, {
                html: $sce.trustAsHtml("<a href='#'>Credit Approval Process</a>")
            }, {
                html: $sce.trustAsHtml("<a href='#'>Essential Use Certification</a>")
            }, {
                html: $sce.trustAsHtml("<a href='#'>Opinion of Counsel Letter</a>")
            }];

            // Contracts. Will need to create new function in contracts controller
            $scope.myRecords[1]['ofdProgramType'] = [{
                html: $sce.trustAsHtml("<a href='#'>OFD Contracts</a>")
            }, {
                html: $sce.trustAsHtml("<a href='#'>Tax Languages</a>")
            }, {
                html: $sce.trustAsHtml("<a href='#'>Partner Process</a>")
            }, {
                html: $sce.trustAsHtml("<a href='#'>Reseller Order Agreement</a>")
            }];
            $scope.myRecords[2]['ofdProgramType'] = [{
                html: $sce.trustAsHtml("<a href='#'>Business Bargain</a>")
            }, {
                html: $sce.trustAsHtml("<a href='#'>Description of OFD Contracts - Template Explanation</a>")
            }, {
                html: $sce.trustAsHtml("<a href='#'>Global Sales Guide to Partner Business</a>")
            }, {
                html: $sce.trustAsHtml("<a href='#'>GLobal Partner Deals and Payments</a>")
            }];
        } else if ($scope.programType == "Arranged Program") {
            $scope.myRecords[2]['creditProgramType'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];

            // Contracts
            $scope.myRecords[1]['ofdProgramType'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
            $scope.myRecords[2]['ofdProgramType'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
        } else {
            delete $scope.myRecords[2]['creditProgramType'];
            delete $scope.myRecords[2]['ofdProgramType'];
        }
    })
    $scope.$watch('paymentSolution', function() {
        if($scope.paymentSolution == "Lease/Term") {
            $scope.eotPrompt = true;
        } else {
            $scope.eotPrompt = false;
            $scope.eotPurchase = "";
            $scope.eotRenewal = "";
        }
    })
     $scope.$watch('passThrough', function() {
        console.log($scope.passThrough);
        if($scope.passThrough == "Yes") {
            $scope.passThroughPrompt = true;
        } else {
            $scope.passThroughPrompt = false;
            $scope.passThroughRenewalServices = "";
            $scope.passThroughCloudServices = "";
        }
    })


    // *****************Credit Controller Stuff**************************
    $scope.updateProgramType = function() {
        if($scope.programType == "Managed Program") {
            $scope.myRecords[2]['creditProgramType'] = [{
                html: $sce.trustAsHtml("Submission - deal in <a href='#'>WebX</a>")
            }, {
                html: $sce.trustAsHtml("<a href='#'>Credit Approval Process</a>")
            }, {
                html: $sce.trustAsHtml("<a href='#'>Essential Use Certification</a>")
            }, {
                html: $sce.trustAsHtml("<a href='#'>Opinion of Counsel Letter</a>")
            }];

            // Contracts. Will need to create new function in contracts controller
            $scope.myRecords[1]['ofdProgramType'] = [{
                html: $sce.trustAsHtml("<a href='#'>OFD Contracts</a>")
            }, {
                html: $sce.trustAsHtml("<a href='#'>Tax Languages</a>")
            }, {
                html: $sce.trustAsHtml("<a href='#'>Partner Process</a>")
            }, {
                html: $sce.trustAsHtml("<a href='#'>Reseller Order Agreement</a>")
            }];
            $scope.myRecords[2]['ofdProgramType'] = [{
                html: $sce.trustAsHtml("<a href='#'>Business Bargain</a>")
            }, {
                html: $sce.trustAsHtml("<a href='#'>Description of OFD Contracts - Template Explanation</a>")
            }, {
                html: $sce.trustAsHtml("<a href='#'>Global Sales Guide to Partner Business</a>")
            }, {
                html: $sce.trustAsHtml("<a href='#'>GLobal Partner Deals and Payments</a>")
            }];
        } else if ($scope.programType == "Arranged Program") {
            $scope.myRecords[2]['creditProgramType'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];

            // Contracts
            $scope.myRecords[1]['ofdProgramType'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
            $scope.myRecords[2]['ofdProgramType'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
        } else {
            delete $scope.myRecords[2]['creditProgramType'];
            delete $scope.myRecords[2]['ofdProgramType'];
        }
    }
    $scope.updateSupplier = function() {
        if($scope.supplier == "Direct") {
            $scope.myRecords[2]['supplier'] = [{
                html: $sce.trustAsHtml("<a href='#'>Channel Box</a>")
            }, {
                html: $sce.trustAsHtml("<a href='#'>Reseller Order Agreement</a>")
            }];
        } else if ($scope.supplier == "Indirect") {
            $scope.myRecords[2]['supplier'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];

        } else {
            delete $scope.myRecords[2]['supplier'];
        }
    }
    $scope.updateCreditEnhancements = function() {
        if($scope.creditEnhancements == "Yes") {
            $scope.myRecords[1]['creditEnhancements'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
            $scope.myRecords[2]['creditEnhancements'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
        } else {
            delete $scope.myRecords[1]['creditEnhancements'];
            delete $scope.myRecords[2]['creditEnhancements'];
        } 
    }
    $scope.updateContractGeneration = function() {
        if($scope.contractGeneration == "Manual") {
            $scope.myRecords[1]['contractGeneration'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
            $scope.myRecords[2]['contractGeneration'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
        } else if ($scope.contractGeneration == "DocGen") {
            $scope.myRecords[1]['contractGeneration'] = [{
                html: $sce.trustAsHtml("DocGen link in <a href='#'>WebX</a>")
            }];
            $scope.myRecords[2]['contractGeneration'] = [{
                html: $sce.trustAsHtml("<a href='#'>How to Complete a Contract</a>")
            }, {
                html: $sce.trustAsHtml("<a href='#'>Contract Insert Guide</a>")
            }];
        } else {
            delete $scope.myRecords[2]['contractGeneration'];
        }
    }

    // $scope.$watch('entityTypes', function() {
    //     if($scope.entityTypes =="Publicly Listed Entity") {
    //         $entityTypeResults = [
    //             {
    //                 tips: ["Financial information publicly available"],
    //                 toolkit: [
    //                     {}
    //                 ]
    //             }
    //         ];
    //     }
    // })

    


    // $scope.isActive = function(path) {
    // 	var url = window.location.href;

    // 	console.log((url.substr(url.length - path.length, url.length) === path) ? true : false);
    // }
 //    $scope.isActive = function (viewLocation) {
 //    	console.log("Checking isactive");
 //     var active = (viewLocation === $location.path());
 //     return true;
	// };
    // var url = window.location.href;
    // var a = url.length - "#/start".length;
    // var string = url.substr(a, url.length);
    // console.log(string);
});