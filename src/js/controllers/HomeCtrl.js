angular.module('todoList').controller('HomeCtrl',function($scope,DataService){

    $scope.tasks=DataService.getToDoList();

    $scope.deleteList=function(key){
     	$scope.tasks.splice(key, 1);
        DataService.setToDoList($scope.tasks);
    };

    $scope.addNewList=function(){
     	$scope.tasks.push({"name":"","elements":[]});
        DataService.setToDoList($scope.tasks);
    };

    $scope.deleteElement=function(key,listKey){
        $scope.tasks[listKey].elements[key].deleted=true;
        DataService.setToDoList($scope.tasks);
    };

    $scope.addElement=function(listKey){
        $scope.tasks[listKey].elements.push({"task":"","done":false,"deleted":false});
        DataService.setToDoList($scope.tasks);
    };

    $scope.saveData=function(){
        DataService.setToDoList($scope.tasks);
    };
});