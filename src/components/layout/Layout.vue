<template>
    <el-container class="app-wrapper">
        <side-bar/>
        <el-container class="app-container">
            <el-header height="auto">
                <app-header/>
                <tag/>
            </el-header>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import SideBar from './sidebar/Sidebar.vue';
import AppHeader from './header/Header.vue';
import Tag from './header/Tag.vue';

</script>

<style lang="scss" scoped>
.app-wrapper {
    display: flex;
    height: 100%;

    .app-container {
        flex: 1;

        .el-header {
            padding: 0;
        }

        .el-main {
            background-color: rgb(246, 247, 248);
        }
    }
}


</style>