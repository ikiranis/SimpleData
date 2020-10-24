<template>
    <display-record :record="record" />
</template>

<script>
import DisplayRecord from "@/components/DisplayRecord"
import { useStore } from "vuex";
import { computed } from "vue";

export default {
    components: {
        DisplayRecord
    },
    props: {
        id: {
            required: true,
            type: Number
        }
    },

    setup(props) {
        const store = useStore()

        const data = computed(() => {
            return store.state.data
        })

        const record = data.value.find(item => {
            return item.id === parseInt(props.id)
        })

        return {
            data, record
        }
    }

}
</script>
