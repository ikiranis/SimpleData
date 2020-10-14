import { createStore } from 'vuex'

const state = {
	data: [],
	fields: [],
	emptyRecord: {}
}

const mutations = {
	add(state, data) {
		state.data.push(Object.assign({}, data))
	},

	setFields(state, data) {
		state.fields = data
	},

	setEmptyRecord(state, data) {
		state.emptyRecord = data
	},

	addNullField(state, key) {
		state.emptyRecord[key] = null
	},

	setData(state, data) {
		state.data = data
	}
}

export default createStore({
	state,
	mutations
})
