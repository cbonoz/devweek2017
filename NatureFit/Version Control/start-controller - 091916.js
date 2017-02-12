// MUST FIX LINE 234!!!!!

myApp.controller('StartController', function($scope, $sce, MainFactory, CatalogueFactory) {
    // Variables that appear on multiple pages
    var sharedVariables = MainFactory.getSharedVariables();
    $scope.customerObligor = sharedVariables.customerObligor;
    $scope.entityType = sharedVariables.entityType;
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

    // To update entity type on this page. ONLY NEEDED THE MAINFACTORY CODE. NOT WHOLE THING. WILL REMOVE
    // $scope.updateCustomerObligor = function(customerObligor) {
    //     MainFactory.updateCustomerObligor($scope.customerObligor); 

    //     $scope.sectionCustomerReview = true;
    //     if(customerObligor == "commercialEntity" ) {
    //         delete $scope.myRecords[0]['customerObligor'];
    //         $scope.myRecords[1]['customerObligor'] = [{
    //             html: $sce.trustAsHtml("<a target='_blank' href='#' class='light-gray'>Under Construction</a>"),
    //         }];
    //         delete $scope.myRecords[2]['customerObligor'];
    //         $scope.entityTypes = [
    //         {value: "Publicly Listed Entity",
    //         definition: $scope.definition.publiclyListedEntity,
    //         id: "publiclyListedEntity"},
    //         {value: "Privately Owned Entity",
    //         definition: $scope.definition.privatelyOwnedEntity,
    //         id: "privatelyOwnedEntity"}
    //         ];

    //         $scope.myRecords[0]['creditCustomerObligor'] = [{
    //             html: $sce.trustAsHtml('Financial information publicly available'),
    //         }];

    //         $scope.myRecords[1]['creditCustomerObligor'] = [{
    //             html: $sce.trustAsHtml("<a target='_blank' href='#' class='light-gray'>Under Construction</a>"),
    //         }];
    //     } else if (customerObligor == "government") {
    //         $scope.myRecords[0]['customerObligor'] = [{
    //             html: $sce.trustAsHtml("<span class='light-gray'>Under Construction</span>"),
    //         }];
    //         $scope.myRecords[1]['customerObligor'] = [{
    //             html: $sce.trustAsHtml("<a target='_blank' href='#' class='light-gray'>Under Construction</a>"),
    //         }];
    //         delete $scope.myRecords[2]['customerObligor'];

    //         $scope.entityTypes = [
    //         {value: "National/Federal",
    //         definition: $scope.definition.nationalFederal},
    //         {value: "State/Provincial",
    //         definition: $scope.definition.stateProvincial},
    //         {value: "Local",
    //         definition: $scope.definition.local},
    //         {value: "Quasi-Government",
    //         definition: $scope.definition.quasiGovernment}
    //         ];

    //     } else if(customerObligor == "partner") {
    //         $scope.myRecords[0]['customerObligor'] = [{
    //             html: $sce.trustAsHtml('Partner Tip'),
    //         }];
    //         $scope.myRecords[1]['customerObligor'] = [{
    //             html: $sce.trustAsHtml("<a target='_blank' href='#' class='light-gray'>Under Construction</a>"),
    //         }];
    //         $scope.myRecords[2]['customerObligor'] = [{
    //             html: $sce.trustAsHtml("<a target='_blank' href='#' class='light-gray'>Under Construction</a>"),
    //         }];
    //         $scope.entityTypes = [
    //         {value: "Publicly Listed Entity",
    //         definition: $scope.definition.publiclyListedEntity,
    //         id: "publiclyListedEntity"},
    //         {value: "Privately Owned Entity",
    //         definition: $scope.definition.privatelyOwnedEntity,
    //         id: "privatelyOwnedEntity"}
    //         ];

    //     } else if(customerObligor == "independentSoftwareVendor") {
    //         $scope.myRecords[0]['customerObligor'] = [{
    //             html: $sce.trustAsHtml("<span class='light-gray'>Under Construction</span>"),
    //         }];
    //         $scope.myRecords[1]['customerObligor'] = [{
    //             html: $sce.trustAsHtml("<a target='_blank' href='/site/fin/ofd/internal/ProcessProcedures/cnt2509931.docx'>ISV Checklist</a>"),
    //         }, {
    //             html: $sce.trustAsHtml("<a target='_blank' href='/site/fin/ofd/internal/ProcessProcedures/cnt2540375.docx'>Guide to Identifying and Submitting an ISV Prepaid Distribution Deal</a>"),
    //         }, {
    //             html: $sce.trustAsHtml("<a target='_blank' href='/site/fin/ofd/internal/ProcessProcedures/cnt2539909.docx'>Understanding ISV Models</a>")
    //         }];
    //         $scope.myRecords[2]['customerObligor'] = [{
    //             html: $sce.trustAsHtml("<a target='_blank' href='#' class='light-gray'>Under Construction</a>"),
    //         }];
    //         $scope.entityTypes = [
    //         {value: "Publicly Listed Entity",
    //         definition: $scope.definition.publiclyListedEntity,
    //         id: "publiclyListedEntity"},
    //         {value: "Privately Owned Entity",
    //         definition: $scope.definition.privatelyOwnedEntity,
    //         id: "privatelyOwnedEntity"}
    //         ];

    //     } else if(customerObligor == "resellerFinancing") {
    //         delete $scope.myRecords[0]['customerObligor'];
    //         delete $scope.myRecords[1]['customerObligor'];
    //         delete $scope.myRecords[2]['customerObligor'];
    //         $scope.entityTypes = [
    //         {value: "Publicly Listed Entity",
    //         definition: $scope.definition.publiclyListedEntity,
    //         id: "publiclyListedEntity"},
    //         {value: "Privately Owned Entity",
    //         definition: $scope.definition.privatelyOwnedEntity,
    //         id: "privatelyOwnedEntity"}
    //         ];
    //     } else {
    //         delete $scope.myRecords[0]['customerObligor'];
    //         delete $scope.myRecords[1]['customerObligor'];
    //         delete $scope.myRecords[2]['customerObligor'];
    //         $scope.entityType = false;
    //     }
    // }


    // To change Entity Types when changed on Credit page
    $scope.$watch('customerObligor', function() {
        MainFactory.updateCustomerObligor($scope.customerObligor); 
        // Show next section
        if($scope.customerObligor) {
            $scope.sectionCustomerReview = true;
        }
        // Clear resultboxes if customer/obligor changed
        delete $scope.myRecords[0]['entityType'];
        delete $scope.myRecords[1]['entityType'];
        delete $scope.myRecords[2]['entityType'];

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
                html: $sce.trustAsHtml('<span class="light-gray">Under Construction</span>'),
            }];
            $scope.myRecords[1]['customerObligor'] = [{
                html: $sce.trustAsHtml("<a target='_blank' href='#' class='light-gray'>Under Construction</a>"),
            }];
            $scope.myRecords[2]['customerObligor'] = [{
                html: $sce.trustAsHtml("<a target='_blank' href='#' class='light-gray'>Under Construction</a>"),
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
                html: $sce.trustAsHtml("<a target='_blank' href='#' class='light-gray'>Under Construction</a>"),
            }];
            $scope.myRecords[2]['customerObligor'] = [{
                html: $sce.trustAsHtml("<a target='_blank' href='#' class='light-gray'>Under Construction</a>"),
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
                html: $sce.trustAsHtml("<span class='light-gray'>Under Construction</span>"),
            }];
            $scope.myRecords[1]['customerObligor'] = [{
                html: $sce.trustAsHtml("<a target='_blank' href='#' class='light-gray'>Under Construction</a>"),
            }];
            $scope.myRecords[2]['customerObligor'] = [{
                html: $sce.trustAsHtml("<a target='_blank' download='Guide to Service Provider Deals' href='/site/fin/ofd/internal/ProcessProcedures/cnt2085872.docx'>Guide to Service Provider Deals</a>"),
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
                html: $sce.trustAsHtml("<a target='_blank' download='ISV Checklist' href='/site/fin/ofd/internal/ProcessProcedures/cnt2509931.docx'>ISV Checklist</a>"),
            }];
            $scope.myRecords[2]['customerObligor'] = [{
                html: $sce.trustAsHtml("<a target='_blank' download='Understanding ISV Models' href='/site/fin/ofd/internal/ProcessProcedures/cnt2539909.docx'>Understanding ISV Models</a>")
            }, {
                html: $sce.trustAsHtml("<a target='_blank' download='Guide to Identifying and Submitting an ISV Prepaid Distribution Deal' href='/site/fin/ofd/internal/ProcessProcedures/cnt2540375.docx'>Guide to Identifying and Submitting an ISV Prepaid Distribution Deal</a>"),
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
            $scope.myRecords[0]['customerObligor'] = [{
                html: $sce.trustAsHtml("<span class='light-gray'>Under Construction</span>"),
            }];
            $scope.myRecords[1]['customerObligor'] = [{
                html: $sce.trustAsHtml("<a target='_blank' href='#' class='light-gray'>Under Construction</a>"),
            }];
            $scope.myRecords[2]['customerObligor'] = [{
                html: $sce.trustAsHtml("<a target='_blank' href='#' class='light-gray'>Under Construction</a>"),
            }];
        } else {
            delete $scope.myRecords[0]['customerObligor'];
            delete $scope.myRecords[1]['customerObligor'];
            delete $scope.myRecords[2]['customerObligor'];
            $scope.entityTypes = false;
        }
    });
    
    $scope.updateEntityType = function(entityType) {
        MainFactory.updateEntityType(entityType); 
        if(entityType == "Publicly Listed Entity") {
            $scope.myRecords[0]['entityType'] = [{
                html: $sce.trustAsHtml('Financial information publicly available through Customer/Obligor\'s website.')
            }];
             $scope.myRecords[1]['entityType'] = [{
                html: $sce.trustAsHtml("<a target='_blank' download='OFD Risk Rating Matrix' href='/site/fin/ofd/internal/frm/cnt375961.xls'>OFD Risk Rating Matrix</a>")
            }];
        } else if(entityType == "Privately Owned Entity") {
            $scope.myRecords[0]['entityType'] = [{
                html: $sce.trustAsHtml('Request from Customer/Obliglor previous 2 - years\' complete audited financial statements plus most recent interim statement.')
            }];
            $scope.myRecords[1]['entityType'] = [{
                html: $sce.trustAsHtml("<a target='_blank' download='OFD Risk Rating Matrix' href='/site/fin/ofd/internal/frm/cnt375961.xls'>OFD Risk Rating Matrix</a>")
            }];
        } else if(entityType == "National/Federal") {
            $scope.myRecords[0]['entityType'] = [{
                html: $sce.trustAsHtml('Financial information publicly available')
            }];
            $scope.myRecords[1]['entityType'] = [{
                html: $sce.trustAsHtml("<a target='_blank' download='OFD Risk Rating Matrix' href='/site/fin/ofd/internal/frm/cnt375961.xls'>OFD Risk Rating Matrix</a>")
            }];
        } else if(entityType == "Local") {
            $scope.myRecords[0]['entityType'] = [{
                html: $sce.trustAsHtml('Financial information publicly available')
            }];
            $scope.myRecords[1]['entityType'] = [{
                html: $sce.trustAsHtml("<a target='_blank' download='OFD Risk Rating Matrix' href='/site/fin/ofd/internal/frm/cnt375961.xls'>OFD Risk Rating Matrix</a>")
            }];
        } else if(entityType == "State/Provincial") {
            $scope.myRecords[0]['entityType'] = [{
                html: $sce.trustAsHtml('Financial information publicly available')
            }];
            $scope.myRecords[1]['entityType'] = [{
                html: $sce.trustAsHtml("<a target='_blank' download='OFD Risk Rating Matrix' href='/site/fin/ofd/internal/frm/cnt375961.xls'>OFD Risk Rating Matrix</a>")
            }];
        } else if(entityType == "Quasi-Government") {
            $scope.myRecords[0]['entityType'] = [{
                html: $sce.trustAsHtml('Financial information publicly available')
            }];
            $scope.myRecords[1]['entityType'] = [{
                html: $sce.trustAsHtml("<a target='_blank' download='OFD Risk Rating Matrix' href='/site/fin/ofd/internal/frm/cnt375961.xls'>OFD Risk Rating Matrix</a>")
            }];
        } else {

        }
    }
    // Needed to retain resultbox for OFD Customer Financial Information Review
    $scope.$watch('entityType', function() {
        if($scope.entityType == "Publicly Listed Entity") {
            $scope.myRecords[0]['entityType'] = [{
                html: $sce.trustAsHtml('Financial information publicly available through Customer/Obligor\'s website.')
            }];
             $scope.myRecords[1]['entityType'] = [{
                html: $sce.trustAsHtml("<a target='_blank' download='OFD Risk Rating Matrix' href='/site/fin/ofd/internal/frm/cnt375961.xls'>OFD Risk Rating Matrix</a>")
            }];
        } else if($scope.entityType == "Privately Owned Entity") {
            $scope.myRecords[0]['entityType'] = [{
                html: $sce.trustAsHtml('Request from Customer/Obliglor previous 2 - years\' complete audited financial statements plus most recent interim statement.')
            }];
            $scope.myRecords[1]['entityType'] = [{
                html: $sce.trustAsHtml("<a target='_blank' download='OFD Risk Rating Matrix' href='/site/fin/ofd/internal/frm/cnt375961.xls'>OFD Risk Rating Matrix</a>")
            }];
        } else if($scope.entityType == "National/Federal") {
            $scope.myRecords[0]['entityType'] = [{
                html: $sce.trustAsHtml('Financial information publicly available')
            }];
            $scope.myRecords[1]['entityType'] = [{
                html: $sce.trustAsHtml("<a target='_blank' download='OFD Risk Rating Matrix' href='/site/fin/ofd/internal/frm/cnt375961.xls'>OFD Risk Rating Matrix</a>")
            }];
        } else if($scope.entityType == "Local") {
            $scope.myRecords[0]['entityType'] = [{
                html: $sce.trustAsHtml('Financial information publicly available')
            }];
            $scope.myRecords[1]['entityType'] = [{
                html: $sce.trustAsHtml("<a target='_blank' download='OFD Risk Rating Matrix' href='/site/fin/ofd/internal/frm/cnt375961.xls'>OFD Risk Rating Matrix</a>")
            }];
        } else if($scope.entityType == "State/Provincial") {
            $scope.myRecords[0]['entityType'] = [{
                html: $sce.trustAsHtml('Financial information publicly available')
            }];
            $scope.myRecords[1]['entityType'] = [{
                html: $sce.trustAsHtml("<a target='_blank' download='OFD Risk Rating Matrix' href='/site/fin/ofd/internal/frm/cnt375961.xls'>OFD Risk Rating Matrix</a>")
            }];
        } else if($scope.entityType == "Quasi-Government") {
            $scope.myRecords[0]['entityType'] = [{
                html: $sce.trustAsHtml('Financial information publicly available')
            }];
            $scope.myRecords[1]['entityType'] = [{
                html: $sce.trustAsHtml("<a target='_blank' download='OFD Risk Rating Matrix' href='/site/fin/ofd/internal/frm/cnt375961.xls'>OFD Risk Rating Matrix</a>")
            }];
        } else {

        }
    })

    // Static Customer Financial Footprint
    $scope.myRecords[1]['customerFinancialFootprint'] =[{
        html: $sce.trustAsHtml("<span class='navy-blue' data-balloon='" + $scope.definition.ofdFinancialFootprint + "' data-balloon-pos='up' data-balloon-length='xlarge'>OFD Financial Footprint</span><span> in </span><a target='_blank' href='https://financing.oraclecorp.com/' data-balloon='" + $scope.definition.webX + "' data-balloon-pos='up' data-balloon-length='xlarge'>WebX</a><ul class='pathway'><li>OFD > Reports > Global Reports > Financial Footprint</li></ul>")
    }];

    // Static Start a Deal
    $scope.myRecords[1]['startADeal'] =[{
        html: $sce.trustAsHtml("<span>Start a deal in </span><a target='_blank' href='https://financing.oraclecorp.com/' data-balloon='" + $scope.definition.webX + "' data-balloon-pos='up' data-balloon-length='xlarge'>WebX</a>")
    }];
});