<template>
    <div class="login-container" :style="{ backgroundImage: `url(${bgImg})`}">
        <div class="login-dialog">
            <div ref="lottieRef" class="login-lottie"></div>
            <div class="login-form">

            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import lottie from "lottie-web";
import bgImg from '@/assets/images/login-bg.webp';
import loginLottie from '@/assets/lottie/数据.json';

const lottieRef = ref(null);
onMounted(() => {
    lottie.loadAnimation({
        container: lottieRef.value, // 包含动画的dom元素
        renderer: "html", // 渲染出来的是什么格式
        loop: true, // 循环播放
        autoplay: true, // 自动播放
        animationData: loginLottie
    })
})
</script>

<style scoped lang="scss">
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-size: cover;

    .login-dialog {
        display: flex;
        width: 700px;
        height: 400px;
        background-color: #fff;

        .login-lottie {
            position: relative;
            width: 50%;
            height: 100%;
        }
        .login-form {

        }
    }
}
</style>