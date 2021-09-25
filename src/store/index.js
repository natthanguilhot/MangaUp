import { createStore } from 'vuex'

export default createStore({
  state: {
    listManga : [
      {
        name: "My hero academia",
        price: 690,
        parution: true,
        lastReleasedVolume: 30,
        lastBoughtVolume: 29
      },
      {
        name: "Boruto",
        price: 790,
        parution: true,
        lastReleasedVolume: 16,
        lastBoughtVolume: 11
      }
    ],
  },
  mutations: {
    addMangaToList(state, newManga){
      state.listManga.push(newManga)
    }
  },
  actions: {
  },
  modules: {
  }
})
