<template>
  <el-card>
    <el-row type="flex">
      <h1>{{ player.name }}</h1>
      <h2 :style="{ marginLeft: '20px' }">#{{ player.number }} on the <router-link :to="`/daos/${player.dao}`">{{ player.dao }}</router-link></h2>
    </el-row>

    <h2>Trades:</h2>
    <el-table :data="player.trades" stripe>
      <el-table-column prop="from" label="From"></el-table-column>
      <el-table-column prop="to" label="To"></el-table-column>
      <el-table-column prop="transaction" label="Transaction ID"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Player',
  data() {
    return {
      player: {},
    };
  },
  async mounted() {
    const { data } = await axios.get(`http://localhost:3000/players/${this.$route.params.id}`);
    this.player = data;
  },
};
</script>

<style>
h1 {
  margin-top: 0;
}
</style>
