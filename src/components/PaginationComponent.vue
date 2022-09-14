<template>
    <div class="overflow-auto">
        <div class="mt-5 d-flex justify-content-end">
            <b-pagination :per-page="perPage" v-model="currentPage" pills :total-rows="rows"></b-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: "PaginationComponent",
    data() {
        return {
            rows: 50,
            perPage: 1,
            currentpage: 1
        }
    }
}
</script>
