<script>
import { store } from "../views/home/HomeController";
import * as Utils from "../utils/Utils";
import Button from "./Button.vue";
import ListTodo from "./ListTodo.vue";

export default {
  data() {
    return { store };
  },
  async created() {
    await store.getAllTodo();
    await store.getAllPhoto();
  },
  components: { Button, ListTodo },
};
</script>

<template>
  <button v-on:click="store.onIncreament">Click me</button>
  <Button title="An Vao toi" :onPressed="store.getAllPhoto" />
  <li>{{ store.count }}</li>
  <li>Id Product: {{ store.id }}</li>
  <br />
  <!-- <div>{{ store.todos.data }}</div> -->

  <ListTodo :apiModel="store.todos" :onPressed="store.onDetailPressed" />

</template>
