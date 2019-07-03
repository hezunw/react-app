import * as api from '@services/user'
export default {
  namespace: 'user',
  state: {
    name: 'user',
    user: {}
  },
  reducers: {
    updateFollow (state, { follow }) {
      return {
        ...state,
        followMap: { ...state.followMap, ...follow }
      }
    }
  },
  effects: dispatch => ({
    async getUserInfo ({ ids }, state) {
      await dispatch.user.emptyUser()
      return new Promise((resolve, reject) => {
        api
          .getMultiUser({
            ids: ids,
            token: state.auth.userInfo.token,
            uid: state.auth.userInfo.uid,
            device_id: state.auth.userInfo.clientId
          })
          .then(data => {
            let user = data[ids]
            dispatch.user.setUser({ user })
            resolve(user)
          })
          .catch(err => {})
      })
    }
  }),
  subscriptions: {}
}
