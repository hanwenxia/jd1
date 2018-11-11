<style scoped lang='less'>
    @r:37.5rem;
    .router_box{
        position: fixed;
        z-index: 1000;
        background: #ffffff;
        bottom: 0;
        width: 100%;
        height: 55/@r;
        list-style: none;
        padding: 2% 0 1% 0;
        box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
        -webkit-box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
        -moz-box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
        .tab{
            text-align: center;
            font-size: 12px;
            a{
                display: block;
                width:100%;
                height:100%
            }
            a.current{
                color:rgb(235, 91, 91);
            }
        }
    }
</style>
<template>
    <div class="index">
        <router-view></router-view>
        <Row type="flex" justify="space-between" class="router_box">
            <Col span="4" class="tab">
                <router-link to="/home">
                    <Icon type="ios-home-outline" size='22' />
                    <div>首页</div> 
                </router-link>
            </Col>
            <Col span="4" class="tab">
                <router-link to="/list">
                    <Icon type="ios-list-outline" size='20'></Icon>
                    <div>分类</div>
                </router-link>
            </Col>
            <Col span="4" class="tab">
                <router-link to="/shopping">
                    <Icon type="bag" size="20"></Icon>
                    <div>拼购</div>
                </router-link>
            </Col>
            <Col span="4" class="tab">
                <router-link to="/cart">
                    <Icon type="ios-cart-outline"  size="20"></Icon>
                    {{this.$store.getters.num}}
                    <div>购物车</div>
                </router-link>
            </Col>
            <Col span="4" class="tab">
                <router-link to="/mine">
                    <Icon type="none" class="iconfont icon-user" size="20"></Icon>
                    <div>我的</div>
                </router-link>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
  methods: {
    handleStart() {
      this.$Modal.info({
        title: "Bravo",
        content: "Now, enjoy the convenience of iView."
      });
    }
  }
};
</script>