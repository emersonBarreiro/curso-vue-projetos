<template>
  <div id="app">{{titulo}}<button @click="titulo += '#'">Alterar Título</button></div>
  
</template>

<script>

//este é equivalente à instância vue
//sendo que podemos usar data e outros aqui
export default {
  data: function(){
      return{
        titulo: 'Teste Data usando vue js'
      }
  },
  
}
</script>

<style>
  #app{
    background-color: chocolate;
    color: #fff;
  }
</style>

