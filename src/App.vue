<template>
  <div id="app">
    <el-container>
      <el-header id="nav">
        <el-menu :router="true" :default-active="$route.path" mode="horizontal">
          <el-menu-item class="logo-item"></el-menu-item>

          <el-submenu>
            <template slot="title">
              <img alt="Basketball" src="./assets/icons/basketball.svg">
            </template>

            <el-menu-item index="2-1" class="sport-icon">
              <img alt="Basketball" src="./assets/icons/basketball.svg">
            </el-menu-item>

            <el-menu-item index="2-2" class="sport-icon">
              <img alt="Baseball" src="./assets/icons/baseball.svg">
            </el-menu-item>

            <el-menu-item index="2-3" class="sport-icon">
              <img alt="Soccer" src="./assets/icons/soccer.svg">
            </el-menu-item>

            <el-menu-item index="2-4" class="sport-icon">
              <img alt="Football" src="./assets/icons/football.svg">
            </el-menu-item>

            <el-menu-item index="2-5" class="sport-icon">
              <img alt="Hockey" src="./assets/icons/hockey.svg">
            </el-menu-item>

            <el-menu-item index="2-6" class="sport-icon">
              <img alt="Volleyball" src="./assets/icons/volleyball.svg">
            </el-menu-item>
          </el-submenu>

          <el-menu-item index="/">
            <router-link to="/">About</router-link>
          </el-menu-item>

          <el-menu-item index="/daos">
            <router-link to="/">DAOs</router-link>
          </el-menu-item>

          <el-menu-item index="/proposals">
            <router-link to="/">Proposals</router-link>
          </el-menu-item>

          <el-menu-item index="/players">
            <router-link to="/">Players</router-link>
          </el-menu-item>

          <el-menu-item index="/create-dao">
            <router-link to="/create-dao">Create DAO</router-link>
          </el-menu-item>
        </el-menu>
      </el-header>

      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      activeIndex: '/',
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav a {
  text-decoration: none;
}

#nav .logo-item {
  width: 250px;
  background-image: url('./assets/logo-text.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.el-menu--horizontal .el-menu--popup {
  min-width: 50px !important;
}
</style>
