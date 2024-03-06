<script>
import {defineProps, defineEmits } from 'vue';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiTrashFill, MdModeeditoutline } from "oh-vue-icons/icons";

export default {
    name: 'Butons',
    components: {        
        "v-icon": OhVueIcon,
    }
}

</script>


<script setup>

const props = defineProps(['status'])
const emit = defineEmits(['changeStatus', 'edit', 'delete'])

addIcons(BiTrashFill, MdModeeditoutline)

</script>

<template>
    <div class="lineButtonsContainer">
        <!-- <button v-on:click.stop="emit('changeStatus')" class="status" :class="{ 'activeClient': status }"> {{ (status) ? "Ativo" : "Inativo" }}</button> -->
        <button v-on:click.stop="emit('changeStatus')" class="newStatus" :class="{ 'activeClient': status }" alt="algum texto" />
        <v-icon v-on:click.stop="emit('edit')" name="md-modeeditoutline" />
        <v-icon v-on:click.stop="emit('delete')" name="bi-trash-fill" />

    </div>
</template>

<style scoped>
.lineButtonsContainer{
    display: flex;
    align-items: center;
    gap: 15px;
}

.lineButtonsContainer * {
    cursor: pointer;
}

.lineButtonsContainer *:hover {
    transform: scale(1.5) translateY(-5px);
}

.newStatus{
    width: 20px;
    height: 20px;
    background-color: red;
    border-radius: 30px;
    border: 0px;
    box-shadow: 0px 0px 3px red;
}

.activeClient{
    background-color: greenyellow;
    box-shadow: 0px 0px 3px greenyellow;

}













.status {
    width: 20%;
    padding: 10px 10px;
    border-radius: 10px;
    font-size: 20px;
    border: none;
    background-color: #ccc;

}

.status:hover {
    box-shadow: 2px 2px 3px #444;
    transform: scale(.9);
}


</style>