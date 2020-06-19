const task = {
	tasks: [{ 
		text: '1',
		completed: true
	},{
		text: '2',
		completed: false
	} , {
		text: '3',
		completed: false
	}],
	getTaskToDo() {
		return this.tasks.filter((task) => !task.completed);
	}
};

console.log(task.getTaskToDo());
