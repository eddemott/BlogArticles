;'use strict';

angular.module('common', ['dependencies']);;'use strict';

angular.module('dependencies', []);;angular.module('templates', ['app/app.view.html']);

angular.module('app/app.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/app.view.html',
		'');
}]);
