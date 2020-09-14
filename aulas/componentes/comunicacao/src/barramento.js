//outra maneira de resolver a questão da comunicação entre irmãos
//é o uso de um barramento de eventos, que nada mais é do que uma
//instância vue que fará o gerenciamento dos eventos gerados

//esta não é uma solução de mercado (é recomendada apenas para apps menores)
//para apps maiores utilizaremos vuex
import Vue from 'vue'
export default new Vue({
    //podemos colocar métodos dentro do nosso barramento de eventos, 
    //para facilitar a comunicação entre componentes
    methods:{
        alterarIdade(idade){
            this.$emit('idadeMudou', idade)
        },
        quandoIdadeMudar(callback){
            this.$on('idadeMudou', callback)
        }
    }
})