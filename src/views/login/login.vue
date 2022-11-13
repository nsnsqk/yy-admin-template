<template>
    <div class="login-container" :style="{ backgroundImage: `url(${bgImg})`}">
        <div class="login-dialog">
            <div ref="lottieRef" class="login-lottie"></div>
            <div class="login-form">
                <h2 class="login-title">
                    <logo/>
                    <span class="login-title-text">YY Admin</span>
                </h2>
                <el-input
                    v-model="account"
                    class="login-input"
                    size="small"
                    placeholder="请输入用户名">
                    <template #prefix>
                        <el-icon size="16px">
                            <User/>
                        </el-icon>
                    </template>
                </el-input>
                <el-input
                    v-model="password"
                    class="login-input"
                    size="small"
                    show-password
                    placeholder="请输入密码">
                    <template #prefix>
                        <el-icon size="16px">
                            <Lock/>
                        </el-icon>
                    </template>
                </el-input>
                <el-button type="primary" size="large">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {User, Lock} from '@element-plus/icons-vue'
import lottie from "lottie-web";
import bgImg from '@/assets/images/login-bg.webp';
import loginLottie from '@/assets/lottie/数据.json';
import Logo from '@/components/icon/Logo.vue';

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

let account = ref('');
let password = ref('');

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
        justify-content: space-between;

        .login-lottie {
            position: relative;
            margin-left: 20px;
            width: 100%;
            height: 100%;
        }

        .login-form {
            flex: 0 0 350px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .login-title {
                height: 50px;
                margin-bottom: 20px;

                .login-title-text {
                    margin-left: 10px;
                }
            }

            .login-input {
                height: 40px;
                width: 250px;
                margin-bottom: 20px;
            }

            .el-button {
                height: 40px;
                width: 250px;
            }
        }
    }
}
</style>