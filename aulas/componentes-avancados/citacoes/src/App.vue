<template>
	<div id="app">
		<span>
			<button @click="componente='Citacoes'">Citações</button>
			<button @click="componente='Sobre'">Sobre</button>
		</span>
		<!-- é possível usar componentes dinâmicos usando uma variável e a tag component -->
		<!-- toda vez que tiramos ou colocamos um componente dinâmico, este por padrão é criado ou destruído 
		 	 a tag keep-alive prevnine este comportamento-->
		<keep-alive>
			<component :is="componente">
		</keep-alive>
		
	</div>
</template>

<script>
import Citacoes from './components/Citacoes'
import Sobre from './components/Sobre'

export default {
	components: { Citacoes, Sobre },
	data(){
		return{
			
			componente : "Citacoes"
		}
	},
	
	
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-size: 1.6rem;
	}

	button {
        outline: none;
        padding: 5px 15px 10px;
        margin: 10px 5px;
        border-radius: 3px;
        font-size: 2rem;
        font-weight: 300;
        color: #FFF;
        background-color: rgba(0, 0, 0, .5);
    }
</style>