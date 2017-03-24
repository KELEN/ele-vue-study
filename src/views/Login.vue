<style>
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
        text-size: .45rem;
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
        width: 2rem;
    }
    .form-control {
        -webkit-flex: 1;
        -webkit-box-flex: 1;
    }
    .form-control > input {
        border: none;
        outline: none;
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
    </div>
</template>
<script>

</script>