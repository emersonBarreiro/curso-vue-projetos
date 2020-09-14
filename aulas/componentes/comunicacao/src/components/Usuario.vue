<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p> Nome é <strong>{{nome}}</strong></p>
        <p> Idade é <strong>{{idade}}</strong></p>
        <button @click="alterarNome">Alterar Nome</button>
        <hr>
        <div class="componentes">
            <!-- propriedades são passadas como partes das tags html -->
            <!-- eventos podem ser usados via v-on ou @ -->
            <app-usuario-info :nome="nome" 
            :reiniciarFn = "reiniciarNome" :idade="idade"
            @nomeMudou="nome=$event.novo + $event.antigo"
            />
            <app-usuario-editar :idade="idade" 
            />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data(){
        return {
            nome: 'Emerson',
            idade: 20
        }
    },
    methods:{
        alterarNome(){
            this.nome = 'Priscyla'
        },
        reiniciarNome(){
            this.nome = 'Emerson'
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
