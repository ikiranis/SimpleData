import { ref } from 'vue'

export const useFields = () => {

	// TODO read this from file
	const fields = ref([
		{
			fieldId: 'name',
			labelText: 'Name',
			inputLength: 20
		},
		{
			fieldId: 'city',
			labelText: 'City',
			inputLength: 20
		},
	])

	let emptyRecord = ref({})

	fields.value.forEach(item => {
		emptyRecord.value[item.fieldId] = null
	})

	return {
		fields, emptyRecord
	}
}
