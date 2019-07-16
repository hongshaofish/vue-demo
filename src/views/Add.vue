<template>
    <div class="add-page">
        <div class="add-con">
            <p><label>标题</label><input type="text" v-model="title" /></p>
            <p><label>内容</label><input type="text" v-model="content" /></p>
            <button type="button" @click="add()">确定</button>
        </div>
    </div>
</template>

<script>
import store from '@/store'
    export default {
        name: 'Add',
        store,
        data(){
            return{
                title: '',
                content: ''
            }
        },
        methods:{
            add(){
                if(this.title == '' || this.content == ''){
                    alert('标题内容不能为空！');
                    return false;
                }
                store.commit('addItem', {
                    title: this.title,
                    content: this.content
                });
                this.title = '';
                this.content = '';
                this.$router.push('/homes/list');
            }
        }
    }
</script>

<style scoped>
.add-page{
    width: 100%;
    height: 100%;
    background: #42b983;
    overflow: hidden;
}
.add-con{
    width: 70%;
    height: auto;
    margin: 150px auto 0;
}
.add-con p{
    padding: 0 10px;
    margin-bottom: 30px;
    color: #666;
    background: #fff;
    border-radius: 10px;
}
.add-con p label{
    display: inline-block;
    width: 40px;
}
.add-con p input{
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #000;
    border: none;
    background: none;
    outline:none;
}
.add-con button{
    width: 100%;
    height: 30px;
    line-height: 30px;
    margin: 0 auto;
    border: none;
    background: #358561;
    border-radius: 10px;
    color: #fff;
    text-align: center;
    outline: none;
}
</style>
