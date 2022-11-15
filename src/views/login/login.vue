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
                <el-checkbox v-model="rememberMe" label="记住密码" size="large" class="remember-me"/>
                <el-button @click="doLogin" type="primary" size="large">登 录</el-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {useRouter} from 'vue-router';
import {User, Lock} from '@element-plus/icons-vue'
import lottie from "lottie-web";
import bgImg from '@/assets/images/login-bg.webp';
import loginLottie from '@/assets/lottie/login-lottie.json';
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

const router = useRouter();
let account = ref('');
let password = ref('');
let rememberMe = ref(true);
const doLogin = () => {
    if (account.value !== 'admin') {
        ElMessage.error('用户名不正确！');
        return;
    }
    localStorage.setItem('login-token', 'admin');
    router.replace({path: '/'});
}

</script>

<style scoped lang="scss">
@font-face {
    font-family: "阿里巴巴普惠体 2.0 115 Black";
    font-weight: 1000;
    src: url("//at.alicdn.com/wf/webfont/noYsgf4SbGoO/6UxHUtq4M2HDg2OTmzQeD.woff2") format("woff2"),
    url("//at.alicdn.com/wf/webfont/noYsgf4SbGoO/6MSZF8fcwA-5HVMKM0oKr.woff") format("woff");
    font-display: swap;
}


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
        justify-content: space-between;
        box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;
        background: rgba(241, 245, 251, .5);
        border-radius: 10px;

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
                    color: rgba(62, 60, 60, 0.69);
                    margin-left: 10px;
                    font-family: "阿里巴巴普惠体 2.0 115 Black", system-ui;
                }
            }

            .login-input {
                height: 40px;
                width: 250px;
                margin-bottom: 20px;
            }

            .remember-me {
                align-self: flex-start;
                margin-left: 50px;
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