<template>
    <div class="mb-3">
        <label for="datepicker" class="ml-2 mb-2">{{ label }}</label>
        <b-form-datepicker id="datepicker" v-model="newDate" :date-format-options="{ year: 'numeric', month: 'long', day: '2-digit' }" disabled>
        </b-form-datepicker>
    </div>
</template>

<script>
export default {
    name: "DatePicker",
    props: {
        label: {
            type: String
        }
    },
    data() {
        return {
            newDate: new Date()
        }
    },
}
</script>

<style scoped>
</style>