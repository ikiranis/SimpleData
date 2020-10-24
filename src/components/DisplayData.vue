<template>
    <table class="table">
        <thead>
            <tr>
                <th v-for="field in filteredFields"
                    :key="field.id"
                    scope="col">{{ field.labelText }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in data" :key="item.id">
                <td><router-link :to="{ name: 'record', params: { id: item.id } }">Record</router-link></td>
                <td v-for="field in filteredFields"
                    :key="field.id">{{ item[field.fieldId] }}</td>
            </tr>
        </tbody>
    </table>

</template>

<script>
    import { computed } from 'vue'
	import { useStore } from "vuex"

	export default {
        setup() {
			const store = useStore()

			const fields = computed(() => {
				return store.state.fields
			})
			const emptyRecord = computed(() => {
				return store.state.emptyRecord
			})

			const filteredFields = computed(() => {
				return fields.value.filter((field) => {
					return field.main
                })
            })

			const data = computed(() => {
				return store.state.data
			})

            return {
				data, fields, emptyRecord, filteredFields
            }
        }
	}
</script>
