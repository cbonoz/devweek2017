myApp.controller('CloseController', function($scope, $sce, MainFactory, CloseFactory) {
    // Variables that appear on multiple pages
    var sharedVariables = MainFactory.getSharedVariables();
    var closeData = CloseFactory.getCloseData();
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
    // Static Pre-Close
    $scope.myRecords[0]['preClose'] = convertToSce(closeData.preClose.tips);
    $scope.myRecords[1]['preClose'] = convertToSce(closeData.preClose.toolkit);
    $scope.myRecords[2]['preClose'] = convertToSce(closeData.preClose.knowmore);

    // Static Closing & Booking
    $scope.myRecords[0]['closingBooking'] = convertToSce(closeData.closingBooking.tips);
    $scope.myRecords[1]['closingBooking'] = convertToSce(closeData.closingBooking.toolkit);
    $scope.myRecords[2]['closingBooking'] = convertToSce(closeData.closingBooking.knowmore);

    // Include Booking Process Map

    // Static After-Booking
    $scope.myRecords[0]['afterBooking'] = convertToSce(closeData.afterBooking.tips);
    $scope.myRecords[1]['afterBooking'] = convertToSce(closeData.afterBooking.toolkit);
    $scope.myRecords[2]['afterBooking'] = convertToSce(closeData.afterBooking.knowmore);

    // Include Customer Onboarding Letter, Payment Process for Oracle Partners
});