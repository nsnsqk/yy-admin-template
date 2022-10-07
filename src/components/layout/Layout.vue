<template>
    <el-container class="container">
        <el-aside width="200px">
            <side-bar/>
        </el-aside>
        <el-container>
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
.container {
    height: 100%;
}
</style>