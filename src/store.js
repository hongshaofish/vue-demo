import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		lists: [],
		title: '',
		content: ''
	},
	mutations: {
		addItem(state, value){
			state.lists.push(value);
		},
		checkDetail(state, value){
			state.title = value.title;
			state.content = value.content;
		}
	},
	actions: {

	}
})
