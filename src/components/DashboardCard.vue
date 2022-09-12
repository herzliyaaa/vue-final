<template>
    <b-col cols="3" class="sales-card p-2">
        <b-row class="d-flex pl-3">
            <div>{{ title }} | <span>Today</span> </div>
        </b-row>
        <b-row class="px-1">
            <b-col cols="5" class="d-flex justify-content-center p-2">
                <div class="circle bg-info d-flex align-items-center justify-content-center">
                    <b-icon :icon="icon" font-scale="2.5"></b-icon>
                </div>
            </b-col>
            <b-col cols="7" class="d-flex flex-column justify-content-center">
                <div class="">
                    <h4>{{ value }}</h4>
                    <p>{{ description }}</p>
                </div>

            </b-col>
        </b-row>
    </b-col>
</template>

<script>
export default {
    name: "DashboardCard",
    props: {
        title: {
            type: String
        },
        icon: {
            type: String
        },
        description: {
            type: String
        },
        value: {
            type: Object.String
        }
    }
}
</script>

<style scoped>
.sales-card {
    background-color: #829BB8 !important;
    border-radius: 10px;
    color: white;
}

.circle {
    height: 75px;
    width: 75px;
    border-radius: 50%;
    background-color: #f1f1f1 !important;
}

.recent-activity {
    background-color: #F6F9FF;
    border-radius: 10px !important;
}

.sales-card span {
    font-size: 14px;
}

svg {
    color: #4A5376;
}

</style>