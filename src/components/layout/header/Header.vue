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

        <div class="header-right">
            <el-badge :value="3" class="bell-badge hover-gray">
                <el-icon :size="18" class="notice-bell">
                    <Bell/>
                </el-icon>
            </el-badge>
            <el-dropdown class="avatar-container hover-gray">
                <span class="el-dropdown-link">
                <el-avatar shape="square" :size="35"
                           src="//portrait.gitee.com/uploads/avatars/user/248/745245_2016Young_1578931951.png!avatar200"/>
                  那时年少轻狂
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>
                            <el-icon>
                                <Avatar/>
                            </el-icon>
                            个人中心
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <el-icon>
                                <HomeFilled/>
                            </el-icon>
                            首页
                        </el-dropdown-item>
                        <el-dropdown-item divided @click="logout">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>


<script setup>
import {computed} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {Fold, Expand, HomeFilled, Avatar, Bell} from "@element-plus/icons-vue";
import {useCommonStore} from '@/stores/common.js';

const route = useRoute();
const commonStore = useCommonStore();

const changeSidebarOpen = () => {
    commonStore.changeSidebarOpen();
}

const breadcrumbList = computed(() => {
    return route.matched.filter(item => item.meta?.title);
})

const router = useRouter();
const logout = () => {
    localStorage.removeItem('login-token');
    router.replace({path: '/login'});
}
</script>

<style scoped lang="scss">
.header {
    display: flex;
    align-items: center;
    padding-left: 20px;
    box-shadow: 0px -3px 10px -1px rgb(0 0 0 / 30%);

    .menu-expand {
        cursor: pointer;
        margin-right: 10px;
    }

    .header-breadcrumb {
        flex: 1;
    }

    .header-right {
        line-height: 60px;

        .avatar-container {
            line-height: 60px;
            padding: 0 15px;

            .el-avatar {
                vertical-align: middle;
            }
        }

        .bell-badge {
            display: inline-flex;

            .notice-bell {
                height: 60px;
                width: 40px;
            }

            :deep(.el-badge__content.is-fixed) {
                top: 21px;
                right: 21px;
            }
        }

    }
}

.hover-gray {
    &:hover {
        background-color: #f5f7f9;
        cursor: pointer;
    }
}
</style>