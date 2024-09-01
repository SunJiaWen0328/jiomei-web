<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',

  created() {
    // 查看本地记录是否存储了主题信息
    const saveTheme = window.localStorage.getItem('theme')
    if (saveTheme) {
      const html = document.querySelector('html')
      if (html) {
        html.setAttribute('theme', saveTheme)
      }
    } else {
      // 没有本地记录会展示默认主题
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
