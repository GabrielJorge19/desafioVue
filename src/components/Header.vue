<script setup>

const props = defineProps(['title', 'link', 'linkTtitle'])
const emit = defineEmits(['headerPlusClick'])

// console.log(props)

</script>

<template>
    <header id="header">
        <div>
            <svg class="headerButtons" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1"
                viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" v-on:click="emit('headerPlusClick')">
                <path class="st0"
                    d="M381,236H276V131c0-11-9-20-20-20s-20,9-20,20v105H131c-11,0-20,9-20,20s9,20,20,20h105v105c0,11,9,20,20,20  s20-9,20-20V276h105c11,0,20-9,20-20S392,236,381,236z" />
            </svg>
        </div>
        <p id="title">{{ title }}</p>
        <div class="RouterLinkDiv">
            <RouterLink id="link" :to="link" class="">{{ linkTtitle }}</RouterLink>
        </div>
    </header>
</template>

<style scoped>
#header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 30px;
    color: white;
    margin: 20px 0px 40px;
}

#header div {
    width: 20%;
}

#Layer_1 {
    cursor: pointer;
    width: 30px;
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
    font-size: 2.5rem;
    margin: 0px;
    text-align: center;
    flex-grow: 1;
    transform: translateY(-20px);
}

#link {
    font-size: .5em;
    padding: 5px 10px;
    color: #ccc;
    text-decoration: none;
    text-align: right;
    border-radius: 5px;
    transition: all .1s;
}

.RouterLinkDiv {
    justify-content: flex-end;
    display: flex;
}

@media (min-width: 768px) {
    #title {
        font-size: 3rem;
    }

    #link {
        font-size: .7em;
    }

    #Layer_1:hover {
        background-color: white;
        border-radius: 50%;
    }

    #Layer_1:hover .st0 {
        fill: black;
    }

    #link:hover {
        color: black;
        background-color: white;
    }
}
</style>