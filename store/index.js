export const state = () => ({
  authUser: null,
  error: null,
})

export const mutations = {
  SET_USER: (state, authUser) => {
    state.authUser = authUser
  },
  SET_ERROR: (state, error) => {
    state.error = error
  },
}

export const actions = {
  authenticateUser({ commit }, authData) {
    try {
      // this.$fireAuth
      //   .signInWithEmailAndPassword(authData.email, authData.password)
      //   .then((result) => {
      //     commit('SET_USER', result)
      //     commit('SET_ERROR', null)
      //   })
      commit('SET_USER', 'probando')
      commit('SET_ERROR', null)
    } catch (e) {
      commit('SET_ERROR', e)
    }
  },
  cleanupAction({ commit }) {
    commit('SET_USER', null)
  },
  // onAuthStateChanged({ commit }, { authUser }) {
  //   if (!authUser) {
  //     commit('RESET_STORE')
  //     return
  //   }
  //   commit('SET_AUTH_USER', { authUser })
  // },
  async onAuthStateChangedAction({ commit, dispatch }, { authUser }) {
    console.log(`onAuthStateChangedAction`)
    if (!authUser) {
      await dispatch('cleanupAction')

      return
    }

    // you can request additional fields if they are optional (e.g. photoURL)
    const { uid, email, emailVerified } = authUser
    const usuario = {
      uid,
      email,
      emailVerified,
    }

    commit('SET_USER', {
      usuario,
    })
  },
}

export const getters = {
  isLoggedIn: (state) => {
    try {
      return state.authUser.id !== null
    } catch {
      return false
    }
  },
}
