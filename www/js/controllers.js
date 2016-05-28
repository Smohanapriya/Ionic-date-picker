angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,ionicDatePicker){
    $scope.openDatePicker = function(date){
        $scope.setDate =2016+','+05+','+28;
        ipObj1.inputDate=new Date($scope.setDate);
        ionicDatePicker.openDatePicker(ipObj1);
    };

    var ipObj1 = {
       callback: function (dateValue) {  //Mandatory
          var Year = $filter('date')(new Date(dateValue), 'yyyy');
          var Month = $filter('date')(new Date(dateValue), 'MM');
          var Day = $filter('date')(new Date(dateValue), 'dd');
          $scope.Cust.custDATE= Day+'/'+Month+'/'+Year;
       },
       //from: new Date(1950, 1, 1), //Optional
       to: new Date(), //Optional
       inputDate: new Date($scope.setDate),      //Optional
       mondayFirst: true,          //Optional
       disableWeekdays: [0],       //Optional
       closeOnSelect: false,       //Optional
       templateType: 'popup'       //Optional
    };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
