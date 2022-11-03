<template>
    <template v-if="!routeItem.meta?.hideMenu">
        <!-- 展示菜单 -->
        <el-menu-item v-if="isMenu" :index="resolvePath">
            <el-icon>
                <icon-menu/>
            </el-icon>
            <span>{{ routeItem.meta?.title }}</span>
        </el-menu-item>

        <!-- 展示目录 -->
        <el-sub-menu v-else :index="routeItem.path">
            <template #title>
                <el-icon>
                    <location/>
                </el-icon>
                <span>{{ routeItem.meta?.title }}</span>
            </template>
            <sidebar-item
                v-for="child of routeItem.children"
                :key="child.path"
                :route-item="child"
                :base-path="resolvePath"
            />
        </el-sub-menu>
    </template>
</template>

<script setup>
import {computed} from "vue"
import path from 'path-browserify';
import {Location, Menu as IconMenu} from "@element-plus/icons-vue";

const props = defineProps(['routeItem', 'basePath']);

/*
 * 当前节点的子节点数量
 * 0: 此节点即为菜单节点
 * 1: 只有一个child，则父目录节点替换为该child的路由配置；
 */
let children = props.routeItem.children || []
const childAmount = computed(() => children.filter(item => !item.meta?.hideMenu).length)

// 当前节点是否是菜单组件（而不是目录）
const isMenu = computed(() => {
    return !props.routeItem.meta?.alwaysShowDirectory && childAmount.value <= 1;
})

// 当前节点的路径处理
let resolvePath = computed(() => {
    if (!props.routeItem.meta?.alwaysShowDirectory) {
        if (childAmount.value === 1) {
            // 只有一个child
            return path.resolve(props.basePath, children[0].path);
        }
    }
    return path.resolve(props.basePath, props.routeItem.path);
})
</script>
