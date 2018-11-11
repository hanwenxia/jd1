import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import './less/index.css'
import 'swiper/dist/css/swiper.min.css';

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(iView);



// 路由配置
const RouterConfig = {
    mode: 'hash',
    linkActiveClass:'current',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});


const store = new Vuex.Store({
    state: {
        goods:[]
    },
    getters: {
        num(state){
            let list = state.goods;
            let n = 0;
            list.forEach((item) => {
                n += item.num * 1
            })
            return n;
        }
    },
    mutations: {
        add(state,obj){
            if(state.goods.indexOf(obj)!=-1){
                obj.num++;
            }else{
                state.goods.push(obj)
            }
        },
        remove(state,obj){
            state.goods = state.goods.filter((item)=>{
                return item != obj
            })
        }
    },
    actions: {
        add({commit},obj){
            commit('add',obj)
        },
        remove({commit},obj){
            commit('remove',obj)
        }
    }
});


Vue.filter('money',function (value) {
    return (value/100).toFixed(2)
})

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});