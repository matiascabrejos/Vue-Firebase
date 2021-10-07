import axios from 'axios'

export default {
  login() {},
  async signup(context, payload) {
    const response = await axios.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC63e1FE5G6dw9TiuOG5LwZUSDK395uAiU',
      {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }
    )

    const responseData = response

    if (!response.ok) {
      console.log(responseData)
      const error = new Error(
        responseData.message || 'Failed to authenticate. Check your login data.'
      )
      throw error
    }

    console.log(responseData)
    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    })
  },
}
