<template>
    <div class="mx-auto col-lg-6 col-12">
        <div class="mb-3">
            <div class="text-left">
                <label for="name">Name</label>
            </div>
            <div>
                <input id="name" type="text" class="form-control"
                       v-model="record.name" maxlength="20">
            </div>
        </div>

        <div class="mb-3">
            <div class="text-left">
                <label for="city">City</label>
            </div>
            <div>
                <input id="city" type="text" class="form-control"
                       v-model="record.city" maxlength="20">
            </div>
        </div>

        <button @click="addRecord" class="btn btn-warning mt-3 col-lg-6 col-12">Προσθήκη</button>

    </div>

</template>

<script>
	import {ref} from 'vue'

	export default {
		setup(props, { emit }) {
			let record = ref({
				id: null,
				name: '',
				city: ''
			})

            const addRecord = () => {
				emit('submit', record.value)
                record.value = {
					id: null,
					name: '',
					city: ''
                }
            }

			return {
				record,
                addRecord
			}
		}
	}
</script>
