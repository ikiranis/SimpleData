// import { ref } from 'vue'
import {useStore} from "vuex";
import {computed} from "vue";

export const useFields = () => {
	const store = useStore()
	let json = require('@/../fields.json')

	const fields = computed(() => {
		return store.state.fields
	})

	store.commit('setFields', json)

	store.commit('addNullField', 'id')

	fields.value.forEach(item => {
		store.commit('addNullField', item.fieldId)
	})

	// return {
	// 	fields, emptyRecord
	// }
}
