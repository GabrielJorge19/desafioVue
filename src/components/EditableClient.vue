<script setup>

const props = defineProps(['data'])
const emit = defineEmits(['save', 'cancel'])

addIcons(BiTrashFill)

</script>


<script>


import SaveButton from "./SaveButton.vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiTrashFill } from "oh-vue-icons/icons";

export default {

    data() {


        return {

            item: {
                id: this.data.id,
                nome: this.data.nome || '',
                documento: this.data.documento || '',
                telefone: this.data.telefone || '',
                email: this.data.email || '',
                status: this.data.status || false,
                produtos: this.data.produtos || []
            },

            produtos: this.$store.state.produtos,
        }

    },

    computed: {

        produtosParaAdicionar() {

            return this.produtos.filter(produto => {
                return !this.item.produtos.includes(produto.id) && produto.status;
            })
        }

    },

    methods: {
        save() {

            // Validar os dados e salva no servidor

            this.$emit('save', this.item);
        },

        deleteProduto(index) {
            this.item.produtos.splice(index, 1)
        }
    },

    components: {
        SaveButton,
        "v-icon": OhVueIcon,
    }
}
</script>

<template>
    <div id="EditableClientContainer">
        <div class="basicInfoClient">
            <input :value="item.nome" @input="event => item.nome = event.target.value" />
            <SaveButton @save="save" @cancel="emit('cancel')" />
        </div>
        <div class="moreInfoCliente">
            <div class="clientData">
                <div>
                    <span>CPF: </span>
                    <input :value="item.documento" @input="event => item.documento = event.target.value" />
                </div>
                <div>
                    <span>Telefone: </span>
                    <input :value="item.telefone" @input="event => item.telefone = event.target.value" />
                </div>
                <div>
                    <span>E-mail: </span>
                    <input :value="item.email" @input="event => item.email = event.target.value" />
                </div>

            </div>
            <div class="clientProduts">
                <select class="adicinarProduto"
                    @change="event => { item.produtos.unshift(event.target.value); event.target.options[0].selected = true }">
                    <option value="" selected>Adicionar produtos</option>
                    <option v-for="pro in produtosParaAdicionar" :value="pro.id">{{ pro.nome }}</option>
                </select>

                <div class="produtos">
                    <!-- <div v-for="(produto, indexProduto) in item.produtos" class="produto"> -->
                    <div v-for="(produto, indexProduto) in item.produtos" class="produto">
                        <span>
                            {{ produtos.find(p => p.id == produto).nome }}

                        </span>
                        <v-icon v-on:click="deleteProduto(indexProduto)" name="bi-trash-fill"
                            class="deleteProductButton" />
                    </div>
                    <!-- </div> -->
                    <span v-if="item.produtos.length == 0" class="naoHaProdutos">Não há produtos</span>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
#EditableClientContainer {
    padding-top: 20px;
}

input {
    font-size: .8em;
    outline: none;
    border: 0px;
    padding: 10px 20px;
    flex-grow: 1;
    width: 20px;
    background-color: #eee;
    border-radius: 10px;
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
    gap: 2%;
}

.moreInfoCliente {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
    border-top: 1px solid #ccc;
    padding-top: 20px;
    gap: 20px;
}

.clientData p {
    font-size: .9em;
    border: none;
    background-color: transparent;
    color: #888;
    outline: none;
    padding: 0px;
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
    gap: 20px;
}

.adicinarProduto {
    font-size: 20px;
    padding: 10px 20px;
    border: 1px solid #888;
    cursor: pointer;
    background-color: #bbb;
    outline: none;
    border-radius: 10px;
    text-align: center;
    color: white;
    text-align: center;
    font-weight: 700;
}

.produtos {
    display: flex;
    flex-wrap: wrap;
    gap: 5px
}

.produto {
    display: flex;
    align-items: center;
    gap: 5px;
    color: black;
    font-size: .8em;
    ;
    border-radius: 10px;
    background-color: #eee;
    padding: 10px 10px;
}

.deleteProductButton {
    cursor: pointer;
}

.naoHaProdutos {
    color: #888;
    text-align: center;
    width: 100%;
    /* padding: 0px; */
    margin: 10px;
    text-decoration: underline;
}

@media (min-width: 768px) {

    #clientes-container {
        font-size: 1.5em;
    }

    .moreInfoCliente {
        flex-direction: row;
        gap: 20px;
    }

    .clientData, .clientProduts{
        width: 48%;
    }

    .clientProduts {
        align-items: flex-end;
    }

    div.cliente:hover:not(.notAbleToHighlights) {
        outline: 5px solid white;
    }

    .produtos{
        /* flex-direction: column; */
        justify-content: flex-end;
    }
}
</style>