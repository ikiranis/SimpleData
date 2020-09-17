<template>
    <div class="mx-auto col-lg-6 col-12">
        <div class="mb-3">
            <text-input fieldId="name" labelText="Name" inputLength=20
                        :modelValue="record.name"
                        @update:modelValue="record.name = $event" />
        </div>

        <div class="mb-3">
            <text-input fieldId="city" labelText="City" inputLength=20
                        :modelValue="record.city"
                        @update:modelValue="record.city = $event" />
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
			const emptyRecord = {
				id: null,
				name: '',
				city: ''
			}

			let record = ref({emptyRecord})

			const addRecord = () => {
				emit('submit', record.value)
				record.value = {emptyRecord}
			}

			return {
				record,
				addRecord,
			}
		}
	}
</script>
