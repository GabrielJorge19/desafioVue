<script>

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
        <button v-on:click.stop="emit('changeStatus')" class="status" :class="{ 'activeClient': status }" />
        <v-icon v-on:click.stop="emit('edit')" name="md-modeeditoutline" />
        <v-icon v-on:click.stop="emit('delete')" name="bi-trash-fill" />

    </div>
</template>

<style scoped>

.lineButtonsContainer {
    display: flex;
    align-items: center;
    gap: 15px;
}

.lineButtonsContainer * {
    cursor: pointer;
}

.status {
    width: 20px;
    height: 20px;
    background-color: red;
    border-radius: 30px;
    border: 0px;
    box-shadow: 0px 0px 3px red;
}

.activeClient {
    background-color: greenyellow;
    box-shadow: 0px 0px 3px greenyellow;

}

@media (min-width: 768px) {

    .lineButtonsContainer *:hover {
        transform: scale(1.5) translateY(-5px);
    }

}
</style>