myApp.controller('ContractsController', function($scope, $sce, $element, MainFactory, ContractsFactory) {
    // Variables that appear on multiple pages
    var sharedVariables = MainFactory.getSharedVariables();
    var contractsData = ContractsFactory.getContractsData();
    $scope.programType = sharedVariables.programType;
    $scope.supplier = sharedVariables.supplier;
    $scope.creditEnhancements = sharedVariables.creditEnhancements;
    $scope.contractGeneration = sharedVariables.contractGeneration;

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
    $scope.$watch('programType', function() {
        MainFactory.updateProgramType($scope.programType);  
         if($scope.programType == "Managed Program") {
            // Contracts. Will need to create new function in contracts controller
            $scope.myRecords[0]['ofdProgramType'] = convertToSce(contractsData.programType.managedProgram.tips);
            $scope.myRecords[1]['ofdProgramType'] = convertToSce(contractsData.programType.managedProgram.toolkit);
            $scope.myRecords[2]['ofdProgramType'] = convertToSce(contractsData.programType.managedProgram.knowmore);
        } else if ($scope.programType == "Arranged Program") {
            $scope.myRecords[2]['creditProgramType'] = [{
                html: $sce.trustAsHtml("<a href='#' class='light-gray'>Under Construction</a>"),
            }];

            // Contracts
            $scope.myRecords[0]['ofdProgramType'] = convertToSce(contractsData.programType.arrangedProgram.tips);
            $scope.myRecords[1]['ofdProgramType'] = convertToSce(contractsData.programType.arrangedProgram.toolkit);
            $scope.myRecords[2]['ofdProgramType'] = convertToSce(contractsData.programType.arrangedProgram.knowmore);
        } else {
            delete $scope.myRecords[0]['ofdProgramType'];
            delete $scope.myRecords[1]['ofdProgramType'];
            delete $scope.myRecords[2]['ofdProgramType'];
        }
    })

    $scope.$watch('supplier', function() {
        MainFactory.updateSupplier($scope.supplier);
        if($scope.supplier == "Direct") {
            $scope.myRecords[0]['supplier'] = convertToSce(contractsData.supplier.direct.tips);
            $scope.myRecords[1]['supplier'] = convertToSce(contractsData.supplier.direct.toolkit);
            $scope.myRecords[2]['supplier'] = convertToSce(contractsData.supplier.direct.knowmore);
        } else if ($scope.supplier == "Indirect") {
            $scope.myRecords[0]['supplier'] = convertToSce(contractsData.supplier.indirect.tips);
            $scope.myRecords[1]['supplier'] = convertToSce(contractsData.supplier.indirect.toolkit);
            $scope.myRecords[2]['supplier'] = convertToSce(contractsData.supplier.indirect.knowmore);
        } else {
            delete $scope.myRecords[0]['supplier'];
            delete $scope.myRecords[1]['supplier'];
            delete $scope.myRecords[2]['supplier'];
        }
    })

    $scope.$watch('creditEnhancements', function() {
        MainFactory.updateCreditEnhancements($scope.creditEnhancements); 
        if($scope.creditEnhancements == "Yes") {
            $scope.myRecords[0]['creditEnhancements'] = convertToSce(contractsData.creditEnhancements.tips);
            $scope.myRecords[1]['creditEnhancements'] = convertToSce(contractsData.creditEnhancements.toolkit);
            $scope.myRecords[2]['creditEnhancements'] = convertToSce(contractsData.creditEnhancements.knowmore);
        } else {
            delete $scope.myRecords[0]['creditEnhancements'];
            delete $scope.myRecords[1]['creditEnhancements'];
            delete $scope.myRecords[2]['creditEnhancements'];
        } 
    });
    $scope.$watch('contractGeneration', function() {
        MainFactory.updateContractGeneration($scope.contractGeneration);
        if($scope.contractGeneration == "Manual") {
            $scope.myRecords[0]['contractGeneration'] = convertToSce(contractsData.contractGeneration.manual.tips);
            $scope.myRecords[1]['contractGeneration'] = convertToSce(contractsData.contractGeneration.manual.toolkit);
            $scope.myRecords[2]['contractGeneration'] = convertToSce(contractsData.contractGeneration.manual.knowmore);
        } else if ($scope.contractGeneration == "DocGen") {
             $scope.myRecords[0]['contractGeneration'] = convertToSce(contractsData.contractGeneration.docgen.tips);
            $scope.myRecords[1]['contractGeneration'] = convertToSce(contractsData.contractGeneration.docgen.toolkit);
            $scope.myRecords[2]['contractGeneration'] = convertToSce(contractsData.contractGeneration.docgen.knowmore);
        } else {
            delete $scope.myRecords[0]['contractGeneration'];
            delete $scope.myRecords[1]['contractGeneration'];
            delete $scope.myRecords[2]['contractGeneration'];
        }
    });
    // Static Contract Negotiation
    $scope.myRecords[0]['contractNegotiation'] = convertToSce(contractsData.contractNegotiation.tips);
    $scope.myRecords[1]['contractNegotiation'] = convertToSce(contractsData.contractNegotiation.toolkit);
    $scope.myRecords[2]['contractNegotiation'] = convertToSce(contractsData.contractNegotiation.knowmore);

});