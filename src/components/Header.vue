<script setup>

import plus from '../assets/plus.svg'

const props = defineProps(['title', 'link', 'linkTtitle'])
const emit = defineEmits(['headerPlusClick'])

// console.log(props)

</script>

<template>
    <header id="header">
        <div>
            <svg id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512"
            xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            v-on:click="emit('headerPlusClick')">
            <path class="st0"
            d="M381,236H276V131c0-11-9-20-20-20s-20,9-20,20v105H131c-11,0-20,9-20,20s9,20,20,20h105v105c0,11,9,20,20,20  s20-9,20-20V276h105c11,0,20-9,20-20S392,236,381,236z" />
        </svg>
    </div>
        <p id="title">{{ title }}</p>
        <div style="text-align: right;">
            <RouterLink id="link" :to="link">{{ linkTtitle }}</RouterLink>
        </div>
    </header>
</template>

<style scoped>
#header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    font-size: 30px;
    color: white;
    margin: 20px 0px 40px;
}

header * {
    width: 33%;
}

#Layer_1 {
    cursor: pointer;
    width: 40px;
}

#Layer_1:hover {
    background-color: white;
    border-radius: 50%;

}

#Layer_1:hover .st0 {
    fill: black;
}

.st0 {
    fill: white;
}

#plus-button {
    padding: 5px 0px;
    width: 50px;
    color: white
}

#title {
    font-size: 50px;
    margin: 0px;
    text-align: center;

}

#link {
    font-size: .7em;
    padding: 5px 10px;
    color: #ccc;
    text-decoration: none;
    text-align: right;
    border-radius: 5px;
    transition: all .1s;
}

#link:hover {
    color: black;
    background-color: white;
}
</style>