<template>
    <el-container>
        <el-aside width="200px">
            <side-bar/>
        </el-aside>
        <el-container>
            <el-header style="background-color: #bfbfbf">Header</el-header>
            <el-main style="background-color: antiquewhite">
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import SideBar from './sidebar/index.vue';
</script>

<style scoped>

</style>