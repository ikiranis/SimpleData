<template>
    <div class="mx-auto col-lg-6 col-12 mt-5">

        <div  class="mb-3" v-for="field in fields" :key="field.fieldId">
            <text-input v-if="field.type === 'text'"
                        :fieldId="field.fieldId" :labelText="field.labelText" :inputLength="field.inputLength"
                        :modelValue="record[field.fieldId] ?? ''"
                        :dataType="field.dataType"
                        @update:modelValue="record[field.fieldId] = $event" />
        </div>

        <div class="row">
            <button @click="addRecord" class="btn btn-warning mt-3 col-lg-6 col-12 mx-auto">Προσθήκη</button>
        </div>

    </div>

</template>

<script>
	import { ref, computed } from 'vue'
	import TextInput from '@/components/input/Text'
	import { useStore } from "vuex"

	export default {
		components: {
			TextInput
		},

		setup() {
			const store = useStore()

            let fields = computed(() => {
                return store.state.fields
            })
            const emptyRecord =  store.state.emptyRecord

			let record = ref( Object.assign({}, emptyRecord) )

            const addRecord = () => {
                record.value.id = Date.now()
                store.commit('add', record.value)

                record.value = Object.assign({}, emptyRecord)
            }

			return {
				record,
				addRecord,
                fields
			}
		}
	}
</script>
