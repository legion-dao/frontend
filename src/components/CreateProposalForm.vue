<template>
  <el-card>
    <el-form ref="form" :model="form" label-width="160px">
      <el-row type="flex">
        <el-col>
          <el-form-item label="Team A">
            <el-select
              v-model="form.aTeam"
              placeholder="Select Team A"
              @change="value => setTeamPlayers('a', value)"
            >
              <el-option
                v-for="team in teams"
                :key="team._id"
                :label="team.name"
                :value="team.name"
                :disabled="form.bTeam === team.name">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="Players">
            <el-select placeholder="Select Player" @change="value => addPlayer('a', value)">
              <el-option
                v-for="player in form.aTeamPlayers"
                :key="player._id"
                :label="player.name"
                :value="player.name"
                :disabled="isPlayerDisabled('a', player.name)">
              </el-option>
            </el-select>

            <el-table :data="form.selectedATeamPlayers" stripe>
              <el-table-column prop="name" label="Name"></el-table-column>
              <el-table-column prop="height" label="Height"></el-table-column>
              <el-table-column prop="number" label="Jersey Number"></el-table-column>
              <el-table-column>
                <template slot-scope="scope">
                  <el-button @click="removePlayer('a', scope.$index)" type="text" size="small">
                    Remove Player
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-form-item>
        </el-col>

        <el-col>
          <el-form-item label="Team B">
            <el-select
              v-model="form.bTeam"
              placeholder="Select Team B"
              @change="value => setTeamPlayers('b', value)"
            >
              <el-option
                v-for="team in teams"
                :key="team._id"
                :label="team.name"
                :value="team.name"
                :disabled="form.aTeam === team.name">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="Players">
            <el-select placeholder="Select Player" @change="value => addPlayer('b', value)">
              <el-option
                v-for="player in form.bTeamPlayers"
                :key="player._id"
                :label="player.name"
                :value="player.name"
                :disabled="isPlayerDisabled('b', player.name)">
              </el-option>
            </el-select>

            <el-table :data="form.selectedBTeamPlayers" stripe>
              <el-table-column prop="name" label="Name"></el-table-column>
              <el-table-column prop="height" label="Height"></el-table-column>
              <el-table-column prop="number" label="Jersey Number"></el-table-column>
              <el-table-column>
                <template slot-scope="scope">
                  <el-button @click="removePlayer('b', scope.$index)" type="text" size="small">
                    Remove Player
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">
          Propose
        </el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CreateProposalForm',
  data() {
    return {
      form: {
        aTeam: '',
        bTeam: '',
        aTeamPlayers: [],
        bTeamPlayers: [],
        selectedATeamPlayers: [],
        selectedBTeamPlayers: [],
      },
      teams: [],
    };
  },
  async mounted() {
    const { data } = await axios.get('http://localhost:3000/daos');
    this.teams = data;
  },
  methods: {
    async onSubmit() {
      await axios.post('http://localhost:3000/proposals/create', this.form);
    },
    setTeamPlayers(teamLetter, teamName) {
      const team = this.teams.find(possibleTeam => possibleTeam.name === teamName);
      this.form[`${teamLetter}TeamPlayers`] = team.players;
    },
    addPlayer(teamLetter, playerName) {
      const player = this.form[`${teamLetter}TeamPlayers`].find(possiblePlayer => possiblePlayer.name === playerName);
      this.form[`selected${teamLetter.toUpperCase()}TeamPlayers`].push(player);
    },
    removePlayer(teamLetter, playerIndex) {
      const selectedPlayersVar = `selected${teamLetter.toUpperCase()}TeamPlayers`;
      this.form[selectedPlayersVar] = this.form[selectedPlayersVar]
        .filter((player, index) => index !== playerIndex);
    },
    isPlayerDisabled(teamLetter, playerName) {
      return this.form[`selected${teamLetter.toUpperCase()}TeamPlayers`]
        .some(selectedPlayer => selectedPlayer.name === playerName);
    },
  },
};
</script>
