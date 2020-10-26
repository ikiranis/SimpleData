<template>
    <div class="mx-auto col-lg-6 col-12 mt-5">

        <form id="dataForm">
            <div class="mb-3" v-for="field in fields" :key="field.fieldId">
                <text-input v-if="field.type === 'text'"
                            :fieldId="field.fieldId" :labelText="field.labelText" :inputLength="field.inputLength"
                            :modelValue="record[field.fieldId] ?? ''"
                            @update:error="errors[field.fieldId] = $event"
                            :dataType="field.dataType"
                            @update:modelValue="record[field.fieldId] = $event"/>
            </div>
        </form>

        <div class="row mb-5">
            <button @click="addRecord" class="btn btn-warning mt-3 col-lg-6 col-12 mx-auto">Προσθήκη</button>
        </div>

    </div>

</template>

<script>
import {ref, computed} from 'vue'
import TextInput from '@/components/input/Text'
import {useStore} from "vuex"

export default {
    components: {
        TextInput
    },

    setup() {
        const store = useStore()

        let fields = computed(() => {
            return store.state.fields
        })
        const emptyRecord = store.state.emptyRecord

        let record = ref(Object.assign({}, emptyRecord))
        let errors = ref({})

        const addRecord = () => {
            if(checkValidation()) {
                return
            }

            record.value.id = Date.now()
            store.commit('add', record.value)

            record.value = Object.assign({}, emptyRecord)
        }

        const checkValidation = () => {
            return Object.values(errors.value).some(value => {
                return value === false
            })
        }

        return {
            record,
            addRecord,
            fields,
            errors
        }
    }
}
</script>
