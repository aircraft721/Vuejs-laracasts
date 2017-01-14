Vue.component('task', {

	template: '<li><slot></slot></li>'

})

Vue.component('vardy', {
	template: '<h1><slot></slot></h1>'
})

Vue.component('musa', {
	template: '<h3><slot></slot></h3>'
})

new Vue({
	el: '#root'
})