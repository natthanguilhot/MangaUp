import { createStore } from 'vuex'

export default createStore({
  state: {
    listManga : [
      
    ],
  },
  mutations: {
    addMangaToList(state, newManga){
      let mangaToAdd={ // On créé un manga
        id : state.listManga.length,
        name : newManga.name,
        price : newManga.price,
        parution : newManga.parution,
        lastReleasedVolume : newManga.lastReleasedVolume,
        lastBoughtVolume : newManga.lastBoughtVolume,
        lastRead : newManga.lastRead,
      };
      state.listManga.push(mangaToAdd) // On push le manga dans le tableau listManga
      localStorage.setItem('MangaUp', JSON.stringify(state.listManga));
    },
    deleteMangaToList(state, indexToDelete) {
      state.listManga.splice(indexToDelete, 1); 
      localStorage.setItem('MangaUp', JSON.stringify(state.listManga));
    },
    modifyTomeReleased(state, {index, theSwitch}){
      switch (theSwitch) { 
        case '+': // Dans le cas ou on incrémente
          state.listManga[index].lastReleasedVolume++; // Incrémenter le nombre de tome sortie
        break;
        case '-': // Dans le cas ou on décremente
          if(state.listManga[index].lastReleasedVolume <= 0){
            alert('Vous ne pouvez plus enlever de Tomes Sortis');
          }else if(state.listManga[index].lastReleasedVolume === state.listManga[index].lastBoughtVolume && state.listManga[index].lastBoughtVolume === state.listManga[index].lastRead){
            state.listManga[index].lastReleasedVolume--;
            state.listManga[index].lastBoughtVolume--;
            state.listManga[index].lastRead--
          } else if (state.listManga[index].lastReleasedVolume === state.listManga[index].lastBoughtVolume) {
            state.listManga[index].lastReleasedVolume--;
            state.listManga[index].lastBoughtVolume--;
          } else {
            state.listManga[index].lastReleasedVolume--; // Incrémenter le nombre de tome sortie
          }
        break;
      }
      localStorage.setItem('MangaUp', JSON.stringify(state.listManga));
    },
    modifyTomeBought(state, {index, theSwitch}){
      switch (theSwitch) {
        case '+': // Dans le cas ou on incrémente
          if(state.listManga[index].lastReleasedVolume === state.listManga[index].lastBoughtVolume){ // Si le dernier acheté == au dernier tome sortie
            state.listManga[index].lastReleasedVolume++; // On incrémente le nombre de tome sortie
            state.listManga[index].lastBoughtVolume++; // Quoi qu'il arrive, on incrémenter le nombre du dernier tome acheté
          } else if(state.listManga[index].lastBoughtVolume < state.listManga[index].lastReleasedVolume) {
            state.listManga[index].lastBoughtVolume++; // Quoi qu'il arrive, on incrémenter le nombre du dernier tome acheté
          }
        break
        case '-': // Dans le cas ou on décremente
        if(state.listManga[index].lastBoughtVolume <= 0) {
          alert('Vous ne pouvez plus enlever de Tomes Achetés')
        } else if (state.listManga[index].lastBoughtVolume === state.listManga[index].lastRead) {
          state.listManga[index].lastBoughtVolume--; // On décrement le nombre du dernier tome acheté
          state.listManga[index].lastRead--;
        } else {
          state.listManga[index].lastBoughtVolume--; // On décrement le nombre du dernier tome acheté
        }
        break
      }
      localStorage.setItem('MangaUp', JSON.stringify(state.listManga));
    },
    modifyTomeRead(state, {index, theSwitch}){
      switch (theSwitch) {
        case '+': // Dans le cas ou on incrémente
          if(state.listManga[index].lastRead === state.listManga[index].lastBoughtVolume && state.listManga[index].lastRead === state.listManga[index].lastReleasedVolume){ // Si le dernier acheté == au dernier tome sortie
            state.listManga[index].lastRead++; // On incrémenter le nombre du dernier tome lu  
            state.listManga[index].lastReleasedVolume++; 
            state.listManga[index].lastBoughtVolume++;
          } else if (state.listManga[index].lastRead === state.listManga[index].lastBoughtVolume) { // Si le dernier tome lu == au dernier tome acheté
            state.listManga[index].lastRead++; // On incrémenter le nombre du dernier tome lu  
            state.listManga[index].lastBoughtVolume++;
          } else {
            state.listManga[index].lastRead++; // On incrémenter le nombre du dernier tome lu  
          }
        break
        case '-': // Dans le cas ou on décremente
        if(state.listManga[index].lastRead === 0) {
          alert('Vous ne pouvez plus enlever de Tomes Lus');
        } else {
          state.listManga[index].lastRead--; // On décrement le nombre du dernier tome lu
        }
        break
      }
      localStorage.setItem('MangaUp', JSON.stringify(state.listManga));
    },
  },
  actions: {},
  modules: {}
})
