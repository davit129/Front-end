<template>
  <div>
    <template>
      <js-todos></js-todos>
      <js-users></js-users>
    </template>
  </div>
</template>

<script>
import JsTodos from "./components/JsTodos.vue";
import JsUsers from "./components/JsUsers.vue";
export default {
  components: {
    JsTodos,
    JsUsers,
  },
};
</script>
