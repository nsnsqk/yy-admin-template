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
<!--                <el-menu-item index="/workbench">
                    <el-icon>
                        <icon-menu/>
                    </el-icon>
                    <span>工作台</span>
                </el-menu-item>
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <location/>
                        </el-icon>
                        <span>表格页面</span>
                    </template>
                    <el-menu-item index="/table/basic-table">基础表格</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2">
                    <template #title>
                        <el-icon>
                            <location/>
                        </el-icon>
                        <span>错误页面</span>
                    </template>
                    <el-menu-item index="/error/404">404页面</el-menu-item>
                </el-sub-menu>-->
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
import {useCommonStore} from '@/stores/index.js';
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