<script>

import Titulo from "../components/Header.vue";
import Butons from "../components/Butons.vue";
import EditableClient from "../components/EditableClient.vue";

export default {

    data() {

        return {
            seeing: -1,
            editingClientIndex: -2,
            serverUrl: this.$store.state.serverUrl + 'clientes/'
        }

    },

    computed: {
        clientes() { return this.$store.state.clientes },
        produtos() { return this.$store.state.produtos }
    },

    methods: {
        changeActive(index) {

            let newState = !this.clientes[index].status;

            fetch(this.serverUrl + this.clientes[index].id, {
                method: 'PATCH',
                body: JSON.stringify({
                    status: newState,
                }),
            })
                .then(() => {
                    this.clientes[index].status = newState;
                })
        },

        addClient(data) {
            let index = (this.editingClientIndex < 0) ? 0 : this.editingClientIndex;
            let del = (this.editingClientIndex < 0) ? 0 : 1;

            fetch(this.serverUrl, {
                method: 'POST',
                body: JSON.stringify(data),
            })
                .then(() => {
                    this.clientes.splice(index, del, data);
                    this.editingClientIndex = -2;
                })
        },

        editClient(data) {
            let index = this.editingClientIndex;
            let del = 1;

            fetch(this.serverUrl + data.id, {
                method: 'PUT',
                body: JSON.stringify(data),
            })
                .then(() => {
                    this.clientes.splice(index, del, data);
                    this.editingClientIndex = -2;
                })
        },

        deleteClient(index) {

            fetch(this.serverUrl + this.clientes[index].id, {
                method: 'DELETE',
                // body: JSON.stringify(produto),
            })
                .then(() => {
                    this.clientes.splice(index, 1);
                })

        }

    },

    components: {
        Titulo,
        Butons,
        EditableClient
    }

}
</script>

<template>
    <div id="clientes-container">
        <Titulo link="produtos" linkTtitle="Produtos" title="Clientes"
            @headerPlusClick="editingClientIndex = (editingClientIndex == -2) ? -1 : editingClientIndex" />

        <div id="clientes">

            <EditableClient v-if="editingClientIndex == -1" class="cliente notAbleToHighlights"
                :data="{ id: clientes.length.toString() }" @save="addClient" @cancel="editingClientIndex = -2" />

            <div class="cliente" v-for="(item, index) in clientes" :class="{ 'notAbleToHighlights': seeing === index || editingClientIndex != -2 }">
                <div v-if="index != editingClientIndex">
                    <div class="basicInfoClient" v-on:click="seeing = (seeing === index) ? -1 : index">
                        <p class="nome">{{ item.nome }}</p>
                        <Butons @changeStatus="changeActive(index)" @delete="deleteClient(index)"
                            @edit="editingClientIndex = (editingClientIndex == -2) ? index : editingClientIndex"
                            :status="item.status" />
                    </div>
                    <div class="moreInfoCliente" :class="{ 'moreInfoClienteShow': seeing === index }">
                        <div class="clientData">
                            <div>
                                <span>CPF: </span>
                                <p> {{ item.documento }} </p>
                            </div>
                            <div>
                                <span>Telefone: </span>
                                <p> {{ item.telefone }} </p>
                            </div>
                            <div>
                                <span>E-mail: </span>
                                <p> {{ item.email }} </p>
                            </div>
                        </div>
                        <div class="clientProduts">
                            <h4>Produtos</h4>
                            <p v-for="(produto, index) in item.produtos" class="produto">


                                {{ produtos.find(p => p.id == produto).nome }}
                            </p>
                            <p v-if="item.produtos.length == 0">Não há produtos</p>
                        </div>
                    </div>
                </div>
                <EditableClient v-else class="cliente notAbleToHighlights" :data="item" @save="editClient" @cancel="editingClientIndex = -2" />
            </div>
        </div>
    </div>
</template>


<style scoped>
#clientes-container {
    display: flex;
    flex-direction: column;
    /* font-size: 1.5em; */
}

#clientes {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 30px;
}

.cliente {
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
}

.basicInfoClient {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
}

.moreInfoCliente {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-height: 0px;
    transition: max-height .25s linear, margin-top .3s linear;
    overflow: hidden;
}

.clientData p {
    font-size: .9em;
    border: none;
    background-color: transparent;
    color: #888;
    outline: none;
    padding: 0px;
}

.moreInfoClienteShow {
    max-height: 100vh;
    margin-top: 10px;
    border-top: 1px solid #ccc;
    padding-top: 20px;
}

.clientData {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.clientData div {
    display: flex;
    align-items: center;
    gap: 10px;
}

.clientData span {
    font-size: .7em;

}

.clientProduts {
    display: flex;
    flex: 1;
    flex-direction: column;
    /* align-items: flex-end; */
    gap: 5px;
}

.produto {
    font-size: .8em;
    padding: 0px 0px 0px 0px;
    color: #888;
}

@media (min-width: 600px) {

    #clientes-container {
        font-size: 1.5em;
    }

    .moreInfoCliente {
        flex-direction: row;
        gap: 20px;
    }

    .clientProduts {
        align-items: flex-end;
    }

    div.cliente:hover:not(.notAbleToHighlights) {
        outline: 5px solid white;
    }
}
</style>