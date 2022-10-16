<template>
    <el-row class="header" align="middle">
        <el-col :span="1">
            <el-icon @click="changeSidebarOpen" class="menu-expand" :size="18">
                <Expand v-if="commonStore.sidebarOpen"/>
                <Fold v-else/>
            </el-icon>
        </el-col>
        <el-col :span="23">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">工作台</el-breadcrumb-item>
                <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
    </el-row>

</template>


<script setup>
import {Fold, Expand} from "@element-plus/icons-vue";
import { useCommonStore } from '@/stores/index.js';

const commonStore = useCommonStore();
function changeSidebarOpen() {
    commonStore.changeSidebarOpen();
};

</script>

<style scoped lang="scss">
.menu-expand {

}

.el-breadcrumb {

}
</style>