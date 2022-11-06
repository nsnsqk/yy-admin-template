import {defineStore} from 'pinia'

export const useCommonStore = defineStore('common', {
    state: () => ({
        sidebarOpen: true    // 侧边栏折叠打开状态
    }),
    actions: {
        changeSidebarOpen() {
            this.sidebarOpen = !this.sidebarOpen;
        }
    },
})