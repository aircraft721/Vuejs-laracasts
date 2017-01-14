Vue.component('task-list', {

	template: '<div><task v-for="task in tasks">{{ task.task }}</task></div>',

	data(){
		return {
			tasks: [

				{ task: 'Go to the store', completed: true },
                { task: 'Go to the mall', completed: false },
                { task: 'Go to the library', completed: true },
                { task: 'Go to the stadium', completed: false }
               

			]
		};
	}

});

Vue.component('task', {

	template: '<li><slot></slot></li>'

});

new Vue({
	el: '#root'
})