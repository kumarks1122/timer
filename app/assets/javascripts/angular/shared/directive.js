suvApp.directive('logTableRow', [function () {
  return {
    restrict: 'A',
    scope: {
      time: '='
    },
    link: function (scope, iElement, iAttrs) {
    	isLate = moment(scope.time).toDate() > moment(moment(scope.time).format("DD/MM/YYYY 10:01")).toDate()
    	if (isLate) {
    		$(iElement).addClass("danger")
    	}
    }
  };
}])