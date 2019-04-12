<template>
  <div id="app">
    <el-container>
      <el-header id="nav">
        <el-menu :router="true" :default-active="$route.path" mode="horizontal">
          <el-menu-item class="logo-item"></el-menu-item>

          <el-submenu>
            <template slot="title">
              <Basketball />
            </template>

            <el-menu-item index="2-1" class="sport-icon">
              <Basketball />
            </el-menu-item>

            <el-menu-item index="2-2" class="sport-icon">
              <Baseball />
            </el-menu-item>

            <el-menu-item index="2-3" class="sport-icon">
              <Soccer />
            </el-menu-item>

            <el-menu-item index="2-4" class="sport-icon">
              <Football />
            </el-menu-item>

            <el-menu-item index="2-5" class="sport-icon">
              <Hockey />
            </el-menu-item>

            <el-menu-item index="2-6" class="sport-icon">
              <Volleyball />
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
import Basketball from './assets/icons/basketball.svg';
import Baseball from './assets/icons/baseball.svg';
import Soccer from './assets/icons/soccer.svg';
import Football from './assets/icons/football.svg';
import Hockey from './assets/icons/hockey.svg';
import Volleyball from './assets/icons/volleyball.svg';

export default {
  name: 'app',
  components: {
    Basketball,
    Baseball,
    Soccer,
    Football,
    Hockey,
    Volleyball,
  },
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
  color: #270059;
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
  max-width: 50px !important;
}

.sport-icon {
  height: 100%;
}

.sport-icon:hover {
  fill: #7600F2;
}
</style>
