<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="-1"
    item-key="name"
    show-expand
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Expandable Table</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-switch
          v-model="singleExpand"
          label="Single expand"
          class="mt-2"
        ></v-switch>
      </v-toolbar>
    </template>
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">More info about {{ item.name }}</td>
    </template>
  </v-data-table>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      expanded: [],
      singleExpand: false,
      headers: [
        {
          text: "UserId",
          align: "start",
          sortable: true,
          value: "userId",
        },
        { text: "Id", value: "id" },
        { text: "Title", value: "title" },
        { text: "Completed", value: "completed" },
      ],
      items: [],
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => (this.items = response.data));
  },
};
</script>
