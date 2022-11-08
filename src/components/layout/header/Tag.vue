<template>
    <el-scrollbar>
        <div class="tag-container">
            <div class="tag-item"
                 v-for="tag of tagList" :key="tag.path"
                 @click="changeTag(tag)"
            >
                <el-icon>
                    <PictureFilled/>
                </el-icon>
                <span class="tag-name">{{ tag.title }}</span>
                <el-icon class="tag-close">
                    <Close/>
                </el-icon>
            </div>
        </div>
    </el-scrollbar>
</template>

<script setup>
import {ref, reactive, watch} from 'vue';
import {useRoute, onBeforeRouteLeave} from 'vue-router';
import {Close, PictureFilled} from "@element-plus/icons-vue";

const tagList = reactive([]);
const route = useRoute();

const changeTag = (tag) => {
    if (tag) {
        // 点击标签：不再 push到 tagList 中

    } else {
        tagList.push({
            icon: route.meta?.icon,
            title: route.meta?.title,
            path: route.path
        })
    }
}

console.log(JSON.stringify(route))
watch(
    () => route.path,
    (newPath) => {
        changeTag();
    },
    {immediate: true}
)


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