<template>
    <el-scrollbar>
        <el-menu
            :collapse="!commonStore.sidebarOpen"
            active-text-color="#ffd04b"
            background-color="#191a23"
            class="side-bar"
            default-active="workbench"
            text-color="#fff"
            :router="true"
        >
            <el-menu-item index="workbench">
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
                    <span>列表页面</span>
                </template>
                <el-menu-item index="table">基础表格</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2">
                <template #title>
                    <el-icon>
                        <location/>
                    </el-icon>
                    <span>多级菜单</span>
                </template>
                <el-menu-item index="menu-nesting">基础表格</el-menu-item>
            </el-sub-menu>
        </el-menu>
    </el-scrollbar>
</template>

<script setup>
import {Location, Menu as IconMenu} from "@element-plus/icons-vue";
import {useCommonStore} from '@/stores/index.js';
import {computed} from 'vue';

const commonStore = useCommonStore();

</script>

<style lang="scss" scoped>

</style>