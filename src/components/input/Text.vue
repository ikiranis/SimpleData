<template>
    <div class="text-left">
        <label :for="fieldId">{{ labelText }}</label>
    </div>
    <div>
        <input :id="fieldId" class="form-control"
               :value="modelValue"
               @input="(event) => {
                   $emit('update:modelValue', event.target.value)
                   $emit('update:error', event.target.validity.valid)
               }"
               :type="dataType"
               :maxlength="inputLength">
    </div>
</template>

<script>
	export default {
		props: {
			labelText: {
				required: true,
				type: String
			},
			fieldId: {
				required: true,
				type: String
			},
			inputLength: {
				required: true,
				type: Number
			},
            modelValue: {
				required: true,
                type: String
            },
			dataType: {
				required: true,
				type: String
			}
		}
	}
</script>
