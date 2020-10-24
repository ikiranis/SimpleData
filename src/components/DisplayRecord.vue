<template>
    <div v-for="field in fields" :key="field.id">
        <span>{{ field.labelText }}</span>:
        <span>{{ record[field.fieldId] }} </span>
    </div>
</template>

<script>
    import {useStore} from "vuex";
    import {computed} from "vue";

    export default {
        props: {
            record: {
                required: true,
                type: Object
            }
        },

        setup() {
            const store = useStore()

            const fields = computed(() => {
                return store.state.fields
            })

            return {
                fields
            }
        }
    }
</script>
