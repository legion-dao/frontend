<template>
  <el-container class="home">
    <el-main>
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="6">
          <img alt="Legion DAO" src="../assets/logo.png">

          <h1>Uniting Fans Through Decentralization</h1>

          <p>Fans want to be engaged. There's a reason fantasy sports exist. We're taking that to the next level.</p>
        </el-col>
      </el-row>

      <el-row>
        <h1>FOR THE ORG</h1>

        <el-row type="flex" justify="center" align="middle">
          <el-col>
            <img src="../assets/icons/automated-dao.svg" class="icon">
            <h3>Automated DAO Creation</h3>
            <p>We do the heavy lifting for you. No need for a Solidity or blockchain engineer. It's as simple as filling out one form!</p>
          </el-col>

          <el-col>
            <img src="../assets/icons/your-token.svg" class="icon">
            <h3>Your Own DAO Token</h3>
            <p>In order to engage with the fans, we create your organization it's own token. Fans can use these tokens to propose improvements to the team. You can also allow your fans to purchase deals and merch with their tokens!</p>
          </el-col>

          <el-col>
            <img src="../assets/icons/crowd-wisdom.svg" class="icon">
            <h3>Wisdom of the Crowd</h3>
            <p>Fans use their tokens to improvement the team. This increases fan engagement and the potential for better results on the court.</p>
          </el-col>
        </el-row>
      </el-row>

      <el-row>
        <h1>FOR THE FANS</h1>
        <p>Got a great idea? Stake your tokens and see if the crowd agrees. If your proposal gets accepted, you will automatically be rewarded by the DAO. Be careful though! If your proposal doesn't make it to execution, you won't get any money back.</p>

        <el-row type="flex" justify="center" align="middle">
          <el-col>
            <img src="../assets/icons/trade-players.svg" class="icon">
            <h3>Player Trades</h3>
            <p>Who would improve your team's chance at success? Propose a player trade between anyone in your league. If both sides reach consensus, the trade will automatically be executed.</p>
          </el-col>

          <el-col>
            <img src="../assets/icons/scout-players.svg" class="icon">
            <h3>Player Scouting</h3>
            <p>Have you found untapped potential? Propose undiscovered talent to a team. If your player gets scouted, you receive dividends based on their career performance.</p>
          </el-col>
        </el-row>

        <el-row type="flex" justify="center" align="middle">
          <el-col>
            <img src="../assets/icons/merch-ideas.svg" class="icon">
            <h3>Merch Ideas</h3>
            <p>Know what's missing from the store? Propose new merch ideas. If your ideas get created, you'll get a cut of all profits from the merch in the future.</p>
          </el-col>

          <el-col>
            <img src="../assets/icons/lineup.svg" class="icon">
            <h3>Lineups</h3>
            <p>Get rewarded for great lineup ideas! Propose lineups for gameday. If your proposal meets quorum, you'll see the lineup you picked on the court. </p>
          </el-col>
        </el-row>
      </el-row>


      <el-row>
        <h1>GET THE BENEFITS OF THE DAO</h1>

        <el-row type="flex" justify="center" align="middle">
          <el-col>
            <img src="../assets/icons/governance.svg" class="icon">
            <h3>Blockchain Governance</h3>
            <p>Decentralized governance based on Ethereum smart contracts enables faultless execution of crowd decisions.</p>
          </el-col>

          <el-col>
            <img src="../assets/icons/cooperation.svg" class="icon">
            <h3>Programmatic Cooperation</h3>
            <p>Crypto-economic incentive design at the individual level empowers frictionless cooperation at the collective level.</p>
          </el-col>

          <el-col>
            <img src="../assets/icons/security.svg" class="icon">
            <h3>Security Focus</h3>
            <p>Leverages the battle-tested OpenZeppelin library for industry standard contract security and best practices.</p>
          </el-col>
        </el-row>
      </el-row>

      <el-row>
        <h1>THE TEAM</h1>

        <el-row type="flex" justify="center" align="middle">
          <el-col>
            <h3>Anthony Morris</h3>
          </el-col>

          <el-col>
            <h3>Sina Khalili</h3>
          </el-col>
        </el-row>
      </el-row>

      <p>Made with &lt;3 at <a href="https://7gate.academy/">7 GateAcademy</a></p>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style>
.home {
  text-align: center;
}

.icon {
  height: 150px;
}
</style>
