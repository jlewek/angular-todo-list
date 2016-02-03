angular.module('todoList').service('DataService',function() {
	
	/*

		===== PRIVATE SERVICE METHODS =====

	*/

	var saveObject=function(name, object){
		object=JSON.stringify(object);
		localStorage.setItem(name,object);
	};

	var getObject=function(name){
		var object=localStorage.getItem(name);
		object=JSON.parse(object);
		return object;
	};	

	/*

		===== PUBLIC SERVICE METHODS =====

	*/

    this.getToDoList=function(){
        var todoList=getObject('todoList');
        if(todoList==null){
            todoList=new Array();
        }

        return todoList;
    };

    this.setToDoList=function(listObject){
        saveObject('todoList',listObject)
    }
});