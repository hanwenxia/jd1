const routers = [
{
    path: '/',
    meta: {
        title: '首页'
    },
    redirect:'/home',
    component: (resolve) => require(['./views/index.vue'], resolve),
    children:[
        {
            path:'/home',
            meta: {
                title: '首页'
            },
            component: (res) => require(['./views/home'],res)
        },
        {
            path:'/list',
            meta: {
                title: '分类'
            },
            component: (res) => require(['./views/list'], res)
        }, 
        {
            path: '/shopping',
            meta: {
                title: '拼购'
            },
            component: (res) => require(['./views/shopping'], res)
        },
        {
            path: '/mine',
            meta: {
                title: '我的'
            },
            component: (resolve) => require(['./views/mine'], resolve)
        }
        
    ]
},
{
    path:'/login',
    component: (resolve) => require(['./views/login'], resolve)
},
{
    path: '/cart',
    component: (res) => require(['./views/cart'], res)
},
{
    path: '/search',
    component:(res)=> require(['./views/search'],res)
}, 
{
    path: '/product',
    component: (res) => require(['./views/product'], res)
}
];
export default routers;