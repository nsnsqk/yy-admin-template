<template>
    <el-scrollbar>
        <div class="tag-container">
            <div class="tag-item"
                 :class="{active: tag.path === currentObj.currentTag.path}"
                 v-for="tag of tagList" :key="tag.path"
                 @click="changeTag(tag)"
            >
                <el-icon>
                    <PictureFilled/>
                </el-icon>
                <span class="tag-name">{{ tag.title }}</span>
                <el-icon v-if="!tag.affix" @click.stop="closeTag(tag)" class="tag-close">
                    <Close/>
                </el-icon>
            </div>
        </div>
    </el-scrollbar>
</template>

<script setup>
import {ref, reactive, watch} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import path from 'path-browserify';
import {Close, PictureFilled} from "@element-plus/icons-vue";

const route = useRoute();
const router = useRouter();
const tagList = reactive([]);
const currentObj = reactive({currentTag: {}});

const getAffixTag = (routesArr, fullPath) => {
    routesArr.forEach(routeItem => {
        if (!routeItem.children || routeItem.children.length <= 0) {
            const meta = routeItem.meta || {};
            if (meta.affix) {
                tagList.push({
                    path: path.resolve(fullPath, routeItem.path),
                    icon: meta.icon,
                    title: meta.title,
                    affix: meta.affix
                })
            }
        } else {
            getAffixTag(routeItem.children, path.resolve(fullPath, routeItem.path));
        }
    })
}
getAffixTag(router.options.routes, '');

watch(
    () => route.path,
    newPath => {
        if (currentObj.currentTag.path === route.path) {
            return;
        }

        for (const item of tagList) {
            if (item.path === newPath) {
                currentObj.currentTag = item;
                return;
            }
        }

        currentObj.currentTag = {
            path: newPath,
            icon: route.meta?.icon,
            title: route.meta?.title,
            affix: route.meta?.affix
        }
        tagList.push(currentObj.currentTag)

    },
    {immediate: true}
)

const changeTag = tag => {
    currentObj.currentTag = tag;
    router.push(tag.path);
}

const closeTag = tag => {
    tagList.splice(tagList.findIndex(item => item.path === tag.path), 1);
    const lastTag = tagList[tagList.length - 1];
    if (lastTag && currentObj.currentTag.path === tag.path) {
        changeTag(lastTag);
    }
}


</script>

<style lang="scss" scoped>
.el-scrollbar {
    height: auto;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 0 10px;
}

.tag-container {
    display: flex;
    height: 30px;

    .tag-item {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 10px;
        padding: 0 10px;
        text-align: center;
        border-radius: 4px;
        background-color: rgb(246, 247, 248);

        &:hover {
            background-color: rgb(226, 228, 230);
            cursor: default;
        }

        &.active {
            background-color: rgb(226, 228, 230);
        }

        .tag-name {
            margin-left: 5px;
            margin-right: 10px;
        }

        .tag-close {
            &:hover {
                background-color: rgb(186 199 200);
                border-radius: 50%;
                cursor: pointer;
            }
        }
    }
}

:deep(.el-scrollbar__bar.is-horizontal) {
    height: 0;
}

:deep(.el-scrollbar__bar.is-vertical) {
    width: 0;
}
</style>