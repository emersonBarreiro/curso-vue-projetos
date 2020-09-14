<template>
    <div class="citacao">
        <!-- para passarmos informação de um pai para um filho
        sem usar props e diretamente pelo corpo, usamos
        a tag slot, sendo que dentor dela, podemos inclusive
        passar código html -->

        <!-- podemos nomear slots -->
        <slot name="autor"></slot>
        <slot></slot>
        <div class="autor"><slot name="fonte"></slot></div>
    </div>
</template>

<script>
export default {
    props: ['texto', 'fonte', 'autor']
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }

    .autor{
        float: right;
    }
    /* h1{
        color: red!important;
    } */
</style>
