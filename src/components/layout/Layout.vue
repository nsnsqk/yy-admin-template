<template>
    <el-container class="app-wrapper">
        <el-aside width="200px">
            <side-bar/>
        </el-aside>
        <el-container class="app-container">
            <el-header>
                <app-header/>
            </el-header>
            <el-main style="background-color: antiquewhite">
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import SideBar from './sidebar/Sidebar.vue';
import AppHeader from './header/Header.vue';
</script>

<style lang="scss" scoped>
.app-wrapper {
    height: 100%;
    display: flex;
}
.app-container {

}
</style>