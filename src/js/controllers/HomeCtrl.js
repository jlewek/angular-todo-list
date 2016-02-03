angular.module('todoList').controller('HomeCtrl',function($scope,DataService){

    $scope.tasks=DataService.getToDoList();

    $scope.addNewList=function(){
     	alert('This is beta version. Wait for next release.');
    };

    $scope.deleteElement=function(key){
        $scope.tasks[key].deleted=true;
        DataService.setToDoList($scope.tasks);
    };

    $scope.addElement=function(){
        $scope.tasks.push({"task":"","done":false,"deleted":false});
        DataService.setToDoList($scope.tasks);
    };

    $scope.saveData=function(){
        DataService.setToDoList($scope.tasks);
    };
});