<template>
  <el-card>
    <el-row type="flex" justify="end">
      <el-col :offset="24">
        <el-button type="primary">
          Scout New Player
        </el-button>
      </el-col>
    </el-row>

    <el-table :data="players" stripe>
      <el-table-column label="Name">
        <template slot-scope="scope">
          <router-link :to="`players/${scope.row.tokenId}`">{{scope.row.name}}</router-link>
        </template>
      </el-table-column>

      <el-table-column prop="height" label="Height" />
      <el-table-column prop="number" label="Number" />

      <el-table-column label="DAO">
        <template slot-scope="scope">
          <router-link :to="`daos/${scope.row.dao}`">{{scope.row.dao}}</router-link>
        </template>
      </el-table-column>

      <el-table-column label="Token ID">
        <template slot-scope="scope">
          <span v-if="scope.row.tokenId">{{scope.row.tokenId}}</span>
          <i v-else class="el-icon-loading" />
        </template>
      </el-table-column>

      <el-table-column label="Transaction ID">
        <template slot-scope="scope">
          <span v-if="scope.row.transaction">{{scope.row.transaction}}</span>
          <i v-else class="el-icon-loading" />
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Players',
  data() {
    return {
      players: [],
    };
  },
  async mounted() {
    const { data } = await axios.get('http://localhost:3000/players');
    this.players = data;
  },
};
</script>
