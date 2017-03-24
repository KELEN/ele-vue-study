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
        text-size: 24px;
        background: #fff;
        border-bottom: 1px solid #2e2e2e;
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
    }
    .input-group > label {
        display: inline-block;
        width: 80px;
    }
    .form-control {
        -webkit-flex: 1;
        -webkit-box-flex: 1;
    }
</style>
<template>
    <div class="container">
        <header class="header">
            <span class="back-btn">返回</span>淘宝账户登陆
        </header>
        <form action="" class="login-form">
            <div class="input-group">
                <label for="">账户</label>
                <div class="form-control">
                    <input type="text">
                </div>
            </div>
            <div class="input-group">
                <label for="">密码</label>
                <div class="form-control">
                    <input type="password">
                </div>
            </div>
        </form>
    </div>
</template>
<script>

</script>