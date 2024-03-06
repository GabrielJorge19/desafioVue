import { createStore } from 'vuex';

export default createStore({
    state: {
        clientes: [{
            id: 0,
            nome: 'Nome',
            documento: '12345678910',
            telefone: '(11) 912345678',
            email: 'email@gamail.com',
            status: false,
            produtos: []
        }, {
            id: 1,
            nome: 'Nome 2',
            documento: 'documento 2',
            telefone: 'telefone 2',
            email: 'email 2',
            status: false,
            produtos: [],
        }],

        produtos: [{
            id: 0,
            nome: 'Produto 1',
            status: false,
        }]
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    },
})