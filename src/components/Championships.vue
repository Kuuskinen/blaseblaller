<template>
  <div>
    <h1>Championships</h1>
    <div class="container">
      <div class="header row">
        <div class="col-md-4"><p>Name</p></div>
        <div class="col-md-4"><p>Main color</p></div>
        <div class="col-md-4"><p>Championships won</p></div>
      </div>
      <div v-for="team in info" :key="team.mainColor">
        <div class="row">
          <div class="col-md-4">{{team.fullName}}</div>
          <div class="col-md-4" v-bind:style="{ backgroundColor: team.mainColor}"></div>
          <div class="col-md-4">{{team.championships}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import blallerService from "@/blallerService";

export default {
  name: "Championships",
  //here are simply data
  data() {
    return{ info: null}
  },
  async mounted() {
    await blallerService.getTeams().then(response => (this.info = response.data));
  }
}
</script>

<style scoped>
.header {
  font-weight: bold;
}
</style>
