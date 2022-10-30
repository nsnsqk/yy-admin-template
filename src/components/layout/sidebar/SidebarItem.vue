<template>
    <template v-if="!routeItem.meta?.hideMenu">
        <el-menu-item v-if="showMenuComponent"
                      :index="resolvePath">
            <el-icon>
                <icon-menu/>
            </el-icon>
            <span>{{ routeItem.meta?.title }}</span>
        </el-menu-item>

        <el-sub-menu v-else :index="routeItem.path">
            <template #title>
                <el-icon>
                    <location/>
                </el-icon>
                <span>{{ routeItem.meta?.title }}</span>
            </template>
            <sidebar-item
                v-for="child in routeItem.children"
                :key="child.path"
                :route-item="child"
                :base-path="resolvePath"
            />
        </el-sub-menu>
    </template>
</template>

<script setup>
import path from 'path-browserify';
import {computed, reactive, ref} from "vue"
import {Location, Menu as IconMenu} from "@element-plus/icons-vue";

const props = defineProps(['routeItem', 'basePath']);
let routeItem = reactive(props.routeItem)
let basePath = ref(props.basePath);

let children = routeItem.children || []
console.log(reactive([]))
const displayedChildrenLength = computed(() => children.filter(item => !item.meta?.hideMenu).length)
const test = computed(() => 1 + 1)
console.log(test)

// 展示菜单组件（而不是目录）
const showMenuComponent = computed(() => {
    // 不一直展示目录，且，children数量 <= 1（等于1：只有一个child，则父目录节点替换为该child的路由配置；小于1：此节点即为菜单节点
    return !routeItem.meta?.alwaysShowDirectory && children.filter(item => !item.meta?.hideMenu).length <= 1;
})

let resolvePath = computed(() => {
    if (!routeItem.meta?.alwaysShowDirectory) {
        if (children.filter(item => !item.meta?.hideMenu).length === 1) {
            return path.resolve(basePath.value, children[0].path);
        }
    }
    return path.resolve(basePath.value, routeItem.path);
})



</script>
