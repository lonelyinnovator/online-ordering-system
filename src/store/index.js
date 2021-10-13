import { createStore } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'


const state = {
  //登录还是注册
  signin_signup: "in",
  /**
   * 登录和注册状态是否发生了变化
   * 默认为false, 点击注册或登录按钮状态变为true, 动画执行完后状态被设置为false
   */
  is_in_up_change: false,
}

export default createStore({
  state,
  actions,
  mutations,
  getters,
})
