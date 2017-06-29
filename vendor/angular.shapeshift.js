(function (window, angular, undefined) {
	'use strict';

	angular.module('shapeshift', [])
		.value('shapeShiftConfig', {})
		.directive('ngShape', ['shapeShiftConfig', '$log', '$timeout', function (shapeShiftConfig, $log, $timeout) {
			return {
				restrict: 'EA',
				replace: true,
				scope: {
					options: '=?',
					selector: '@'
				},
				link: function (scope, element) {
					var i = 0, shapesOptions = {
						gutterX: 0,
						gutterY: 0,
						paddingX: 0,
						paddingY: 0,
						colWidth: 0,
						animateOnInit: false
					};

					if (!angular.element.fn || !angular.element.fn.jquery) {
						$log.error('angular-shapeshift: jQuery should be included before AngularJS!');
						return;
					}

					if (!angular.element.fn || !angular.element.fn.shapeshift) {
						$log.error('angular-shapeshift: jQuery.ShapeShit is not loaded');
						return;
					}

					shapesOptions = angular.extend(shapesOptions, scope.options);

					$timeout(() => {
						$(element).find(scope.selector).shapeshift(shapesOptions);
					});

					element.on('ss-rearranged', function (e, params) {});
					element.on('ss-removed', function (e, params) {});
				}
			};
		}]);

})(window, window.angular);
