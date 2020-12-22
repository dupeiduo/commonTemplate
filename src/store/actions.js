import { login, logout } from '@/api/login'
import { getJse } from '@/utils/get_jse'
import router from '@/router'

export default {
  login({ commit }, params) {
    var { username, password } = params
    password = getJse(password)
    commit("LOADING", true)
    login({userId: username, password}).then((res)=> {
      if (res.status === 200 && res.data.success) {
        commit('LOGIN', res.data.data)
        router.push('/home')
      } else {
        // login error
      }
      commit("LOADING", false)
    })
  },
  async logout({ commit }, params) {
    await logout()
    commit('LOGOUT')
    router.push('/login')
  },
}
