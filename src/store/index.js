import { createStore } from 'vuex'

const state = {
	data: []
}

const mutations = {
	add(state, data) {
		state.data.push(data)
	}
}

export default createStore({
	state,
	mutations
})
