import { createStore } from 'vuex'

const state = {
	data: [],
	fields: [],
	emptyRecord: {}
}

const mutations = {
	add(state, data) {
		state.data.push(data)
	},

	setFields(state, data) {
		state.fields = data
	},

	setEmptyRecord(state, data) {
		state.emptyRecord = data
	},

	addNullField(state, key) {
		state.emptyRecord[key] = null
	}
}

export default createStore({
	state,
	mutations
})
