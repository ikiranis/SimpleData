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
                <td v-for="field in filteredFields"
                    :key="field.id">{{ item[field.id] }}</td>
            </tr>
        </tbody>
    </table>

</template>

<script>
    // import { ref } from 'vue'
	import { useFields } from '@/functions/fields'
    import { computed } from 'vue'
	import { useStore } from "vuex";

	export default {
        setup() {
			const store = useStore()
			const { fields, emptyRecord } = useFields()

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
