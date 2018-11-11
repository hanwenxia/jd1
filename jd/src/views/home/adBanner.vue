<template>
    <div class="ad_box">
        <img :src="src" alt="">
    </div>
</template>

<script>
    export default {
        props:['src']
    }
</script>

<style scoped lang='less'>
    @r:37.5rem;
    .ad_box{
        position: relative;
        z-index: 50;
        margin-top:-10/@r;
        height: 115/@r;
        border-radius:10/@r 10/@r 0 0;
        overflow: hidden;
        background: #fff;
        img{
            width: 100%
        }
    }
</style>