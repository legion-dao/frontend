<template>
  <el-card>
    <el-row type="flex" justify="end">
      <el-col :offset="24">
        <el-button type="primary" v-on:click="navigateToCreateProposal">
          Create Proposal
        </el-button>
      </el-col>
    </el-row>

    <el-table :data="proposals" stripe @row-click="navigateToDAO">
      <el-table-column prop="aTeam" label="Team A" />
      <el-table-column prop="aTeamPlayers" label="Team A Players" />

      <el-table-column prop="bTeam" label="Team B" />
      <el-table-column prop="bTeamPlayers" label="Team B Players" />
    </el-table>
  </el-card>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Proposals',
  data() {
    return {
      proposals: [],
    };
  },
  async mounted() {
    const { data } = await axios.get('http://localhost:3000/proposals');
    this.proposals = data;
  },
  methods: {
    navigateToCreateProposal() {
      this.$router.push('proposals/create');
    },
    navigateToProposal(row, { label }) {
      // this.$router.push(`daos/${row.name}`);
    }
  },
};
</script>
