<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do usuário <strong>{{idade}}</strong></p>
        <button @click="alterarIdade">Alterar Idade</button>
    </div>
</template>

<script>
import barramento from '@/barramento';

export default {
    //para fazermos a comunicação entre componentes irmãos,
    //devemos gerar uma prop que esteja tanto no componente pai
    //quanto em ambos, e fazemos a comunição entre um dos filhos e o pai,
    //sendo que este se encarregará de alterar o outro filho
    props: ['idade'],
    methods:{
        alterarIdade(){
            //caso formos alterar uma propriedade do elemento pai
            //não precisamos alterá-la aqui, pois ela
            //será alterada automaticamente devido aos props
            // this.idade = 33;

            //ao usarmos um barramento de eventos, 
            //o chamamos no lugar do this ao emitir o evento
            //e é recomendado que façamos isto dentro de um método
            this.idade = 33;
            barramento.alterarIdade(33)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
