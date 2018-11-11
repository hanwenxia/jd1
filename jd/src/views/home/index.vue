<template>
    <div class='home'>
        <jd-header></jd-header>
        <swiper></swiper>
        <AdBanner src='https://m.360buyimg.com/mobilecms/jfs/t26821/315/1207928843/116614/3d50981f/5bc44208Nc9ac4ca7.jpg!q70.jpg.dpg'></AdBanner>
        <TabList></TabList>
        <KbList></KbList>
        <YHQ></YHQ>
        <MaioSha></MaioSha>
        <AdBanner style="margin-top:0" src='https://m.360buyimg.com/mobilecms/jfs/t26707/113/1279602227/106480/76fc002d/5bc591b2Nd8d7432c.jpg!q70.jpg.dpg'></AdBanner>
        <GoodsRec :title="'东 / 家 / 小 / 院'" :two='2' :four='4'></GoodsRec>
        <GoodsRec :title="'每 / 日 / 逛'" :four='8'></GoodsRec>
        <GoodsRec :title="'爱 / 生 / 活'" :two='4' :four='4'></GoodsRec>
        <GoodsRec :title="'逛 / 商 / 场'" :two='2' ></GoodsRec>
        <Recommond></Recommond>
    </div>
</template>

<script>
    import jdHeard from './jd_header.vue'
    import swiper from './swiper.vue'
    import AdBanner from './adBanner.vue'
    import TabList from './tabList.vue'
    import KbList from './kuaibao.vue'
    import YHQ from './yhquan.vue'
    import MaioSha from './miaosha.vue'
    import GoodsRec from './goodsRec.vue'
    import Recommond from './recommond.vue'
    export default {
        components:{
            'jd-header':jdHeard,
            swiper,AdBanner,TabList,KbList,YHQ,MaioSha,
            GoodsRec,Recommond
        }
    }
</script>

<style scoped lang = 'less'>
    @r:37.5rem;
    .home{
        margin-bottom: 55/@r;
    }
</style>