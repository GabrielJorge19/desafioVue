<script setup>

const emit = defineEmits(['save', 'cancel'])

</script>

<template>
    <button v-on:click="emit('cancel')" class="cancel">Cancelar</button>
    <button v-on:click="emit('save')" class="save">Salvar</button>
</template>

<style scoped>

button {
    font-size: .7em;
    border-radius: 10px;
    padding: 11px 10px;
    border: 2px solid #888;
    font-weight: 700;
    cursor: pointer;
    height: 100%;
}

.save {
    background-color: yellow;
    background-color: #888;
    color: white
}

.cancel {
    background-color: white;
    color: #888
}

button:hover {
    transform: scale(1.1);
}

@media (min-width: 768px) {
    button {
        /* font-size: 1em; */
    }
}
</style>