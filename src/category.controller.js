(function () {
'use strict';

angular.module('MenuApp')
.controller('categoriesController', categoriesController);

categoriesController.$inject = ['allcat'];
function categoriesController(allcat) {
var categoryCtrl = this;
categoryCtrl.allcat = allcat.data;
console.log(categoryCtrl.allcat);
}

})();
