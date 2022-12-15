<script>
import ApiModel from "../common/model/ApiModel";
import Button from "./Button.vue";

export default {
  props: {
    apiModel: ApiModel,
    onPressed: Function,
  },
  methods: {
    onItemPressed: function (id) {
      this.onPressed(id);
    },
  },
  components: { Button },
};
</script>

<template>
  <div v-for="(item, index) in apiModel.data" v-if="apiModel.isOk()">
    <Button :onPressed="onItemPressed(item.id)" :title="item.title" />
  </div>
</template>
