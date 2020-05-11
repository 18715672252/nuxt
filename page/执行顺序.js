/*
nuxt生命周期执行顺序
1.请求页面
2.nuxtServerInit在vuex中actions执行（我们想要将服务端的一些数据传到客户端，可以通过这个获取保存在状态中，客户端再从状态里取）
    actions：{
        nuxtServerInit({ commit }, context){
            //第一个参数vuex里面的
            //context页面的上下文对象，不包括context.redirect和context.error方法
        }
    }
3.middleware(中间件)
4.vaildate()参数效验
5.asyncDate()获取页面服务端渲染的数据
6.fetch操作store




*/