<template>
    <div class="mx-auto col-lg-6 col-12">

        <div class="mb-3" v-for="field in fields" :key="field.id">
            <text-input v-if="field.type === 'text'"
                        :fieldId="field.fieldId" :labelText="field.labelText" :inputLength="field.inputLength"
                        :modelValue="record[field.id]"
                        @update:modelValue="record[field.id] = $event" />
        </div>

        <button @click="addRecord" class="btn btn-warning mt-3 col-lg-6 col-12">Προσθήκη</button>

    </div>

</template>

<script>
	import {ref} from 'vue'
	import TextInput from '@/components/input/Text'
	import { useFields } from '@/functions/fields'

	export default {
		components: {
			TextInput
		},

		setup(props, {emit}) {
            const { fields, emptyRecord } = useFields()

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
