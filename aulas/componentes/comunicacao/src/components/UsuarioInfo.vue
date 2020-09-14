<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome de Usuário: <strong>{{inverterNome()}}</strong></p>
        <p>Idade do usuário: <strong>{{idade}}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn()">Reiniciar Nome (callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento';
export default {
    //usamos propriedades para propagar propriedades entre componentes pai e filhos
    //IMPORTANTE: props são case sensitive
    //podemos normalmente usar os props como atributos dos componentes filhos
    //obs: não podemos repetir um nome que esteja nas props dentro do data de um componente
    //para evitar erros devido à tipo, podemos declarar um objeto com as props e os seus respctivos tipos 
    props: {
        
        nome: {
            type: String,
            // required: true,
            // default: function(){
            //     return Array(10).fill(0).join(',')
            // }
            default: "Anônimo",
           
        },
        //podemos também usar uma função de callback
        reiniciarFn: Function,
        idade: Number
    },
    data(){
        return{
            nomeAlternativo: this.nome
        }
    },
    methods: {
        inverterNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            //const antigo = this.nome;
            this.nome = "Emerson";
            //usamos $emit para emitir um evento para notificar o componente pai de que
            //houve mudança no atributo passado
            this.$emit('nomeMudou', this.nome);
            // também podemos passar um objeto 
            // no caso, no componente pai, chamaríamos
            // $event.novo ou $event.antigo
            // {
            //     novo: this.nome,
            //     antigo
            // }
        }
    },
    created(){
        //ao usar o barramento de eventos, usamos a 
        //função created e o $on para escutar o evento desejado
        //a função $on recebe o nome do evento que desejamos ouvir 
        //e uma função de callback
        barramento.quandoIdadeMudar(idade=> {
            this.idade = idade;
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
