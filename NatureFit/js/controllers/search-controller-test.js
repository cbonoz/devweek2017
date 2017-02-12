myApp.controller('SearchController', function($scope, $sce, MainFactory, SearchFactory) {
    // Variables that appear on multiple pages
    var sharedVariables = MainFactory.getSharedVariables();
    $scope.catalogue = SearchFactory.getCatalogue();
    // retrieve singular definition for readability on view
    $scope.definition = MainFactory.getDefinitions();
    $scope.downloadResource = function(resource) {
        // only works for chrome
        // var link = document.createElement('a');
        // link.download = resource.title + ".xls";
        // link.href = 'data:,' + resource.url;
        // link.click();
        var ext = resource.url.substr(resource.url.lastIndexOf('.') + 1);
        var mimeType;
        // https://www.sitepoint.com/web-foundations/mime-types-summary-list/
        // Supports .doc, .docx, 
        if(ext == ".doc") {
            mimeType = "application/msword";
        } else if (ext == "docx") {
            mimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
        } else if (ext == "html") {
            mimeType = "text/html";
        } else if (ext == "pdf") {
            mimeType = "application/pdf";
        } else if (ext == "ppt") {
            mimeType = "application/vnd.ms-powerpointtd>";
        } else if (ext == "pptx") {
            mimeType = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
        } else if (ext == "txt") {
            mimeType = "text/plain";
        } else if (ext == "xls") {
            mimeType = "application/vnd.ms-excel";
        } else if (ext == "xlsx") {
            mimeType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        } else if (ext == "xml") {
            mimeType = "application/xml";
        } else if (ext == "zip") {
            mimeType = "application/zip, application/x-compressed-zip";
        } else {
            mimeType = "";
        }
        download(resource.url, resource.title, mimeType);
    }

       // var a = document.createElement("a");
       //  document.body.appendChild(a);
       //  a.style = "display: none";
       //  return function (data, fileName) {
       //      var json = JSON.stringify(data),
       //          blob = new Blob([json], {type: "octet/stream"}),
       //          url = window.URL.createObjectURL(blob);
       //      a.href = url;
       //      a.download = fileName;
       //      a.click();
       //      window.URL.revokeObjectURL(url);
       //  };


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


});