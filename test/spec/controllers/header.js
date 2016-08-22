'use strict';

describe('Controller: headerController', function () {

  // load the controller's module
  beforeEach(module('angularPortfolioApp'));

  var headerController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    headerController = $controller('headerController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(headerController.awesomeThings.length).toBe(3);
  });
});
