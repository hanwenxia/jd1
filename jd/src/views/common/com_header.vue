<template>
    <div class="com_header ovf">
        <div class='lt' @click='back'>
            <Icon type="chevron-left"></Icon>
        </div>
        <div class="search_box lt">
            <span v-if="title">{{title}}</span>
            <slot v-else></slot>    
        </div>
        <div class="rt">
            <Icon type="more"></Icon>
        </div>
    </div>
</template>

<script>
export default {
    props:['title'],
    data() {
        return {
            
        }
    },
    mounted() {
        
    },
    methods: {
        back() {
            this.$router.back();
        }
    },
};
</script>

<style scoped lang='less'>
    @r: 37.5rem;
    .com_header {
        position: fixed;
        width: 100%;
        z-index: 1000;
        height: 44/@r;
        background: #fff;
        border-bottom:1px solid #e5e5e5;
        div{
            height: 100%;
        }
        div:nth-child(2n-1){
            width: 50/@r;
            line-height: 44/@r;
            font-size: 20/@r;
            text-align: center;
            color: rgb(139, 134, 134);
        }
        div:nth-child(2){
            text-align: center;
            font-size: 16/@r;
            width: 273/@r;
            height: 30/@r;
            line-height: 30/@r;
            margin: 7/@r auto 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .iconfont{
            color:#fff;
            font-size: 25px;
        }
    }
    .jd_header_top{
        background: transparent
    }
</style>