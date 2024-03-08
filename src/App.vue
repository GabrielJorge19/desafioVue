<script lang="ts">
import { RouterView } from 'vue-router';

export default {

  async mounted() {
    this.$store.dispatch("load");
  }

}

</script>

<template>
  <div id="content">
    <RouterView />
  </div>
</template>

<style>
#content {
  width: 98%;
  min-height: 300px;
  max-width: 900px;
  margin: auto;
  border-radius: 10px;
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  /* background-color: #fff; */
}

@media (min-width: 768px) {

  #content {
    /* width: 98%; */
  }

}
</style>