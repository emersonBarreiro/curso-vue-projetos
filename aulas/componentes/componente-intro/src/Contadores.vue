<template>
  <div class="contadores">
      <app-contador v-for="c in 5" :key="c"/>
      
  </div>
</template>

<script>
//registrando localmente o componente dentro de outro

import Contador from './Contador.vue'
export default {
  components: {'app-contador': Contador}  
}
</script>

<style>
   /* a tag scoped, quando utilizada em um componente
  que chama outros, não tem seu estilo propagado para os componentes filhos,
  com exceção do elemento raiz */
  /* div{
    border: 1px solid red;
  } */
</style>
