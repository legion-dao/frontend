<template>
  <el-card>
    <el-row type="flex">
      <h1>{{ dao.name }}</h1>
      <h2 :style="{ marginLeft: '20px' }">({{ dao.symbol }})</h2>
    </el-row>

    <el-table :data="dao.players" empty-text="Add players to below" stripe>
      <el-table-column prop="name" label="Name"></el-table-column>
      <el-table-column prop="height" label="Height"></el-table-column>
      <el-table-column prop="number" label="Jersey Number"></el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button @click="removePlayer(scope.$index)" type="text" size="small">
            Trade Player
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import axios from 'axios';

export default {
  name: 'DAO',
  data() {
    return {
      dao: {},
    };
  },
  async mounted() {
    const { data } = await axios.get(`http://localhost:3000/daos/${this.$route.params.id}`);
    this.dao = data;
  },
};
</script>

<style>
h1 {
  margin-top: 0;
}
</style>
