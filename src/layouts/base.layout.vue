<template>
    <div id="layout-base">
        <header class="header-area header-sticky background-header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <nav class="main-nav">
                            <!-- ***** Logo Start ***** -->
                            <a class="logo">
                                <h1>
                                    <!-- 主题切换藏在logo上 -->
                                    <img class="logo-img change-theme" src="../assets/images/旺财旺财.png" @click="changeTheme">
                                    JioMei
                                </h1>
                            </a>
                            <!-- ***** Logo End ***** -->
                            <!-- ***** Serach Start ***** -->
                            <div class="search-input">
                                <form id="search" action="#">
                                    <input type="text" placeholder="搜索" id='searchText' name="searchKeyword" onkeypress="handle" />
                                    <i class="fa fa-search"></i>
                                </form>
                            </div>
                            <!-- ***** Serach Start ***** -->
                            <!-- ***** Menu Start ***** -->
                            <ul class="nav">
                                <template v-for="item of navigationItems"  :key="item.name">
                                    <li class="scroll-to-section">
                                        <a @click="go(item)" :class="{ active: isActiveMenu(item) }">{{ item.title }}</a>
                                    </li>
                                </template>
                                <li class="scroll-to-section"><a href="login">登录</a></li>
                            </ul>   
                            <a class='menu-trigger'>
                                <span>菜单</span>
                            </a>
                            <!-- ***** Menu End ***** -->
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        <div id="layout-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>
  
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { MenuItem } from './dtos/menu-item.interface';
import { themesGroups } from '../models/base/theme-models';
@Options({
  components: {},
})
export default class BaseLayOutView extends Vue {
    get currentActive(): MenuItem | null {
        for (const item of this.navigationItems) {
            if (item.name == this.$route.matched[this.$route.matched.length - 1].name) {
                return item
            }
        }
        // 没有完全匹配的，在路由链上查找
        for (const item of this.navigationItems) {
        const index = this.$route.matched.findIndex(r => r.name === item.name)
        if (index >= 0) {
            return item
        }
        }
        return null
    }

    get navigationItems(): MenuItem[] {
        const items: MenuItem[] = []
        items.push({
            title: '首页',
            name: 'home-root',
        })
        items.push({
            title: '发现',
            name: 'explore',
        })
        items.push({
            title: '商城',
            name: 'mall',
        })
        items.push({
            title: '消息',
            name: 'mall',
        })
        return items
    }

    isActiveMenu(item: MenuItem) {
        return item.name === this.currentActive?.name
    }

    go(menu: MenuItem) {
        this.$router.push(menu)
    }

    changeTheme() {
        // 获取当前主题
        const html = document.querySelector('html')
        if (html) {
            const currentTheme = html.getAttribute('theme') ?? ''
            // 找到当前主题的下标
            const index = themesGroups.findIndex(theme => theme === currentTheme) ?? 0
            // 切换下一个主题
            html.setAttribute('theme', themesGroups[(index + 1) == themesGroups.length ? 0 : index + 1])
            // 将当前主题保存在浏览器中
            window.localStorage.setItem('theme', themesGroups[(index + 1) == themesGroups.length ? 0 : index + 1])
        }
    }
}
</script>

<style lang="scss">
// @import '../assets/css/templatemo-scholar.css';
@import '../assets/css/owl.css';
@import '../assets/css/animate.css';
@import '../assets/css/fontawesome.css';
@import '../assets/css/theme.css';

#layout-base{
    margin: 0 auto;
    max-width: 1728px;
    header{
        a{
            font-size: 16px;
        }
    }

    .change-theme {
        float: left;
    }
}
</style>