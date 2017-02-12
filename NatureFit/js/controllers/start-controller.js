// MUST FIX LINE 234!!!!!

myApp.controller('StartController', function($scope, $sce, MainFactory, StartFactory) {
    // Variables that appear on multiple pages
    var sharedVariables = MainFactory.getSharedVariables();
    var startData = StartFactory.getStartData();
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
    // Process startData to objects in arr for SCE
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
            $scope.myRecords[0]['customerObligor'] = convertToSce(startData.commercialEntity.tips);
            $scope.myRecords[1]['customerObligor'] = convertToSce(startData.commercialEntity.toolkit);
            $scope.myRecords[2]['customerObligor'] = convertToSce(startData.commercialEntity.knowmore);

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
            $scope.myRecords[0]['customerObligor'] = convertToSce(startData.government.tips);
            $scope.myRecords[1]['customerObligor'] = convertToSce(startData.government.toolkit);
            $scope.myRecords[2]['customerObligor'] = convertToSce(startData.government.knowmore);
        } else if($scope.customerObligor == "Partner") {
            $scope.entityTypes = [
            {value: "Publicly Listed Entity",
            definition: $scope.definition.publiclyListedEntity,
            id: "publiclyListedEntity"},
            {value: "Privately Owned Entity",
            definition: $scope.definition.privatelyOwnedEntity,
            id: "privatelyOwnedEntity"}
            ];
            $scope.myRecords[0]['customerObligor'] = convertToSce(startData.partnerServiceProvider.tips);
            $scope.myRecords[1]['customerObligor'] = convertToSce(startData.partnerServiceProvider.toolkit);
            $scope.myRecords[2]['customerObligor'] = convertToSce(startData.partnerServiceProvider.knowmore);
        } else if($scope.customerObligor == "Independent Software Vendor") {
            $scope.entityTypes = [
            {value: "Publicly Listed Entity",
            definition: $scope.definition.publiclyListedEntity,
            id: "publiclyListedEntity"},
            {value: "Privately Owned Entity",
            definition: $scope.definition.privatelyOwnedEntity,
            id: "privatelyOwnedEntity"}
            ];
            $scope.myRecords[0]['customerObligor'] = convertToSce(startData.isv.tips);
            $scope.myRecords[1]['customerObligor'] = convertToSce(startData.isv.toolkit);
            $scope.myRecords[2]['customerObligor'] = convertToSce(startData.isv.knowmore);
        } else if($scope.customerObligor == "Reseller Financing") {
            $scope.entityTypes = [
            {value: "Publicly Listed Entity",
            definition: $scope.definition.publiclyListedEntity,
            id: "publiclyListedEntity"},
            {value: "Privately Owned Entity",
            definition: $scope.definition.privatelyOwnedEntity,
            id: "privatelyOwnedEntity"}
            ];
            $scope.myRecords[0]['customerObligor'] = convertToSce(startData.resellerFinancing.tips);
            $scope.myRecords[1]['customerObligor'] = convertToSce(startData.resellerFinancing.toolkit);
            $scope.myRecords[2]['customerObligor'] = convertToSce(startData.resellerFinancing.knowmore);
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
            $scope.myRecords[0]['entityType'] = convertToSce(startData.publiclyListedEntity.tips);
            $scope.myRecords[1]['entityType'] = convertToSce(startData.publiclyListedEntity.toolkit);
            $scope.myRecords[2]['entityType'] = convertToSce(startData.publiclyListedEntity.knowmore);
        } else if(entityType == "Privately Owned Entity") {
            $scope.myRecords[0]['entityType'] = convertToSce(startData.privatelyListedEntity.tips);
            $scope.myRecords[1]['entityType'] = convertToSce(startData.privatelyListedEntity.toolkit);
            $scope.myRecords[2]['entityType'] = convertToSce(startData.privatelyListedEntity.knowmore);
        } else if(entityType == "National/Federal") {
            $scope.myRecords[0]['entityType'] = convertToSce(startData.nationalFederal.tips);
            $scope.myRecords[1]['entityType'] = convertToSce(startData.nationalFederal.toolkit);
            $scope.myRecords[2]['entityType'] = convertToSce(startData.nationalFederal.knowmore);
        } else if(entityType == "Local") {
            $scope.myRecords[0]['entityType'] = convertToSce(startData.local.tips);
            $scope.myRecords[1]['entityType'] = convertToSce(startData.local.toolkit);
            $scope.myRecords[2]['entityType'] = convertToSce(startData.local.knowmore);
        } else if(entityType == "State/Provincial") {
            $scope.myRecords[0]['entityType'] = convertToSce(startData.stateProvincial.tips);
            $scope.myRecords[1]['entityType'] = convertToSce(startData.stateProvincial.toolkit);
            $scope.myRecords[2]['entityType'] = convertToSce(startData.stateProvincial.knowmore);
        } else if(entityType == "Quasi-Government") {
            $scope.myRecords[0]['entityType'] = convertToSce(startData.quasiGovernment.tips);
            $scope.myRecords[1]['entityType'] = convertToSce(startData.quasiGovernment.toolkit);
            $scope.myRecords[2]['entityType'] = convertToSce(startData.quasiGovernment.knowmore);
        } else {
            // console.log("Error in Entity Type");
        }
    }
    // Needed to retain resultbox for OFD Customer Financial Information Review
    $scope.$watch('entityType', function() {
        if($scope.entityType == "Publicly Listed Entity") {
            $scope.myRecords[0]['entityType'] = convertToSce(startData.publiclyListedEntity.tips);
            $scope.myRecords[1]['entityType'] = convertToSce(startData.publiclyListedEntity.toolkit);
            $scope.myRecords[2]['entityType'] = convertToSce(startData.publiclyListedEntity.knowmore);
        } else if($scope.entityType == "Privately Owned Entity") {
            $scope.myRecords[0]['entityType'] = convertToSce(startData.privatelyListedEntity.tips);
            $scope.myRecords[1]['entityType'] = convertToSce(startData.privatelyListedEntity.toolkit);
            $scope.myRecords[2]['entityType'] = convertToSce(startData.privatelyListedEntity.knowmore);
        } else if($scope.entityType == "National/Federal") {
            $scope.myRecords[0]['entityType'] = convertToSce(startData.nationalFederal.tips);
            $scope.myRecords[1]['entityType'] = convertToSce(startData.nationalFederal.toolkit);
            $scope.myRecords[2]['entityType'] = convertToSce(startData.nationalFederal.knowmore);
        } else if($scope.entityType == "Local") {
            $scope.myRecords[0]['entityType'] = convertToSce(startData.local.tips);
            $scope.myRecords[1]['entityType'] = convertToSce(startData.local.toolkit);
            $scope.myRecords[2]['entityType'] = convertToSce(startData.local.knowmore);
        } else if($scope.entityType == "State/Provincial") {
            $scope.myRecords[0]['entityType'] = convertToSce(startData.stateProvincial.tips);
            $scope.myRecords[1]['entityType'] = convertToSce(startData.stateProvincial.toolkit);
            $scope.myRecords[2]['entityType'] = convertToSce(startData.stateProvincial.knowmore);
        } else if($scope.entityType == "Quasi-Government") {
            $scope.myRecords[0]['entityType'] = convertToSce(startData.quasiGovernment.tips);
            $scope.myRecords[1]['entityType'] = convertToSce(startData.quasiGovernment.toolkit);
            $scope.myRecords[2]['entityType'] = convertToSce(startData.quasiGovernment.knowmore);
        } else {

        }
    })

    // Static Customer Financial Footprint
    // $scope.myRecords[1]['customerFinancialFootprint'] =[{
    //     html: $sce.trustAsHtml("<span class='navy-blue' data-balloon='" + $scope.definition.ofdFinancialFootprint + "' data-balloon-pos='up' data-balloon-length='xlarge'>OFD Financial Footprint</span><span> in </span><a target='_blank' href='https://financing.oraclecorp.com/' data-balloon='" + $scope.definition.webX + "' data-balloon-pos='up' data-balloon-length='xlarge'>WebX</a><ul class='pathway'><li>OFD &rarr; Reports &rarr; Global Reports &rarr; Financial Footprint</li></ul>")
    // }];
    $scope.myRecords[0]['customerFinancialFootprint'] = convertToSce(startData.customerFinancialFootprint.tips);
    $scope.myRecords[1]['customerFinancialFootprint'] = convertToSce(startData.customerFinancialFootprint.toolkit);
    $scope.myRecords[2]['customerFinancialFootprint'] = convertToSce(startData.customerFinancialFootprint.knowmore);
    // Static Start a Deal
    $scope.myRecords[0]['startADeal'] = convertToSce(startData.startADeal.tips);
    $scope.myRecords[1]['startADeal'] = convertToSce(startData.startADeal.toolkit);
    $scope.myRecords[2]['startADeal'] = convertToSce(startData.startADeal.knowmore);
});