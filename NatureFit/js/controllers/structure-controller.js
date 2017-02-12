// Fix line 90!!! No does not take away know more. Only accesses ng-change once
myApp.controller('StructureController', function($scope, $sce, MainFactory, StructureFactory) {
    $scope.eot = {};
    $scope.midTerm = {};
    // Variables that appear on multiple pages
    var sharedVariables = MainFactory.getSharedVariables();
    var structureData = StructureFactory.getStructureData();
    console.log(structureData.paymentSolution);
    $scope.customerObligor = sharedVariables.customerObligor;
    $scope.programType = sharedVariables.programType;
    $scope.paymentSolution = sharedVariables.paymentSolution;
    $scope.passThrough = sharedVariables.passThrough;
    $scope.passThroughYes = sharedVariables.passThroughYes;
    $scope.crossBorder = sharedVariables.crossBorder;
    $scope.proposal = sharedVariables.proposal;

    // Needed for checkboxes
    if(sharedVariables['eot']) {
        if(sharedVariables.eot.purchase) {
            $scope.eot.purchase = true;
        }
        if(sharedVariables.eot.renew) {
            $scope.eot.renew = true;
        }
    }
    if(sharedVariables['midTerm']) {
        if(sharedVariables.midTerm.migration) {
            $scope.midTerm.migration = true;
        }
        if(sharedVariables.midTerm.techRefresh) {
            $scope.midTerm.techRefresh = true;
        }
        if(sharedVariables.midTerm.refinanceRollOver) {
            $scope.midTerm.refinanceRollOver = true;
        }
        if(sharedVariables.midTerm.saleLeaseBack) {
            $scope.midTerm.saleLeaseBack = true;
        }
        if(sharedVariables.midTerm.tradeIn) {
            $scope.midTerm.tradeIn = true;
        }
    }
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

    // $scope.updatePaymentSolution = function(value) {
    //     if($scope.paymentSolution == "Lease/Term") {
    //         $scope.eotPrompt = true;
    //     } else {
    //         delete $scope.eot;
    //         $scope.eotPrompt = false;
    //         $scope.eotPurchase = "";
    //         $scope.eotRenewal = "";
    //     }

    // }
    // $scope.updateEOT = function() {
    //     MainFactory.updateEOT($scope.eot);
    // }
    


    // $scope.$watch('programType', function() {
    //     MainFactory.updateProgramType($scope.programType);  
    // })
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

    // Static Basic Pricing
    $scope.myRecords[0]['basicPricing'] = convertToSce(structureData.basicPricing.tips);
    $scope.myRecords[1]['basicPricing'] = convertToSce(structureData.basicPricing.toolkit);
    $scope.myRecords[2]['basicPricing'] = convertToSce(structureData.basicPricing.knowmore);

    $scope.$watch('paymentSolution', function() {
        MainFactory.updatePaymentSolution($scope.paymentSolution);
        if($scope.paymentSolution == "Market-Rate Financing") {
            $scope.myRecords[0]['paymentSolution'] = convertToSce(structureData.paymentSolution.marketRateFinancing.tips);
            $scope.myRecords[1]['paymentSolution'] = convertToSce(structureData.paymentSolution.marketRateFinancing.toolkit);
            $scope.myRecords[2]['paymentSolution'] = convertToSce(structureData.paymentSolution.marketRateFinancing.knowmore);
        } else if($scope.paymentSolution == "Incentive-Rate Financing") {
            $scope.myRecords[0]['paymentSolution'] = convertToSce(structureData.paymentSolution.incentiveRateFinancing.tips);
            $scope.myRecords[1]['paymentSolution'] = convertToSce(structureData.paymentSolution.incentiveRateFinancing.toolkit);
            $scope.myRecords[2]['paymentSolution'] = convertToSce(structureData.paymentSolution.incentiveRateFinancing.knowmore);
        } else if($scope.paymentSolution == "Payment Plan") {
            $scope.myRecords[0]['paymentSolution'] = convertToSce(structureData.paymentSolution.paymentPlan.tips);
            $scope.myRecords[1]['paymentSolution'] = convertToSce(structureData.paymentSolution.paymentPlan.toolkit);
            $scope.myRecords[2]['paymentSolution'] = convertToSce(structureData.paymentSolution.paymentPlan.knowmore);
        } else if($scope.paymentSolution == "Lease/Term") {
            $scope.myRecords[0]['paymentSolution'] = convertToSce(structureData.paymentSolution.leaseTerm.tips);
            $scope.myRecords[1]['paymentSolution'] = convertToSce(structureData.paymentSolution.leaseTerm.toolkit);
            $scope.myRecords[2]['paymentSolution'] = convertToSce(structureData.paymentSolution.leaseTerm.knowmore);
        } else if($scope.paymentSolution == "Promotions") {
            $scope.myRecords[0]['paymentSolution'] = convertToSce(structureData.paymentSolution.promotions.tips);
            $scope.myRecords[1]['paymentSolution'] = convertToSce(structureData.paymentSolution.promotions.toolkit);
            $scope.myRecords[2]['paymentSolution'] = convertToSce(structureData.paymentSolution.promotions.knowmore);
        }  
        else {
            delete $scope.myRecords[0]['paymentSolution'];
            delete $scope.myRecords[1]['paymentSolution'];
            delete $scope.myRecords[2]['paymentSolution'];
        }

        if($scope.paymentSolution == "Lease/Term") {
            $scope.eotPrompt = true;
        } else {
            delete $scope.eot;
            $scope.eotPrompt = false;
            $scope.eotPurchase = "";
            $scope.eotRenewal = "";
        }
    })
    // Come back
    // $scope.$watchGroup(["eot.purchase", "eot.renew"], function() {
    //     MainFactory.updateEOT($scope.eot);
    //     if($scope.eot.purchase) {
    //         $scope.myRecords[0]['paymentSolution'] = convertToSce(structureData.paymentSolution.marketRateFinancing.tips);
    //         $scope.myRecords[1]['paymentSolution'] = convertToSce(structureData.paymentSolution.marketRateFinancing.toolkit);
    //         $scope.myRecords[2]['paymentSolution'] = convertToSce(structureData.paymentSolution.marketRateFinancing.knowmore);
    //     } 

    // })
    


    $scope.$watch('passThroughYes', function() {
        console.log("Triggered");
        MainFactory.updatePassThroughYes($scope.passThroughYes);
        if($scope.passThroughYes == "Renewal Services") {
            $scope.myRecords[0]['passThrough'] = convertToSce(structureData.passThroughYes.renewalServices.tips);
            $scope.myRecords[1]['passThrough'] = convertToSce(structureData.passThroughYes.renewalServices.toolkit);
            $scope.myRecords[2]['passThrough'] = convertToSce(structureData.passThroughYes.renewalServices.knowmore);
        } else if ($scope.passThroughYes == "Cloud Services") {
            $scope.myRecords[0]['passThrough'] = convertToSce(structureData.passThroughYes.cloudServices.tips);
            $scope.myRecords[1]['passThrough'] = convertToSce(structureData.passThroughYes.cloudServices.toolkit);
            $scope.myRecords[2]['passThrough'] = convertToSce(structureData.passThroughYes.cloudServices.knowmore);
        } else {
            delete $scope.myRecords[0]['passThrough'];
            delete $scope.myRecords[1]['passThrough'];
            delete $scope.myRecords[2]['passThrough'];
        }
    })

    
    $scope.updatePassThrough = function() {
        MainFactory.updatePassThrough($scope.passThrough);
        if($scope.passThrough == "Yes") {
            $scope.passThroughPrompt = true;
        } else {
            delete $scope.passThroughYes;
            $scope.passThroughPrompt = false;
        }
    }
    $scope.$watch('passThrough', function() {
        if($scope.passThrough == "Yes") {
            $scope.passThroughPrompt = true;
        } else {
            delete $scope.passThroughYes;
            $scope.passThroughPrompt = false;
        }
    })

    $scope.updateMidTerm = function() {
        MainFactory.updateMidTerm($scope.midTerm);
    }

    $scope.$watchGroup(["midTerm.migration", "midTerm.techRefresh", "midTerm.refinanceRollOver", "midTerm.saleLeaseBack", "midTerm.tradeIn"], function() {
        MainFactory.updateMidTerm($scope.midTerm);
        if($scope.midTerm.migration) {
            $scope.myRecords[0]['migration'] = convertToSce(structureData.midTerm.migration.tips);
            $scope.myRecords[1]['migration'] = convertToSce(structureData.midTerm.migration.toolkit);
            $scope.myRecords[2]['migration'] = convertToSce(structureData.midTerm.migration.knowmore);
        } else {
            delete $scope.myRecords[0]['migration'];
            delete $scope.myRecords[1]['migration'];
            delete $scope.myRecords[2]['migration'];
        }
        if($scope.midTerm.techRefresh) {
            $scope.myRecords[0]['techRefresh'] = convertToSce(structureData.midTerm.techRefresh.tips);
            $scope.myRecords[1]['techRefresh'] = convertToSce(structureData.midTerm.techRefresh.toolkit);
            $scope.myRecords[2]['techRefresh'] = convertToSce(structureData.midTerm.techRefresh.knowmore);
        } else {
            delete $scope.myRecords[0]['techRefresh'];
            delete $scope.myRecords[1]['techRefresh'];
            delete $scope.myRecords[2]['techRefresh'];
        }
        if($scope.midTerm.refinanceRollOver) {
            $scope.myRecords[0]['refinanceRollOver'] = convertToSce(structureData.midTerm.refinanceRollOver.tips);
            $scope.myRecords[1]['refinanceRollOver'] = convertToSce(structureData.midTerm.refinanceRollOver.toolkit);
            $scope.myRecords[2]['refinanceRollOver'] = convertToSce(structureData.midTerm.refinanceRollOver.knowmore);
        } else {
            delete $scope.myRecords[0]['refinanceRollOver'];
            delete $scope.myRecords[1]['refinanceRollOver'];
            delete $scope.myRecords[2]['refinanceRollOver'];
        }
        if($scope.midTerm.saleLeaseBack) {
            $scope.myRecords[0]['saleLeaseBack'] = convertToSce(structureData.midTerm.saleLeaseBack.tips);
            $scope.myRecords[1]['saleLeaseBack'] = convertToSce(structureData.midTerm.saleLeaseBack.toolkit);
            $scope.myRecords[2]['saleLeaseBack'] = convertToSce(structureData.midTerm.saleLeaseBack.knowmore);
        } else {
            delete $scope.myRecords[0]['saleLeaseBack'];
            delete $scope.myRecords[1]['saleLeaseBack'];
            delete $scope.myRecords[2]['saleLeaseBack'];
        }
        if($scope.midTerm.tradeIn) {
            $scope.myRecords[0]['tradeIn'] = convertToSce(structureData.midTerm.tradeIn.tips);
            $scope.myRecords[1]['tradeIn'] = convertToSce(structureData.midTerm.tradeIn.toolkit);
            $scope.myRecords[2]['tradeIn'] = convertToSce(structureData.midTerm.tradeIn.knowmore);
        } else {
            delete $scope.myRecords[0]['tradeIn'];
            delete $scope.myRecords[1]['tradeIn'];
            delete $scope.myRecords[2]['tradeIn'];
        }
    })
    $scope.$watch('crossBorder', function() {
        MainFactory.updateCrossBorder($scope.crossBorder);
        if($scope.crossBorder == "Yes") {
            $scope.myRecords[0]['crossBorder'] = convertToSce(structureData.crossBorderYes.tips);
            $scope.myRecords[1]['crossBorder'] = convertToSce(structureData.crossBorderYes.toolkit);
            $scope.myRecords[2]['crossBorder'] = convertToSce(structureData.crossBorderYes.knowmore);
        } else {
            delete $scope.myRecords[0]['crossBorder'];
            delete $scope.myRecords[1]['crossBorder'];
            delete $scope.myRecords[2]['crossBorder'];
        }
    })

    // Static Approvals
    $scope.myRecords[0]['approvals'] = convertToSce(structureData.approvals.tips);
    $scope.myRecords[1]['approvals'] = convertToSce(structureData.approvals.toolkit);
    $scope.myRecords[2]['approvals'] = convertToSce(structureData.approvals.knowmore);

    $scope.$watch('proposal', function() {
        MainFactory.updateProposal($scope.proposal);
        if($scope.proposal == "Yes") {
            $scope.myRecords[0]['proposal'] = convertToSce(structureData.proposalYes.tips);
            $scope.myRecords[1]['proposal'] = convertToSce(structureData.proposalYes.toolkit);
            $scope.myRecords[2]['proposal'] = convertToSce(structureData.proposalYes.knowmore);
        } else {
            delete $scope.myRecords[0]['proposal'];
            delete $scope.myRecords[1]['proposal'];
            delete $scope.myRecords[2]['proposal'];
        }
    })
});