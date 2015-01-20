var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
  $scope.phones = [
    {'name': 'Nexus 5',
     'snippet': 'Fast just got faster with Nexus 5.',
     'age': 2},
    {'name': 'Samsung Galaxy s5',
     'snippet': 'Subtly improved and smartly refined.',
     'age': 3},
    {'name': 'Nokia 3310',
     'snippet': 'INDUSTRUCTIBLE',
     'age': 4},
     {'name': 'iPhone 6 Plus',
     'snippet': 'The New Phablet.',
     'age': 1},
  ];

  $scope.orderProp = 'age';
});

describe('PhoneCat App', function() {

  describe('Phone list view', function() {

    beforeEach(function() {
      browser.get('app/index.html');
    });


    it('should filter the phone list as a user types into the search box', function() {

      var phoneList = element.all(by.repeater('phone in phones'));
      var query = element(by.model('query'));

      expect(phoneList.count()).toBe(4);

      query.sendKeys('nexus');
      expect(phoneList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(phoneList.count()).toBe(2);
    });
  });
});