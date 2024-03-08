import { createStore } from 'vuex';

export default createStore({
    state: {
        clientes: [],
        produtos: [],
        serverUrl: "http://" + window.location.hostname + ":3050/",
    },
    getters: {
    },
    mutations: {
    },
    actions: {

        async load(context) {


            let clientes = await (await fetch(context.state.serverUrl + 'clientes')).json();
            let produtos = await (await fetch(context.state.serverUrl + 'produtos')).json();

            // console.log(clientes, produtos);

            context.state.produtos = produtos;
            context.state.clientes = clientes;
        }

    },
    modules: {
    },
})