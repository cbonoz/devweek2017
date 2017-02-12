// Adds download attribute to urls that ARE NOT websites or media files
myApp.directive('searchresult', function($compile) {
	// <tr ng-repeat='resource in catalogue | filter: filter_title | orderBy: "title"'><td><a ng-href='{{ resource.url }}' download='{{ resource.title }}'>{{ resource.title }}</a></td><td>{{ resource.description }}</td><td><span ng-repeat='section in resource.stepSections | unique: "section"'><a href='{{ section.route }}'>{{ section.section }}</a><span ng-if='!$last'>, </span></span></td></tr>
	// return {
	//     restrict: 'E',
	//     replace: true,
	//     scope: {
	//       source: '='
	//     },
	//     template: "<tr ng-repeat='resource in catalogue | filter: filter_title | orderBy: " + "title" + "'><td><a ng-href='{{ resource.url }}' download='{{ resource.title }}'>{{ resource.title }}</a></td><td>{{ resource.description }}</td><td><span ng-repeat='section in resource.stepSections | unique: " + "section" + "'><a href='{{ section.route }}'>{{ section.section }}</a><span ng-if='!$last'>, </span></span></td></tr>"
	// }
	return {
		// console.log(tElement);
		// console.log(tAttrs);

		template: function (tElement, tAttrs) {
			console.log(tElement);
		console.log(tAttrs);
			if(tAttrs) {
				if(tAttrs.catalogue) {
					return "<tr ng-repeat='resource in catalogue | filter: filter_title | orderBy: " + "title" + "'><td><a ng-href='{{ resource.url }}' download='{{ resource.title }}'>{{ resource.title }}</a></td><td>{{ resource.description }}</td><td><span ng-repeat='section in resource.stepSections | unique: " + "section" + "'><a href='{{ section.route }}'>{{ section.section }}</a><span ng-if='!$last'>, </span></span></td></tr>";
				}
			}
		}
	    // restrict: 'E',
	    // replace: true,
	    // scope: {
	    //   source: '='
	    // },
	    // template: "<tr ng-repeat='resource in catalogue | filter: filter_title | orderBy: " + "title" + "'><td><a ng-href='{{ resource.url }}' download='{{ resource.title }}'>{{ resource.title }}</a></td><td>{{ resource.description }}</td><td><span ng-repeat='section in resource.stepSections | unique: " + "section" + "'><a href='{{ section.route }}'>{{ section.section }}</a><span ng-if='!$last'>, </span></span></td></tr>"
	}
})
