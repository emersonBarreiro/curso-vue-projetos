<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
        <citacao>
            <!-- quando nomeamos slots, devemos usar a propriedade 
            slot para informarmos a qual slot a informação que está
            sendo passada se refere -->

            <!-- quando temos um slot padrão, tudo que não estiver
            com a tag slot irá para dentro dele e podemos também repetir
            o nome do slot, sendo que todas as propriedes informadas para
            o slot em questão serão informadas-->
            <h1 slot="autor">{{citacoes[indice].autor}}</h1>
            <p>{{citacoes[indice].texto}}</p>
            <h6 slot="fonte">{{citacoes[indice].fonte}}</h6>
        </citacao>
    </div>
</template>

<script>
import citacao from '@/components/Citacao.vue'
export default {
    components:{
        citacao
    },
    data() {
        return {
            numero: 0,
            citacoes: [{
                fonte: 'Jornal do Empreendedor',
                texto: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
                autor: 'Margaret Mead'
            }, { 
                fonte: 'Frases de Mãe',
                texto: 'Isso não é um quarto, é um chiqueiro.',
                autor: 'Roberta'
            }, {
                fonte: 'Frases de Pai',
                texto: 'Vou contar até 3! 1, 2, 2...',
                autor: 'Gustavo'
            }]
        }
    },
    computed: {
        indice() {
            return Math.abs(this.numero % 3)
        }
    }
}
</script>

<style scoped>
    /*quando usamos slot, podemos estilizar 
    os elementos que estão dentro do componente
    tanto dentro do pai quanto daquele que tem
    o slot*/ 
    .citacoes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* h1{
        color: green!important;
    } */
</style>
