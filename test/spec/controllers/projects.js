'use strict';

describe('Controller: projectsController', function () {

  // load the controller's module
  beforeEach(module('angularPortfolioApp'));

  var projectsController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    projectsController = $controller('projectsController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(projectsController.awesomeThings.length).toBe(3);
  });
});
