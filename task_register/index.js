var funq = require('../funq');
var register_tasks = [];

function register(taskConfig) {
	register_tasks.push(taskConfig);
	console.log('New task is registed. Current total tasks:' + register_tasks.length);
}

function getRegistedTasks() {
	return register_tasks;
}

// new task can be registed here
register(funq);

module.exports = function() {
	return {
		register,
		getRegistedTasks
	};
};