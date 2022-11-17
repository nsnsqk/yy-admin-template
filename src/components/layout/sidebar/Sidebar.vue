<template>
    <section class="yy-side-container">
        <div class="logo">
            <logo bg-color="#f6f7f8"/>
            <span v-if="commonStore.sidebarOpen" class="logo-text">YY ADMIN</span>
        </div>

        <el-scrollbar>
            <el-menu :collapse="!commonStore.sidebarOpen"
                     active-text-color="#ffd04b"
                     background-color="#191a23"
                     class="yy-side-bar"
                     :default-active="activeMenu"
                     text-color="#fff"
                     :router="true">
                <sidebar-item v-for="routeItem of businessRoutes"
                              :key="routeItem.path"
                              :route-item="routeItem"
                              :base-path="routeItem.path"/>
            </el-menu>
        </el-scrollbar>
    </section>
</template>

<script setup>
import {computed} from 'vue';
import {useRoute, useRouter} from 'vue-router'
import Logo from '@/components/icon/Logo.vue';
import SidebarItem from '@/components/layout/sidebar/SidebarItem.vue';
import {useCommonStore} from '@/stores/common.js';
import {businessRoutes} from "@/router/index.js";

const commonStore = useCommonStore();

// 高亮菜单
const route = useRoute()
let activeMenu = computed(() => {
    if (route.meta.activeMenu) {
        return route.meta.activeMenu
    }
    return route.path
})
</script>

<style lang="scss" scoped>
.yy-side-container {
    background-color: #191a23;
    text-align: center;
    line-height: 60px;

    .logo {
        height: 60px;

        .logo-svg {
            width: 30px;
            height: 30px;
            vertical-align: middle;
        }
        .logo-text {
            color: white;
            font-size: 16px;
            font-weight: 900;
            margin-left: 15px;
        }
    }

    .el-menu {
        border-right: none;
    }
}

.el-menu--vertical:not(.el-menu--collapse) {
    width: 200px;
}
</style>