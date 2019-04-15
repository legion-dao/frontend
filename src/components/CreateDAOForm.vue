<template>
  <el-card>
    <el-form ref="form" :model="form" label-width="160px">

      <el-form-item label="Organization Name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="Token Symbol">
        <el-input v-model="form.symbol"></el-input>
      </el-form-item>

      <!-- <el-form-item label="League">
        <el-select v-model="form.region" placeholder="please select your league">
          <el-option label="NBA" value="nba"></el-option>
          <el-option label="NCAA" value="ncaa"></el-option>
        </el-select>
      </el-form-item> -->

      <el-form-item label="Players">
        <el-table :data="form.players" empty-text="Add players to below" stripe>
          <el-table-column prop="name" label="Name"></el-table-column>
          <el-table-column prop="height" label="Height"></el-table-column>
          <el-table-column prop="number" label="Jersey Number"></el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <el-button @click="removePlayer(scope.$index)" type="text" size="small">
                Remove Player
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>

      <el-form-item label="Add Player">
        <el-row :gutter="10">
          <el-col :span="6">
            <el-input placeholder="Enter player name" v-model="player.name"></el-input>
          </el-col>

          <el-col :span="6">
            <el-input placeholder="Enter player height" v-model="player.height"></el-input>
          </el-col>

          <el-col :span="6">
            <el-input placeholder="Enter jersey number" v-model="player.number"></el-input>
          </el-col>

          <el-col :span="3">
            <el-button @click="addPlayer" type="primary" size="small">Add Player</el-button>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item>
        <h3>Total Cost: {{totalCost}} ETH*</h3>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="resetForm">Cancel</el-button>
        <br /><em>* 5 ETH/DAO + 0.5 ETH/player</em>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CreateDAOForm',
  data() {
    return {
      form: {
        name: '',
        symbol: '',
        players: [],
      },
      player: {
        name: '',
        height: '',
        number: null,
      },
    };
  },
  computed: {
    totalCost() {
      return 5 + (0.5 * this.form.players.length);
    },
  },
  methods: {
    resetForm() {
      this.form = {
        name: '',
        symbol: '',
        players: [],
      };

      this.player = {
        name: '',
        height: '',
        number: null,
      };
    },
    async onSubmit() {
      web3.eth.sendTransaction({
        from: web3.eth.accounts[0],
        to: '0xAB0b6e4eBA3985b31E826202FE0Dd9688620427e',
        value: web3.toWei(this.totalCost, 'ether'),
      }, async err => {
        if (err) {
          console.log('Hey, something doesn\'t look right.');
          return;
        }

        await axios.post('http://localhost:3000/create-dao', this.form);
        this.$router.push(`/daos/${this.form.name}`);
      });
    },
    addPlayer() {
      if (this.player.name && this.player.height && this.player.number) {
        this.form.players.push(this.player);

        this.player = {
          name: '',
          height: '',
          number: null,
        };
      }
    },
    removePlayer(playerIndex) {
      this.form.players = this.form.players.filter((player, index) => index !== playerIndex);
    },
  },
};
</script>
