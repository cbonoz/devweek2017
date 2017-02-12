myApp.directive('download', function($compile) {
	var template = '<div ng-repeat="record in records"></div>';
	return {
	    scope: {
	      records: '='
	    },
	    restrict: 'A',
	    compile: function(ele) {
	      var transclude = ele.html();
	      ele.html('');

	      return function(scope, elem) {
	        var tpl = angular.element(template);
	        tpl.append(transclude);

	        $compile(tpl)(scope);

	        elem.append(tpl);
	      };
	    }
	}
})
