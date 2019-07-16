<template>
    <div class="home-page">
        <router-view/>
        <ul>
            <li><router-link :to="{name: 'list'}">新闻列表</router-link></li>
            <li><router-link :to="{name: 'user'}">个人中心</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Homes',
}
</script>

<style scoped>
.home-page{
    width: 100%;
    height: 100%;
}
ul{
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 50px;
    display: flex;
    background: #42b983;
}
ul li{
    list-style: none;
    flex-direction: column;
    width: 50%;
    text-align: center;
    line-height: 50px;
}
ul li a{
    width: 100%;
    height: 100%;
    display: inline-block;
    text-decoration: none;
    color: #fff;
}
ul li a.router-link-active{
    background: #358561;
}
</style>
