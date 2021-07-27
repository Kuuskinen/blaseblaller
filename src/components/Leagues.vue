<template>
  <div>
    <h1>Leagues</h1>
    <div class="container">
      <div v-for="division in info" :key="division.id">
        <div class="row">
          <div class="col-md-12"><h3>{{division.name}}</h3></div>
        </div>
        <div class="row">
          <div class="header col-md-6"><p>Teams</p></div>
          <div class="header col-md-6"><p>Championships won</p></div>
        </div>
        <div v-for="team in division.teams" :key="team.id" class="team row">
          <div class="col-md-6">{{team.fullName}}</div>
          <div class="championships col-md-6" v-if="team.championships > 0"><span class="circle">{{team.championships}}</span></div>
          <div class="championships col-md-6" v-else>{{team.championships}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import blallerService from "@/blallerService";

export default {
  name: "Leagues",
  data() {
    return{ info: null}
  },
  async mounted() {
    await blallerService.getLeagues().then(response => (this.info = response.data));
  }
}
</script>

<style scoped>

h3 {
  padding-top: 15px;
}

.team {
  display: flex;
  align-items: center;
  border-bottom: 2px solid gray;
  margin-bottom: 3px
}

.header {
  font-weight: bold;
}

.championships {
  padding: 15px;
}

.circle {
  border-radius: 100%;

  border: 3px solid gold;
  background-color: gold;

  width: 24px;
  display: inline-block;

  /*padding: 10px;*/

  text-align: center;
  font: 20px Arial, sans-serif;
}
</style>
