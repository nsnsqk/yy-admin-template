<template>
    <div class="header">
        <el-icon @click="changeSidebarOpen" class="menu-expand" :size="18">
            <Expand v-if="commonStore.sidebarOpen"/>
            <Fold v-else/>
        </el-icon>

        <el-breadcrumb class="header-breadcrumb" separator="/">
            <el-breadcrumb-item v-for="item of breadcrumbList" :key="item.path">{{ item.meta.title }}
            </el-breadcrumb-item>
        </el-breadcrumb>

        <div class="header-right">右侧内容</div>
    </div>
</template>


<script setup>
import {computed} from 'vue';
import {useRoute, onBeforeRouteLeave} from 'vue-router';
import {Fold, Expand} from "@element-plus/icons-vue";
import {useCommonStore} from '@/stores/index.js';

const route = useRoute();
const commonStore = useCommonStore();

const changeSidebarOpen = () => {
    commonStore.changeSidebarOpen();
}

const breadcrumbList = computed(() => {
    return route.matched.filter(item => item.meta?.title);
})
</script>

<style scoped lang="scss">
.header {
    display: flex;
    align-items: center;

    .menu-expand {
        cursor: pointer;
        margin-right: 10px;
    }

    .header-breadcrumb {
        flex: 1;
    }

    .header-right {
        width: 100px;
        line-height: 60px;
    }
}
</style>