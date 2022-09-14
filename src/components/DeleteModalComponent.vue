<template>
    <div>
        <b-button v-b-modal.modal-center>
            <b-icon class="delete-btn" icon="trash-fill"></b-icon>
        </b-button>
        <b-modal id="modal-center" title="Delete Confirmation" @ok="deleteItem">
            <b-row class="d-flex justify-content-center">
                <img src="../assets/img/delete.svg" alt="" style="height:200px; width:200px">

            </b-row>
            <p class="my-4">Are you sure you want to proceed?</p>
        </b-modal>
    </div>
</template>
<script>
export default {
    name: "DeleteModalComponent",
    methods: {
        deleteItem(){
            console.log("Delete")
        }
    }
}
</script>