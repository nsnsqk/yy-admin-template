<template>
    <div class="header">
        <el-icon @click="changeSidebarOpen" class="menu-expand" :size="18">
            <Expand v-if="commonStore.sidebarOpen"/>
            <Fold v-else/>
        </el-icon>

        <el-breadcrumb class="header-breadcrumb" separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">工作台</el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="header-right">右侧内容</div>
    </div>
</template>


<script setup>
import {Fold, Expand} from "@element-plus/icons-vue";
import { useCommonStore } from '@/stores/index.js';

const commonStore = useCommonStore();
function changeSidebarOpen() {
    commonStore.changeSidebarOpen();
}

</script>

<style scoped lang="scss">
.header {
    display: flex;
    flex-direction: row;
    align-content: center;
    line-height: 60px;
}

.menu-expand {
    width: 20px;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
    margin-right: 10px;
}

.header-breadcrumb {
    flex: 1;
    line-height: 60px;
}


.header-right {
    width: 100px;
}
</style>