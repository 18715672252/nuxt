/*
fetch 方法用于在渲染页面前填充应用的状态树（store）数据， 与 asyncData 方法类似，不同的是它不会设置组件的数据
*/
export default {
    fetch ({ store, params }) {//有可能在服务端执行也可能客户端执行
      return axios.get('http://my-api/stars')
      .then((res) => {
        store.commit('setStars', res.data)
      })
    }
}