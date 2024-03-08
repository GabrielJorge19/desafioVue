<script>

import Titulo from "../components/Header.vue";
import Butons from "../components/Butons.vue";
import SaveButton from "../components/SaveButton.vue";

export default {
    data() {
        return {
            addingText: '',
            editingIndex: -2,
            editingText: '',
            serverUrl: this.$store.state.serverUrl + 'produtos/'
        }

    },

    computed: {
        produtos() { return this.$store.state.produtos },
        clientes() { return this.$store.state.clientes },
    },

    methods: {
        changeStatus(index) {

            let newState = !this.produtos[index].status;
            let includes = false;

            // console.log();


            if (!newState) {

                let productId = this.produtos[index].id;

                for (let i = 0; i < this.clientes.length; i++) {
                    if (this.clientes[i].produtos.includes(productId) && this.clientes[i].status) {
                        includes = true;
                        i = this.clientes.length;
                    }
                }
            }

            if (newState || !includes) {
                fetch(this.serverUrl + this.produtos[index].id, {
                    method: 'PATCH',
                    body: JSON.stringify({
                        status: newState,
                    }),
                })
                    .then(() => {
                        this.produtos[index].status = newState;
                    })
            } else {
                console.log("Não é possivel desativar um produto enquanto há clientes usando")
            }
        },

        addProduct() {
            if (this.addingText.trim().length < 3) return;

            const produto = {
                id: this.produtos.length.toString(),
                nome: this.addingText,
                status: false,
            }

            fetch(this.serverUrl, {
                method: 'POST',
                body: JSON.stringify(produto),
            })
                .then(() => {
                    this.produtos.unshift(produto);
                    this.editingIndex = -2;
                })
        },

        deleteProduct(index) {

            fetch(this.serverUrl + this.produtos[index].id, {
                method: 'DELETE',
                // body: JSON.stringify(produto),
            })
                .then(() => {
                    this.produtos.splice(index, 1);
                })

        },

        editProduct(index) {
            fetch(this.serverUrl + this.produtos[index].id, {
                method: 'PATCH',
                body: JSON.stringify({
                    nome: this.editingText,
                }),
            })
                .then(() => {
                    this.produtos[index].nome = this.editingText;
                    this.editingIndex = -2;
                })
        }
    },

    components: {
        Titulo,
        Butons,
        SaveButton,
    }
}
</script>

<template>
    <div id="produtos-container">

        <Titulo link="/" linkTtitle="Clientes" title="Produtos"
            @headerPlusClick="if (editingIndex === -2) { editingIndex = -1; addingText = '' }" />
        <div id="produtos">
            <div class="produto editarProduto" v-if="editingIndex == -1">
                <input placeholder="Novo produto" :value="addingText"
                    @input="event => addingText = event.target.value" />
                <SaveButton @save="addProduct" @cancel="editingIndex = -2" />
            </div>

            <div v-for="(item, index) in produtos">
                <div v-if="editingIndex === index" class="produto editarProduto">
                    <input :value="item.nome" @input="event => editingText = event.target.value" />
                    <SaveButton @save="editProduct(index)" @cancel="this.editingIndex = -2" />
                </div>
                <div v-else class="produto">
                    <p>{{ item.nome }}</p>
                    <Butons :status="item.status" @changeStatus="changeStatus(index)"
                        @edit="if (editingIndex === -2) { editingIndex = index; editingText = item.nome }"
                        @delete="deleteProduct(index)" />
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>

#produtos {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 30px;

}

.produto {
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2%;

}

input {
    font-size: 1em;
    outline: none;
    border: 0px;
    padding: 10px 5px;
    flex-grow: 1;
    background-color: #eee;
    border-radius: 10px;
    display: flex;
    width: 20px;
}

@media (min-width: 768px) {

    #produtos-container {
        font-size: 1.5em;
    }

    div.produto:hover:not(.editarProduto) {
        outline: 5px solid white;
    }

    input {
        font-size: 1.3em;
        padding: 10px 20px;
    }
}
</style>