'use strict';

describe('Controller: skillsController', function () {

  // load the controller's module
  beforeEach(module('angularPortfolioApp'));

  var skillsController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    skillsController = $controller('skillsController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(skillsController.awesomeThings.length).toBe(3);
  });
});
