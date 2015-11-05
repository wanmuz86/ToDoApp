angular.module('starter.controllers', [])
    .controller('ToDoListCtrl', function ($scope, $ionicModal) {
		
		$scope.shouldShowDelete = false;
		 $scope.shouldShowReorder = false;
		 $scope.listCanSwipe = true
		 
		$scope.toDoListItems = [{
			    task: 'Learn ionic with Muz',
			    status: 'in progress'
			  }, {
			    task: 'Create an awesome app',
			    status: 'not done'
			  },
			  {
			  	task: 'Publish app in App Store',
			    status: 'not done'
			  }];
		 
		
		$ionicModal.fromTemplateUrl('modal.html', {
			
			scope: $scope,
			animation:'slide-in-up'
			}).then(function (modal){
				$scope.modal = modal;
			});
			
			$scope.openModal = function () {
				$scope.modal.show();
			};
			
		    $scope.closeModal = function() {
		      $scope.modal.hide();
		    };
			
			$scope.$on('$destroy', function () {
			  $scope.modal.remove();
			});
			
			$scope.addItem = function(data){
				$scope.toDoListItems.push({
					task: data.newItem,
					status: 'not done'
				});
				data.newItem = '';
				$scope.closeModal();
			};	
		});
