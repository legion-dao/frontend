<template>
  <el-card>
    <el-form ref="form" :model="form" label-width="160px">

      <el-form-item label="Association Name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="Token Symbol">
        <el-input v-model="form.symbol"></el-input>
      </el-form-item>

      <el-form-item label="League">
        <el-select v-model="form.region" placeholder="please select your league">
          <el-option label="NBA" value="nba"></el-option>
          <el-option label="NCAA" value="ncaa"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Players">
        <el-table :data="form.players" empty-text="Add players to below">
          <el-table-column prop="name" label="Name"></el-table-column>
          <el-table-column prop="height" label="Height"></el-table-column>
          <el-table-column prop="number" label="Jersey Number"></el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <el-button @click="removePlayer(scope.$index)" type="text" size="small">Remove Player</el-button>
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
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
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
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
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
    }
  }
}
</script>
