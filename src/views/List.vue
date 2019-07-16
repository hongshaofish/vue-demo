<template>
    <div class="list-page">
        <ol>
            <li v-for="(item, index) in pageLists" :key="index" @click="detailClick(item, index)" :class="{'active': current == index && current !== ''}">
                <h4>{{item.title}}</h4>
                <p>{{item.content}}</p>
            </li>
        </ol>
    </div>
</template>

<script>
import store from '@/store'
export default {
    name: 'List',
    store,
    data(){
        return{
            current: this.$route.query.userId
        }
    },
    computed: {
        pageLists(){
            return store.state.lists;
        }
    },
    methods: {
        detailClick(item, index){
            this.current = index;
            store.commit('checkDetail', {
                title: this.pageLists[this.current].title,
                content: this.pageLists[this.current].content
            });
            this.$router.push({ path: '/info', query: { userId: this.current }});
        }
    }
}
</script>

<style scoped>
.list-page{
    width: 100%;
    height: 100%;
    margin-bottom: 50px;
    overflow: hidden;
    overflow-y: scroll;
}
.list-page ol{
    padding: 30px;
    height: auto;
}
.list-page ol li{
    list-style: none;
    padding: 10px;
    background: #42b983;
    border-radius: 10px;
    overflow: hidden;
    color: #fff;
    margin-bottom: 10px;
}
.list-page ol li h4{
    font-size: 14px;
    border-bottom: 1px #fff dashed;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-bottom: 5px;
}
.list-page ol li p{
    padding-top: 5px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.list-page ol li.active{
    background: #358561;
}
</style>

