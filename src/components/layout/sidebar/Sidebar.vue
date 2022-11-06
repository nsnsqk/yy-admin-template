<template>
    <section class="yy-side-container">
        <div class="logo">logo区域</div>

        <el-scrollbar class="yy-side-scrollbar">
            <el-menu :collapse="!commonStore.sidebarOpen"
                     active-text-color="#ffd04b"
                     background-color="#191a23"
                     class="yy-side-bar"
                     :default-active="activeMenu"
                     text-color="#fff"
                     :router="true">
                <sidebar-item v-for="routeItem of allRoutes"
                              :key="routeItem.path"
                              :route-item="routeItem"
                              :base-path="routeItem.path"/>
            </el-menu>
        </el-scrollbar>
    </section>
</template>

<script setup>
import {computed} from 'vue';
import {useRoute} from 'vue-router'
import {Location, Menu as IconMenu} from "@element-plus/icons-vue";
import SidebarItem from '@/components/layout/sidebar/SidebarItem.vue';
import {useCommonStore} from '@/stores/common.js';
import {constantRoutes} from "@/router/index.js";

const commonStore = useCommonStore();

// 高亮菜单
const route = useRoute()
const { meta, path } = route
let activeMenu = computed(() => {
    if (meta.activeMenu) {
        return meta.activeMenu
    }
    return path
})

const allRoutes = computed(() => {
    return constantRoutes;
})


</script>

<style lang="scss" scoped>
.yy-side-container {
    background-color: #191a23;
    text-align: center;
    line-height: 60px;

    .logo {
        height: 60px;
        color: white;
    }

    .yy-side-bar {

    }
}

.el-menu--vertical:not(.el-menu--collapse) {
    width: 200px;
}
</style>