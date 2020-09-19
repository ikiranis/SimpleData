<template>
    <div class="mx-auto col-lg-6 col-12">


        <div class="mb-3" v-for="field in fields" :key="field.fieldId">
            <text-input :fieldId="field.fieldId" :labelText="field.labelText" :inputLength="field.inputLength"
                        :modelValue="record[field.fieldId]"
                        @update:modelValue="record[field.fieldId] = $event" />
        </div>

        <button @click="addRecord" class="btn btn-warning mt-3 col-lg-6 col-12">Προσθήκη</button>

    </div>

</template>

<script>
	import {ref} from 'vue'
	import TextInput from '@/components/input/Text'

	export default {
		components: {
			TextInput
		},

		setup(props, {emit}) {
			// TODO read this from file
			const fields = [
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
			]

			let emptyRecord = {}

			fields.forEach(item => {
				emptyRecord[item.fieldId] = null
			})

			let record = ref({emptyRecord})

			const addRecord = () => {
				emit('submit', record.value)
				record.value = {emptyRecord}
			}

			return {
				record,
				addRecord,
                fields
			}
		}
	}
</script>
