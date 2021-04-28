export const state = () => ({
  list: []
})

export const mutations = {
  fromLocalStorage(state, array) {
    for (let i=0; i<array.length; i++) {
      state.list.push(array[i])
    }
    console.log(state.list, array)
  },
  add(state, product) {
    state.list.push(product)
  },
  remove(state, { id }) {
    for (let i=0; i<state.list.length; i++) {
      if (state.list[i].id === id) {
        state.list.splice(i, 1)
        i--
      }
    }
  },
  clear(state) {
    state.list = []
  }
}
