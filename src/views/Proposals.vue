<template>
  <el-card>
    <el-row type="flex" justify="end">
      <el-col :offset="24">
        <el-button type="primary" v-on:click="navigateToCreateProposal">
          Create Proposal
        </el-button>
      </el-col>
    </el-row>

    <el-table :data="proposals" stripe @row-click="navigateToProposal">
      <el-table-column prop="aTeam" label="Team A" />
      <el-table-column prop="selectedATeamPlayers.length" label="Team A Player Count" />

      <el-table-column prop="bTeam" label="Team B" />
      <el-table-column prop="selectedBTeamPlayers.length" label="Team B Player Count" />

      <el-table-column prop="status" label="Status" />

      <el-table-column label="Proposal Address">
        <template slot-scope="scope">
          <span v-if="scope.row.proposalAddress">{{scope.row.proposalAddress}}</span>
          <i v-else class="el-icon-loading" />
        </template>
      </el-table-column>
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
      this.$router.push('create-proposal');
    },
    navigateToProposal(row, { label }) {
      this.$router.push(`proposals/${row.proposalAddress}`);
    }
  },
};
</script>
