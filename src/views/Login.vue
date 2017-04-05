<style lang="less" scoped>
    .container {
        height: 100%;
        background: #f0f0f0;
    }
    .back-btn {
        float: left;
    }
    .header {
        text-align: center;
        height: 50px;
        line-height: 50px;
        size: .45rem;
        background: #fff;
        border-bottom: 1px solid #c8c8c8;
    }
    .login-form {
        background: #fff;
        margin: 10px 0;
    }
    .input-group {
        display: -webkit-flex;
        display: -webkit-box;
        -webkit-box-align: center;
        padding: 10px;
        border-bottom: 1px solid #ddd;
    }
    .input-group > label {
        display: inline-block;
        padding: 8px 4px;
        width: 4rem;
        font-size: 18px;
    }
    .form-control {
        -webkit-flex: 1;
        -webkit-box-flex: 1;
    }
    .form-control > input {
        border: none;
        outline: none;
        font-size: 18px;
    }
    .login-btn-wrap {
        padding: 10px 10px 0 10px;
    }
    .login-btn {
        width: 100%;
        height: 60px;
        background-color: #c40000;
        outline: none;
        border: none;
        font-size: 20px;
        letter-spacing: 10px;
        color: #d4d4d4;
    }
    .other-link {
        margin: 10px 8px;
        color: #c40000;
    }
    .free-reg {
        float: left;
        color: inherit;
    }
    .forget-pwd {
        float: right;
        color: inherit;
    }
</style>
<template>
    <div class="container">
        <header class="header">
            淘宝账户登陆
        </header>
        <form action="" class="login-form">
            <div class="input-group">
                <label for="">账户</label>
                <div class="form-control">
                    <input type="text" placeholder="手机号/邮箱/会员名">
                </div>
            </div>
            <div class="input-group">
                <label for="">密码</label>
                <div class="form-control">
                    <input type="password" placeholder="请输入密码">
                </div>
            </div>
        </form>
        <div class="login-btn-wrap">
            <button v-on:click="login" class="login-btn">登陆</button>
        </div>
        <div class="other-link">
            <a class="free-reg" href="">免费注册</a>
            <a class="forget-pwd" href="">忘记密码</a>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            login: function () {
                this.$store.dispatch('setUserInfo', {
                    userId: Math.random(),
                    name: "kobe",
                    age: 40
                })
                this.$router.push("/home")
            }
        }
    }
</script>