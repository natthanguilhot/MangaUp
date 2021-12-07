import { createStore } from 'vuex'

export default createStore({
  state: {
    listManga : [
      
    ],
  },
  mutations: {
    updateLS(state){
      localStorage.setItem('MangaUp', JSON.stringify(state.listManga));
    },
    addMangaToList(state, newManga){
      let mangaToAdd={ // On créé un manga
        id : state.listManga.length,
        name : newManga.name,
        price : newManga.price,
        parution : newManga.parution,
        lastReleasedVolume : newManga.lastReleasedVolume,
        lastBoughtVolume : newManga.lastBoughtVolume,
        lastRead : newManga.lastRead,
        tomes:[],
      };
      for(let i=0; i < mangaToAdd.lastReleasedVolume; i++ ) { // Pour change tome sorti lastReleasedVolume
        let tomeToAdd = {
          id: i,
          number: i+1,
          bought: false,
          read: false,
        }
        if(tomeToAdd.number <= mangaToAdd.lastBoughtVolume){ // Si il est acheté, on passe la valeur bought à true
          tomeToAdd.bought = true;
        }
        if(tomeToAdd.number <= mangaToAdd.lastRead) { // Si il est lu, on passe la valeur read à true
          tomeToAdd.read = true;
        }
        mangaToAdd.tomes.push(tomeToAdd); // On push le tome dans le tableau tomes
      }
      state.listManga.push(mangaToAdd) // On push le manga dans le tableau listManga
      localStorage.setItem('MangaUp', JSON.stringify(state.listManga));
    },
    deleteMangaToList(state, indexToDelete) {
      state.listManga.splice(indexToDelete, 1); 
    },
    addTomeReleased(state, index){
      let tomeToAdd = {
        id: index,
        number: state.listManga[index].lastReleasedVolume+1,
        bought: false,
        read: false,
      };
      state.listManga[index].lastReleasedVolume++; // Incrémenter le nombre de tome sortie
      state.listManga[index].tomes.push(tomeToAdd); // Ajouter le dernier tome sortie au tableau des tomes
    },
    addTomeBought(state, index){
      if(state.listManga[index].lastReleasedVolume === state.listManga[index].lastBoughtVolume){ // Si le dernier acheté == au dernier tome sortie
        let tomeToAdd = {
          id: state.listManga[index].tomes.length,
          number: state.listManga[index].lastReleasedVolume+1,
          bought: true,
          read: false,
        }
        state.listManga[index].lastReleasedVolume++; // On incrémente le nombre de tome sortie
        state.listManga[index].tomes.push(tomeToAdd);// Et on ajoute un tome au tableau des tomes
      } else {
        for(let tome of state.listManga[index].tomes){
          if(tome.bought == false){
            tome.bought = true;
            break
          }
        }
      }
      state.listManga[index].lastBoughtVolume++; // Quoi qu'il arrive, on incrémenter le nombre du dernier tome acheté
    },
    addTomeRead(state, index){
      if(state.listManga[index].lastRead === state.listManga[index].lastBoughtVolume && state.listManga[index].lastBoughtVolume === state.listManga[index].lastReleasedVolume){ // Si le dernier acheté == au dernier tome sortie
        let tomeToAdd = {
          id: state.listManga[index].tomes.length,
          number: state.listManga[index].lastReleasedVolume+1,
          bought: true,
          read: true,
        }
        state.listManga[index].lastReleasedVolume++; // On incrémente le nombre de tome sortie
        state.listManga[index].lastBoughtVolume++; // On incrémente le nombre de tome acheté
        state.listManga[index].tomes.push(tomeToAdd); // Et on ajoute un tome au tableau des tomes
      } else if (state.listManga[index].lastRead === state.listManga[index].lastBoughtVolume) { // Si le dernier tome lu == au dernier tome acheté
        for(let tome of state.listManga[index].tomes) { 
          if(tome.read == false){ // On passe le dernier tome non lu et non acheté a vrai
            tome.read = true;
            tome.bought = true;
            break
          }
        }
        state.listManga[index].lastBoughtVolume++; // On incrémente le nombre de tome acheté
      } else { // Sinon, on passe le dernier tome non lu à vrai
        for(let tome of state.listManga[index].tomes) {
          if(tome.read == false){
            tome.read = true;
            break
          }
        }
      }
      state.listManga[index].lastRead++; // Quoi qu'il arrive, on incrémenter le nombre du dernier tome lu
    },
    updateTomeBought(state, idManga){
      let n = 0;
      for(let tome of state.listManga[idManga].tomes) {
        if(tome.bought == true){
          n++;
        }
      }
      state.listManga[idManga].lastBoughtVolume = n;
    },
    updateTomeRead(state, idManga){
      let n = 0;
      for(let tome of state.listManga[idManga].tomes) {
        if(tome.read == true){
          n++;
        }
      }
      state.listManga[idManga].lastRead = n;
    },
  },
  actions: {},
  modules: {}
})
