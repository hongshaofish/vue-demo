<template>
    <div class="user-page">
        <router-view/>
        <p><router-link :to="{name: 'add'}"><button type="button">添加信息</button></router-link></p>
    </div>
</template>

<script>
export default {
    name: 'User',
};
</script>

<style scoped>
.user-page{
    width: 100%;
    height: 100%;
}
p{
    margin: 100px auto 0;
    width: 100px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    text-align: center;
    background: #42b983;
    border-radius: 10px;
}
p a{
    width: 100%;
    height: 100%;
    display: inline-block;
    text-decoration: none;
    color: #fff;
}
p a button{
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    color: #fff;
}
</style>
