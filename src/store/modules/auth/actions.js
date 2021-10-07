import axios from 'axios'

export default {
  async signup(context, payload) {
    await axios
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC63e1FE5G6dw9TiuOG5LwZUSDK395uAiU',
        {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }
      )
      .then((res) => {
        console.log(res.data)
        context.commit('setUser', {
          token: res.data.idToken,
          userId: res.data.localId,
          tokenExpiration: res.data.expiresIn,
        })
      })
  },
}
