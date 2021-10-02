import { createStore } from 'vuex'

export default createStore({
  state: {
    listManga : [
      {
        id:0,
        name: "My hero academia",
        price: 690,
        parution: 'En cours',
        lastReleasedVolume: 30,
        lastBoughtVolume: 29
      },
      {
        id:1,
        name: "Boruto",
        price: 790,
        parution: 'En cours',
        lastReleasedVolume: 16,
        lastBoughtVolume: 11
      }
    ],
  },
  mutations: {
    addMangaToList(state, newManga){
      state.listManga.push(newManga)
      console.log(state.listManga);
    }
  },
  actions: {
  },
  modules: {
  }
})
