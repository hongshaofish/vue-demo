<template>
    <div class="info-page">
        <div class="info-con">
            <h2>{{title}}</h2>
            <div>{{content}}</div>
        </div>
        <p @click="back()">返回</p>
    </div>
</template>

<script>
import store from '@/store'
export default {
    name: 'Info',
    store,
    data(){
        return{
            title: store.state.title,
            content: store.state.content
        }
    },
    methods: {
        back(){
            this.$router.push({ path: '/homes/list', query: { userId: this.$route.query.userId }});
        }
    }
}
</script>

<style scoped>
.info-page{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.info-con{
    width: 80%;
    min-height: 300px;
    height: auto;
    margin: 50px auto 0;
    overflow: hidden;
}
.info-con h2{
    font-size: 16px;
    text-align: left;
    border-bottom: 1px #000 dashed;
    padding-bottom: 10px;
}
.info-con div{
    font-size: 16px;
    text-align: left;
    padding-top: 10px;
}
p{
    width: 80%;
    height: 30px;
    line-height: 30px;
    margin: 30px auto 0;
    text-align: center;
    color: #fff;
    background: #42b983;
    border-radius: 10px;
}
</style>
