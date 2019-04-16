<template>
  <el-card>
    <el-row type="flex">
      <h1>Proposal:</h1>
      <h2 :style="{ marginLeft: '20px' }">{{proposal.proposalAddress}}</h2>
    </el-row>

    <el-row type="flex">
      <el-col>
        <el-row>
            A proposal to trade <strong>{{prettyAPlayers}}</strong> from the <router-link :to="`/daos/${proposal.aTeam}`">{{proposal.aTeam}}</router-link>
        </el-row>

        <el-row>
          to the <router-link :to="`/daos/${proposal.aTeam}`">{{proposal.bTeam}}</router-link> for <strong>{{prettyBPlayers}}</strong>
        </el-row>
      </el-col>

      <el-col :span="4">
        <el-row type="flex">
          <el-col>
            <Like class="vote-icon" @click="() => vote('for')" />
          </el-col>

          <el-col>
            <Dislike class="vote-icon" @click="() => vote('against')" />
          </el-col>
        </el-row>
        <el-row type="flex">
          <el-col>
            votes for: {{proposal.positiveVotes}}
          </el-col>

          <el-col>
            votes against: {{proposal.negativeVotes}}
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row>
      <el-button v-if="proposal.status === 'Open'" type="primary" @click="completeProposal">
        Complete Proposal
      </el-button>
      <span v-else>Proposal is closed!</span>
    </el-row>
  </el-card>
</template>

<script>
import axios from 'axios';
import Like from '../assets/icons/like.svg';
import Dislike from '../assets/icons/dislike.svg';

export default {
  name: 'Proposal',
  components: {
    Like,
    Dislike,
  },
  data() {
    return {
      proposal: {},
      prettyAPlayers: '',
      prettyBPlayers: '',
    };
  },
  async mounted() {
    const { data } = await axios.get(`http://localhost:3000/proposals/${this.$route.params.id}`);
    this.proposal = data;

    this.prettyAPlayers = data.selectedATeamPlayers.map(player => player.name).join(',');
    this.prettyBPlayers = data.selectedBTeamPlayers.map(player => player.name).join(',');
  },
  methods: {
    vote(side) {
      web3.eth.sendTransaction({
        from: web3.eth.accounts[2],
        to: '0xAB0b6e4eBA3985b31E826202FE0Dd9688620427e',
        value: web3.toWei(0.005, 'ether'),
      }, async err => {
        if (err) {
          console.log('The polls are busted.');
          return;
        }

        await axios.post('http://localhost:3000/proposals/vote', { proposal: this.proposal, vote: side === 'for' });

        if (side === 'for') {
          this.proposal.positiveVotes++;
        } else {
          this.proposal.negativeVotes++;
        }
      });
    },
    completeProposal() {
      web3.eth.sendTransaction({
        from: web3.eth.accounts[2],
        to: '0xAB0b6e4eBA3985b31E826202FE0Dd9688620427e',
        value: web3.toWei(0.005, 'ether'),
      }, async err => {
        if (err) {
          console.log('Cannot complete, sad times.');
          return;
        }

        await axios.post('http://localhost:3000/proposals/close', { proposal: this.proposal });
      });
    },
  },
};
</script>

<style>
h1 {
  margin-top: 0;
}

.vote-icon {
  height: 50px;
  margin-right: 20px;
}

.vote-icon:hover {
  fill: #7600F2;
}
</style>
