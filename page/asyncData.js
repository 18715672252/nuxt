/*
asyncData方法会在组件（限于页面组件）每次加载之前被调用。
它可以在服务端或路由更新之前被调用。
在这个方法被调用的时候，第一个参数被设定为当前页面的上下文对象，
你可以利用 asyncData方法来获取数据并返回给当前组件
改方法在vue所有的生命周期函数之前无法使用this
可以向服务器获取数据
*/

export default {
    data(){
        return {
            msg:'111'
        }
    },
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error, app}) {//有可能在服务端执行也可能客户端执行
      console.log(window);//刷新时取不到window对象
      console.log(1);
      console.log(process.server);//全局使用的环境变量用来判断当前是在服务端还是客户端 , false客户端，true服务端执行log不会浏览器上输出
      console.log(isDev);//是否dev环境 true||false
      console.log(route);//当前路由的路由对象信息
      console.log(store);//vuex
      console.log(env);//nuxt.config.js中配置的环境变量,env节点所配置所有环境变量
      console.log(params);//路由的params传递的参数
      console.log(query);//路由的query传递参数
      console.log(req);//请求对象
      console.log(res);
      console.log(app);//当前vue所对应的实例
      console.log(redirect);//重定向路由函数 redirect('/')
      console.log(error);//用这个方法展示错误页面 error(params)，params包含statusCode和message字段
      console.log(1);
      return {//return的数据，data里面没有的话会新增，有得话会覆盖（无论什么数据类型）
          msg:'22222', //覆盖data里面的数据
          newMsg:'newMsg'//向data里面新增一个数据
      }
    }
}