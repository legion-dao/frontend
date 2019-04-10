<template>
  <div id="app">
    <el-container>
      <el-header id="nav">
        <el-menu :router="true" :default-active="$route.path" mode="horizontal">
          <el-menu-item class="logo-item"></el-menu-item>

          <el-menu-item index="/">
            <router-link to="/">About</router-link>
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
    }
  }
}
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
</style>
