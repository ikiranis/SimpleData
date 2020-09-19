import { ref } from 'vue'

export const useFields = () => {

	let json = require('@/fields.json')

	const fields = ref(json)

	let emptyRecord = ref({id: null})

	fields.value.forEach(item => {
		emptyRecord.value[item.id] = null
	})

	return {
		fields, emptyRecord
	}
}
