import { ref } from 'vue'

export const useFields = () => {

	// TODO read this from file
	const fields = ref([
		{
			id: 'name',
			labelText: 'Name',
			inputLength: 20
		},
		{
			id: 'city',
			labelText: 'City',
			inputLength: 20
		},
	])

	let emptyRecord = ref({})

	fields.value.forEach(item => {
		emptyRecord.value[item.id] = null
	})

	return {
		fields, emptyRecord
	}
}
