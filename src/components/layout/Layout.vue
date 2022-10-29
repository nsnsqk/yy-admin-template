<template>
    <el-container class="app-wrapper">
        <side-bar/>
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
    display: flex;
    height: 100%;
}

.app-container {
    flex: 1
}

</style>