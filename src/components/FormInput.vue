<template>
    <div class="mb-3">
        <b-form-group :label="label" id="label" class="ml-2">
        </b-form-group>
        <b-form-input :placeholder="'Enter ' + label" :value="value"></b-form-input>
        <!-- <div class="mt-2">Value: {{ text }}</div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: ""
        }
    },
    name: "FormInput",
    props: {
        label: {
            type: String
        },
        value: {
            type: String
        }

    }
}
</script>

<style scoped>
input:focus {
    border: solid 1px var(--primary-color);
}
</style>

<!-- :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)" -->