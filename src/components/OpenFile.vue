<template>
    <img class="bi" src="@/../node_modules/bootstrap-icons/icons/cloud-arrow-up-fill.svg"
         title="Ανέβασμα αρχείου"
         @click="open = !open" >

    <div v-if="open" class="col-12 col-lg my-auto fixed-top">
        <div class="row">
            <div class="form-group my-3 col-lg-6 col-12 mx-auto">
                <div class="custom-file">
                    <input type="file" class="custom-file-input"
                           name="uploadFile" id="uploadFile"
                           accept='application/json'
                           @change="handleFile($event)">
                    <label class="custom-file-label"
                           for="uploadFile">Άνοιγμα αρχείου</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import { ref } from 'vue'

	export default {
		setup(_, { emit }) {
			let open = ref(false)

			const handleFile = (event) => {
				const file = event.target.files[0]
				const reader = new FileReader()

				reader.addEventListener("load", () => {
					emit('update:data', JSON.parse(reader.result))

					open.value = !open.value
				}, false)

				if (file) {
					reader.readAsText(file)
				}
			}

			return {
				open,
				handleFile
			}
		}
	}

</script>
