<template>
    <img class="logo-img" :style="styleObject" src="../../assets/images/logo.png" alt="logo">
</template>

<script setup>
import {reactive} from 'vue';

const props = defineProps(['bgColor']);
const styleObject = reactive({});
if (props.bgColor) {
    styleObject.backgroundColor = props.bgColor;
}
</script>

<style scoped lang="scss">
.logo-img {
    height: 45px;
    width: 45px;
    border-radius: 10px;
    vertical-align: middle;
}
</style>