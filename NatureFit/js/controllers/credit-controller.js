myApp.controller('CreditController', function($scope, $sce, $element, MainFactory, CreditFactory) {
    // Variables that appear on multiple pages
    var sharedVariables = MainFactory.getSharedVariables();
    var creditData = CreditFactory.getCreditData();
    // To retain radio button when selected from another
    // $scope.customerObligor = sharedVariables.customerObligor;
    $scope.creditCustomerObligor = sharedVariables.customerObligor;
    $scope.programType = sharedVariables.programType;
    $scope.creditEnhancements = sharedVariables.creditEnhancements;

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

    // 0: Tips, 1: Toolkit, 2: Know More

    // May not need
    // $scope.updateCustomerObligor = function(customerObligor) {
    //     MainFactory.updateCustomerObligor($scope.creditCustomerObligor); 
    //     if(customerObligor == "commercialEntity" ) {
    //         $scope.myRecords[0]['creditCustomerObligor'] = [{
    //             html: $sce.trustAsHtml('<span class="light-gray">Under Construction</span>'),
    //         }];
    //         $scope.myRecords[1]['creditCustomerObligor'] = [{
    //             html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
    //         }];
    //         $scope.myRecords[2]['creditCustomerObligor'] = [{
    //             html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
    //         }];
    //     } else if (customerObligor == "government") {
    //         $scope.myRecords[0]['creditCustomerObligor'] = [{
    //             html: $sce.trustAsHtml("<span class='light-gray'>Under Construction</span>"),
    //         }];
    //         $scope.myRecords[1]['creditCustomerObligor'] = [{
    //             html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
    //         }];
    //         $scope.myRecords[2]['creditCustomerObligor'] = [{
    //             html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
    //         }];
    //     } else if(customerObligor == "partner") {
    //         $scope.myRecords[0]['creditCustomerObligor'] = [{
    //             html: $sce.trustAsHtml("<span class='light-gray'>Under Construction</span>"),
    //         }];
    //         $scope.myRecords[1]['creditCustomerObligor'] = [{
    //             html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
    //         }];
    //         $scope.myRecords[2]['creditCustomerObligor'] = [{
    //             html: $sce.trustAsHtml("<a download='Guide to Service Provider Deals' href='/site/fin/ofd/internal/ProcessProcedures/cnt2085872.docx'>Guide to Service Provider Deals</a>"),
    //         }];
    //     } else if(customerObligor == "independentSoftwareVendor") {
    //         $scope.myRecords[0]['creditCustomerObligor'] = [{
    //             html: $sce.trustAsHtml("<span class='light-gray'>Under Construction</span>"),
    //         }];
    //         $scope.myRecords[1]['creditCustomerObligor'] = [{
    //             html: $sce.trustAsHtml("<a download='ISV Checklist' href='/site/fin/ofd/internal/ProcessProcedures/cnt2509931.docx'>ISV Checklist</a>"),
    //         }];
    //         $scope.myRecords[2]['creditCustomerObligor'] = [{
    //             html: $sce.trustAsHtml("<a download='Understanding ISV Models' href='/site/fin/ofd/internal/ProcessProcedures/cnt2539909.docx'>Understanding ISV Models</a>")
    //         }, {
    //             html: $sce.trustAsHtml("<a download='Guide to Identifying and Submitting an ISV Prepaid Distribution Deal' href='/site/fin/ofd/internal/ProcessProcedures/cnt2540375.docx'>Guide to Identifying and Submitting an ISV Prepaid Distribution Deal</a>"),
    //         }];
    //     } else if(customerObligor == "resellerFinancing") {
    //         $scope.myRecords[0]['creditCustomerObligor'] = [{
    //             html: $sce.trustAsHtml("<span class='light-gray'>Under Construction</span>"),
    //         }];
    //         $scope.myRecords[1]['creditCustomerObligor'] = [{
    //             html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
    //         }];
    //         $scope.myRecords[2]['creditCustomerObligor'] = [{
    //             html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
    //         }];
    //     } else {
    //         delete $scope.myRecords[0]['creditCustomerObligor'];
    //         delete $scope.myRecords[1]['creditCustomerObligor'];
    //         delete $scope.myRecords[2]['creditCustomerObligor'];
    //     }
    // }
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

    // $watch isn't working. Just firing everytime this page loads*
    $scope.$watch('creditCustomerObligor', function() {
        MainFactory.updateCustomerObligor($scope.creditCustomerObligor);
        // Show next section
         if($scope.creditCustomerObligor == "Commercial Entity" ) {
            $scope.myRecords[0]['creditCustomerObligor'] = convertToSce(creditData.customerObligor.commercialEntity.tips);
            $scope.myRecords[1]['creditCustomerObligor'] = convertToSce(creditData.customerObligor.commercialEntity.toolkit);
            $scope.myRecords[2]['creditCustomerObligor'] = convertToSce(creditData.customerObligor.commercialEntity.knowmore);
        } else if ($scope.creditCustomerObligor == "Government") {
            $scope.myRecords[0]['creditCustomerObligor'] = convertToSce(creditData.customerObligor.government.tips);
            $scope.myRecords[1]['creditCustomerObligor'] = convertToSce(creditData.customerObligor.government.toolkit);
            $scope.myRecords[2]['creditCustomerObligor'] = convertToSce(creditData.customerObligor.government.knowmore);
        } else if($scope.creditCustomerObligor == "Partner") {
            $scope.myRecords[0]['creditCustomerObligor'] = convertToSce(creditData.customerObligor.partnerServiceProvider.tips);
            $scope.myRecords[1]['creditCustomerObligor'] = convertToSce(creditData.customerObligor.partnerServiceProvider.toolkit);
            $scope.myRecords[2]['creditCustomerObligor'] = convertToSce(creditData.customerObligor.partnerServiceProvider.knowmore);
        } else if($scope.creditCustomerObligor == "Independent Software Vendor") {
            $scope.myRecords[0]['creditCustomerObligor'] = convertToSce(creditData.customerObligor.isv.tips);
            $scope.myRecords[1]['creditCustomerObligor'] = convertToSce(creditData.customerObligor.isv.toolkit);
            $scope.myRecords[2]['creditCustomerObligor'] = convertToSce(creditData.customerObligor.isv.knowmore);
        } else if($scope.creditCustomerObligor == "Reseller Financing") {
            $scope.myRecords[0]['creditCustomerObligor'] = convertToSce(creditData.customerObligor.resellerFinancing.tips);
            $scope.myRecords[1]['creditCustomerObligor'] = convertToSce(creditData.customerObligor.resellerFinancing.toolkit);
            $scope.myRecords[2]['creditCustomerObligor'] = convertToSce(creditData.customerObligor.resellerFinancing.knowmore);
        } else {
            delete $scope.myRecords[0]['creditCustomerObligor'];
            delete $scope.myRecords[1]['creditCustomerObligor'];
            delete $scope.myRecords[2]['creditCustomerObligor'];
        }
    })

    // Static Credit Analysis

    $scope.myRecords[0]['creditAnalysis'] = convertToSce(creditData.creditAnalysis.tips);
    $scope.myRecords[1]['creditAnalysis'] = convertToSce(creditData.creditAnalysis.toolkit);
    $scope.myRecords[2]['creditAnalysis'] = convertToSce(creditData.creditAnalysis.knowmore);

    $scope.$watch('programType', function() {
        MainFactory.updateProgramType($scope.programType);  
         if($scope.programType == "Managed Program") {
            $scope.myRecords[0]['creditProgramType'] = convertToSce(creditData.programType.managedProgram.tips);
            $scope.myRecords[1]['creditProgramType'] = convertToSce(creditData.programType.managedProgram.toolkit);
            $scope.myRecords[2]['creditProgramType'] = convertToSce(creditData.programType.managedProgram.knowmore);

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
            $scope.myRecords[0]['creditProgramType'] = convertToSce(creditData.programType.arrangedProgram.tips);
            $scope.myRecords[1]['creditProgramType'] = convertToSce(creditData.programType.arrangedProgram.toolkit);
            $scope.myRecords[2]['creditProgramType'] = convertToSce(creditData.programType.arrangedProgram.knowmore);

            // Contracts
            $scope.myRecords[1]['ofdProgramType'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
            $scope.myRecords[2]['ofdProgramType'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];
        } else {
            delete $scope.myRecords[0]['creditProgramType'];
            delete $scope.myRecords[1]['creditProgramType'];
            delete $scope.myRecords[2]['creditProgramType'];
            delete $scope.myRecords[2]['ofdProgramType'];
        }
    })
    // $scope.$watch('paymentSolution', function() {
    //     if($scope.paymentSolution == "Lease/Term") {
    //         $scope.eotPrompt = true;
    //     } else {
    //         $scope.eotPrompt = false;
    //         $scope.eotPurchase = "";
    //         $scope.eotRenewal = "";
    //     }
    // })
    //  $scope.$watch('passThrough', function() {

    //     if($scope.passThrough == "Yes") {
    //         $scope.passThroughPrompt = true;
    //     } else {
    //         $scope.passThroughPrompt = false;
    //         $scope.passThroughRenewalServices = "";
    //         $scope.passThroughCloudServices = "";
    //     }
    // })
    // Watch for credit enhancement changes and update on other page
    $scope.$watch('creditEnhancements', function() {
        MainFactory.updateCreditEnhancements($scope.creditEnhancements); 
        if($scope.creditEnhancements == "Yes") {
            $scope.myRecords[0]['creditEnhancements'] = convertToSce(creditData.creditEnhancementsYes.tips);
            $scope.myRecords[1]['creditEnhancements'] = convertToSce(creditData.creditEnhancementsYes.toolkit);
            $scope.myRecords[2]['creditEnhancements'] = convertToSce(creditData.creditEnhancementsYes.knowmore);
        } else {
            delete $scope.myRecords[0]['creditEnhancements']; 
            delete $scope.myRecords[1]['creditEnhancements'];
            delete $scope.myRecords[2]['creditEnhancements'];
        }
    });
    // Static Compliance
    $scope.myRecords[0]['compliance'] = convertToSce(creditData.compliance.tips);
    $scope.myRecords[1]['compliance'] = convertToSce(creditData.compliance.toolkit);
    $scope.myRecords[2]['compliance'] = convertToSce(creditData.compliance.knowmore);

    // // *****************Credit Controller Stuff**************************
    // $scope.updateProgramType = function() {
    //     if($scope.programType == "Managed Program") {
    //         $scope.myRecords[2]['creditProgramType'] = [{
    //             html: $sce.trustAsHtml("Submission - deal in <a href='#'>WebX</a>")
    //         }, {
    //             html: $sce.trustAsHtml("<a href='#'>Credit Approval Process</a>")
    //         }, {
    //             html: $sce.trustAsHtml("<a href='#'>Essential Use Certification</a>")
    //         }, {
    //             html: $sce.trustAsHtml("<a href='#'>Opinion of Counsel Letter</a>")
    //         }];

    //         // Contracts. Will need to create new function in contracts controller
    //         $scope.myRecords[1]['ofdProgramType'] = [{
    //             html: $sce.trustAsHtml("<a href='#'>OFD Contracts</a>")
    //         }, {
    //             html: $sce.trustAsHtml("<a href='#'>Tax Languages</a>")
    //         }, {
    //             html: $sce.trustAsHtml("<a href='#'>Partner Process</a>")
    //         }, {
    //             html: $sce.trustAsHtml("<a href='#'>Reseller Order Agreement</a>")
    //         }];
    //         $scope.myRecords[2]['ofdProgramType'] = [{
    //             html: $sce.trustAsHtml("<a href='#'>Business Bargain</a>")
    //         }, {
    //             html: $sce.trustAsHtml("<a href='#'>Description of OFD Contracts - Template Explanation</a>")
    //         }, {
    //             html: $sce.trustAsHtml("<a href='#'>Global Sales Guide to Partner Business</a>")
    //         }, {
    //             html: $sce.trustAsHtml("<a href='#'>GLobal Partner Deals and Payments</a>")
    //         }];
    //     } else if ($scope.programType == "Arranged Program") {
    //         $scope.myRecords[2]['creditProgramType'] = [{
    //             html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
    //         }];

    //         // Contracts
    //         $scope.myRecords[1]['ofdProgramType'] = [{
    //             html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
    //         }];
    //         $scope.myRecords[2]['ofdProgramType'] = [{
    //             html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
    //         }];
    //     } else {
    //         delete $scope.myRecords[2]['creditProgramType'];
    //         delete $scope.myRecords[2]['ofdProgramType'];
    //     }
    // }
    // $scope.updateSupplier = function() {
    //     if($scope.supplier == "Direct") {
    //         $scope.myRecords[2]['supplier'] = [{
    //             html: $sce.trustAsHtml("<a href='#'>Channel Box</a>")
    //         }, {
    //             html: $sce.trustAsHtml("<a href='#'>Reseller Order Agreement</a>")
    //         }];
    //     } else if ($scope.supplier == "Indirect") {
    //         $scope.myRecords[2]['supplier'] = [{
    //             html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
    //         }];

    //     } else {
    //         delete $scope.myRecords[2]['supplier'];
    //     }
    // }
    // $scope.updateCreditEnhancements = function() {

    //     if($scope.creditEnhancements == "Yes") {
    //         $scope.myRecords[1]['creditEnhancements'] = [{
    //             html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
    //         }];
    //         $scope.myRecords[2]['creditEnhancements'] = [{
    //             html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
    //         }];
    //     } else {
    //         delete $scope.myRecords[1]['creditEnhancements'];
    //         delete $scope.myRecords[2]['creditEnhancements'];
    //     } 
    // }
    // // Watch for credit enhancement changes and update on other page
    // $scope.$watch('creditEnhancements', function() {
    //     MainFactory.updateCreditEnhancements($scope.creditEnhancements); 
    //     if($scope.creditEnhancements == "Yes") {
    //         $scope.myRecords[1]['creditEnhancements'] = [{
    //             html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
    //         }];
    //         $scope.myRecords[2]['creditEnhancements'] = [{
    //             html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
    //         }];
    //     } else {
    //         delete $scope.myRecords[1]['creditEnhancements'];
    //         delete $scope.myRecords[2]['creditEnhancements'];
    //     } 
    // });
    // // Static Compliance
    // $scope.myRecords[1]['compliance'] = [{
    //     html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
    // }];
    // // {
    // //     html: $sce.trustAsHtml("<a href='#'>Know Your Customer(KYC) (Generic requirements)</a>"),
    // // },
    // // {
    // //     html: $sce.trustAsHtml("<a href='#'>Anti-Money Laundering(AML)</a>"),
    // // }




});