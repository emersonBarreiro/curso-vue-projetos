<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome de Usuário: <strong>{{inverterNome()}}</strong></p>
    </div>
</template>

<script>
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
            default: "Anônimo"
        }
    },
    data(){
        return{
            nomeAlternativo: this.nome
        }
    },
    methods: {
        inverterNome(){
            return this.nome.split('').reverse().join('')
        }
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
