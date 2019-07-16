<template>
    <div class="login-page">
        <form v-if="!regFalg">
            <p><label>用户名</label><input type="text" v-model="username" /></p>
            <p><label>密  码</label><input type="password" v-model="password" /></p>
            <ul>
                <li><button type="button" @click="login()">登录</button></li>
                <li><button type="button" @click="reg()">注册</button></li>
            </ul>
        </form>
        <form v-else>
            <p><label>用户名</label><input type="text" v-model="username" /></p>
            <p><label>密  码</label><input type="password" v-model="password" /></p>
            <p><label>确定密码</label><input type="password" v-model="repeat" /></p>
            <ul>
                <li><button type="button" @click="addUser()">确定</button></li>
                <li><button type="button" @click="cancel()">取消</button></li>
            </ul>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{
            regFalg: false,
            username: '',
            password: '',
            repeat: '' //验证
        }
    },
    methods:{
        login(){
            if(this.username == ''){
                alert('用户名不能为空！');
                return false;
            }
            if(this.password == ''){
                alert('密码不能为空！');
                return false;
            }
            if(localStorage.getItem('username') === this.username && localStorage.getItem('password') === this.password){
                this.$router.push('/homes/list');
            }else{
                alert('用户名密码不正确！');
            }
        },
        reg(){
            this.regFalg = true;
        },
        addUser(){
            //存储新用户
            if(this.password === this.repeat){
                localStorage.setItem("username", this.username);
                localStorage.setItem("password", this.password);
                this.username = '';
                this.password = '';
                this.regFalg = false;
            }else{
                alert('两次输入密码不一致！');
            }
        },
        cancel(){
            this.regFalg = false;
        }
    }
}
</script>

<style scoped>
.login-page{
    width: 100%;
    height: 100%;
    background: #42b983;
    overflow: hidden;
    position: relative;
}
form{
    width: 70%;
    height: auto;
    position: absolute;
    top: 200px;
    left: 50%;
    margin-left: -35%;
    overflow: hidden;
    font-size: 14px;
}
form p{
    padding: 0 10px;
    margin-bottom: 30px;
    color: #666;
    background: #fff;
    border-radius: 10px;
}
form p label{
    display: inline-block;
    width: 60px;
    margin-right: 10px;
}
form p input{
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #000;
    border: none;
    background: none;
    outline:none;
}
ul{
    display: flex;
}
ul li{
    list-style: none;
    width: 50%;
    height: 30px;
    line-height: 30px;
    flex-direction: column;
    color: #fff;
    background: #358561;
    text-align: center;
    border-radius: 10px;
}
ul li:nth-child(2){
    margin-left: 10px;
}
ul li button{
    width: 100%;
    height: 100%;
    color: #fff;
    border: none;
    background: none;
    outline:none;
}
</style>
