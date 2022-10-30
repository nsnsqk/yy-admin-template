<template>
    <el-button @click="changeTitle">更改title</el-button>
    <el-button @click="changeArr">更改arr</el-button>
    <h1>{{title}}</h1>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
    </el-table>
</template>

<script setup>
import {onMounted, ref, reactive} from 'vue';

let title = '测试表格'
function changeTitle() {
    title = '新的标题'
}

const tableData = reactive([
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
])

function changeArr() {
    tableData.shift();
}

onMounted(() => {
    tableData.push({
        date: '2022-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    })
})
</script>

<style scoped>

</style>