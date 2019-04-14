<template>
  <el-card>
    <el-row type="flex" justify="end">
      <el-col :offset="24">
        <el-button type="primary" v-on:click="navigateToCreateDAO">
          Create DAO
        </el-button>
      </el-col>
    </el-row>

    <el-table :data="daos" stripe @row-click="navigateToDAO">
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="symbol" label="Symbol" />

      <el-table-column label="Token Address">
        <template slot-scope="scope">
          <span v-if="scope.row.tokenAddress">{{scope.row.tokenAddress}}</span>
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
  name: 'DAOs',
  data() {
    return {
      daos: [],
    };
  },
  async mounted() {
    const { data } = await axios.get('http://localhost:3000/daos');
    this.daos = data;
  },
  methods: {
    navigateToCreateDAO() {
      this.$router.push('create-dao');
    },
    navigateToDAO(row, { label }) {
      if (label === 'Token Address' || label === 'Transaction ID') {
        return;
      }

      this.$router.push(`daos/${row.name}`);
    }
  },
};
</script>
