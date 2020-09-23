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
	import { useFields } from '@/functions/fields'
    import { computed } from 'vue'

	export default {
		props: {
			data: {
				required: true,
				type: Array
			}
		},

        setup() {
			const { fields, emptyRecord } = useFields()

			const filteredFields = computed(() => {
				return fields.value.filter((field) => {
					return field.main
                })
            })

            return {
				fields, emptyRecord, filteredFields
            }
        }
	}
</script>
