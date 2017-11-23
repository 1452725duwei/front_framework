import Vue from 'vue';  
import VueRouter from 'vue-router';  
//主页面入口  
import App from "./app.vue";  
//其他页面  
import Home from "./pages/home/home.vue";  
import Community from "./pages/community/community.vue";  
import Classify from "./pages/classify/classify.vue";  
import Mine from "./pages/mine/mine.vue";  
import Shopcart from "./pages/shopcart/shopcart.vue";  
  
Vue.use(VueRouter);  
  
const router = new VueRouter({  
    routes:[  
        {path:"/",component:Home},  
        {path:"/community",component:Community},  
        {path:"/classify",component:Classify},  
        {path:"/mine",component:Mine},  
        {path:"/shopcart",component:Shopcart}  
    ]  
})  
//指定一开始加载的页面  
new Vue({  
    router,  
    render:h=>h(App)  
}).$mount("#app")  