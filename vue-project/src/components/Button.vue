<script>

export default {
    props:{
        title: String,
        onPressed: Function
    }
}
</script>

<template>
    <button v-on:click="onPressed">{{title}}</button>
</template>