import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  window.onNuxtReady(() => {
    createPersistedState({
      paths: [
        'Todo.items'
      ]
    })(store)
  })
}
