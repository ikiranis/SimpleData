<template>
    <table class="table">
        <thead>
            <tr>
                <th v-for="field in fields"
                    :key="field.id"
                    scope="col">{{ field.labelText }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in data" :key="item.id">
                <td v-for="field in fields"
                    :key="field.id">{{ item[field.id] }}</td>
            </tr>
        </tbody>
    </table>

</template>

<script>
	import { useFields } from '@/functions/fields'

	export default {
		props: {
			data: {
				required: true,
				type: Array
			}
		},

        setup() {
			const { fields, emptyRecord } = useFields()

            return {
				fields, emptyRecord
            }
        }
	}
</script>
