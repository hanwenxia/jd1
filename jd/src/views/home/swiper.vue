<template>
<div class="banner_swiper">
    <div class="swiper-container banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="https://m.360buyimg.com/mobilecms/jfs/t25339/69/2102467589/153201/28ee479d/5bc404f3N3924acf5.jpg!cr_1125x549_0_72" alt="">
            </div>
            <div class="swiper-slide">
                <img src="https://m.360buyimg.com/mobilecms/jfs/t26791/330/1063051658/125777/6fa2b07c/5bc44833N97907eb9.jpg!cr_1125x549_0_72" alt="">
            </div>
            <div class="swiper-slide">
                <img src="https://m.360buyimg.com/mobilecms/s1125x690_jfs/t27799/139/1226898726/161442/55f563be/5bc478ebN375b321b.jpg!cr_1125x549_0_72!q70.jpg.dpg" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</div>
</template>
<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      value2: 0
    };
  },
  mounted(){
      let banner = new Swiper('.banner',{
          autoplay:{
              delay:2000,
            //   disableOnInteraction:false
          },
          loop:true,
          pagination:{
              el:".swiper-pagination",
              type:'bullets',
          }
      })
  }
};
</script>
<style lang="less">
    @r:37.5rem;
    .banner_swiper{
        .swiper-container,.banner{
            height: 183/@r;
            background: #ccc;
            .swiper-slide{
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .swiper-pagination-bullet{
                box-sizing: border-box;
                border-radius: 7px;
                height: 6px;
                width: 6px;
                border: 1px solid #fff;
                margin: 0 4px;
                display: inline-block;
                opacity: 1;
                background: transparent;
            }
            .swiper-pagination-bullet-active{
                background: #fff;
            }
        }
    }
    
</style>

