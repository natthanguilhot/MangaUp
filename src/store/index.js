import { createStore } from 'vuex'

export default createStore({
  state: {
    listManga : [
      {
        id:0,
        name: "My hero academia",
        price: 6.60,
        parution: 'En cours',
        lastReleasedVolume: 30,
        lastBoughtVolume: 29,
        lastRead: 29,
        tomes: [
          {
            id:0,
            number: 1,
            bought: true,
            read: true
          },
          {
            id:1,
            number: 2,
            bought: true,
            read: true
          },
          {
            id:2,
            number: 3,
            bought: true,
            read: true
          },
          {
            id:3,
            number: 4,
            bought: true,
            read: true
          },{
            id:4,
            number: 5,
            bought: true,
            read: true
          },
          {
            id:5,
            number: 6,
            bought: true,
            read: true
          },
          {
            id:6,
            number: 7,
            bought: true,
            read: true
          },
          {
            id:7,
            number: 8,
            bought: true,
            read: true
          },{
            id:8,
            number: 9,
            bought: true,
            read: true
          },
          {
            id:9,
            number: 10,
            bought: true,
            read: true
          },
          {
            id:10,
            number: 11,
            bought: true,
            read: true
          },
          {
            id:11,
            number: 12,
            bought: true,
            read: true
          },
          {
            id:12,
            number: 13,
            bought: true,
            read: true
          },
          {
            id:13,
            number: 14,
            bought: true,
            read: true
          },{
            id:14,
            number: 15,
            bought: true,
            read: true
          },
          {
            id:15,
            number: 16,
            bought: true,
            read: true
          },
          {
            id:16,
            number: 17,
            bought: true,
            read: true
          },
          {
            id:17,
            number: 18,
            bought: true,
            read: true
          },{
            id:18,
            number: 19,
            bought: true,
            read: true
          },
          {
            id:19,
            number: 20,
            bought: true,
            read: true
          },
          {
            id:20,
            number: 21,
            bought: true,
            read: true
          },
          {
            id:21,
            number: 22,
            bought: true,
            read: true
          },
          {
            id:22,
            number: 23,
            bought: true,
            read: true
          },
          {
            id:23,
            number: 24,
            bought: true,
            read: true
          },{
            id:24,
            number: 25,
            bought: true,
            read: true
          },
          {
            id:25,
            number: 26,
            bought: true,
            read: true
          },
          {
            id:26,
            number: 27,
            bought: true,
            read: true
          },
          {
            id:27,
            number: 28,
            bought: true,
            read: true
          },{
            id:28,
            number: 29,
            bought: true,
            read: true
          },
          {
            id:29,
            number: 30,
            bought: true,
            read: false
          },
        ],
      },
      {
        id:1,
        name: "Drifting Dragons",
        price: 7.50,
        parution: 'En cours',
        lastReleasedVolume: 9,
        lastBoughtVolume: 9,
        lastRead: 8,
        tomes: [
          {
            id:0,
            number: 1,
            bought: true,
            read: true
          },
          {
            id:1,
            number: 2,
            bought: true,
            read: true
          },
          {
            id:2,
            number: 3,
            bought: true,
            read: true
          },
          {
            id:3,
            number: 4,
            bought: true,
            read: true
          },
          {
            id:4,
            number: 5,
            bought: true,
            read: true
          },
          {
            id:5,
            number: 6,
            bought: true,
            read: true
          },
          {
            id:6,
            number: 7,
            bought: true,
            read: true
          },
          {
            id:7,
            number: 8,
            bought: true,
            read: true
          },
          {
            id:8,
            number: 9,
            bought: true,
            read: false
          },
        ],
      },
      {
        id:2,
        name: "Gunnm",
        price: 7.50,
        parution: 'Terminée',
        lastReleasedVolume: 9,
        lastBoughtVolume: 7,
        lastRead: 3,
        tomes:[
          {
            id:0,
            number: 1,
            bought: true,
            read: true
          },
          {
            id:1,
            number: 2,
            bought: true,
            read: true
          },
          {
            id:2,
            number: 3,
            bought: true,
            read: true
          },
          {
            id:3,
            number: 4,
            bought: true,
            read: false
          },
          {
            id:4,
            number: 5,
            bought: true,
            read: false
          },
          {
            id:5,
            number: 6,
            bought: true,
            read: false
          },
          {
            id:6,
            number: 7,
            bought: true,
            read: false
          },
          {
            id:7,
            number: 8,
            bought: false,
            read: false
          },
          {
            id:8,
            number: 9,
            bought: false,
            read: false
          },
        ],
      }
    ],
  },
  mutations: {
    addMangaToList(state, newManga){
      let mangaToAdd={
        id : state.listManga.length,
        name : newManga.name,
        price : newManga.price,
        parution : newManga.parution,
        lastReleasedVolume : newManga.lastReleasedVolume,
        lastBoughtVolume : newManga.lastBoughtVolume,
        lastRead : newManga.lastRead,
        tomes:[],
      };
      for(let i=0; i < mangaToAdd.lastReleasedVolume; i++ ) {
        let tomeToAdd = {
          id: i,
          number: i+1,
          bought: false,
          read: false,
        }
        if(tomeToAdd.number <= mangaToAdd.lastBoughtVolume){
          tomeToAdd.bought = true;
        }
        if(tomeToAdd.number <= mangaToAdd.lastRead) {
          tomeToAdd.read = true;
        }
        mangaToAdd.tomes.push(tomeToAdd);
      }
      state.listManga.push(mangaToAdd)
    },
    deleteMangaToList(state, idToDelete) {
      for( let i = 0; i < state.listManga.length; i++){ 
        if ( state.listManga[i].id === idToDelete) { 
          state.listManga.splice(i, 1); 
        }
      }
    },
    addTomeReleased(state, idManga){
      for( let i = 0; i < state.listManga.length; i++){ 
        if ( state.listManga[i].id === idManga) { 
          let tomeToAdd = {
            id: i,
            number: state.listManga[i].lastReleasedVolume+1,
            bought: false,
            read: false,
          }
          state.listManga[i].tomes.push(tomeToAdd);
          state.listManga[i].lastReleasedVolume++;
        }
      }
    },
    addTomeBought(state, idManga){
      for( let i = 0; i < state.listManga.length; i++){ 
        if ( state.listManga[i].id === idManga) {
          if(state.listManga[i].lastReleasedVolume === state.listManga[i].lastBoughtVolume){
            let tomeToAdd = {
              id: state.listManga[i].tomes.length,
              number: state.listManga[i].lastReleasedVolume+1,
              bought: true,
              read: false,
            }
            state.listManga[i].tomes.push(tomeToAdd);
            state.listManga[i].lastReleasedVolume++;
            state.listManga[i].lastBoughtVolume++;
          } else {            
            for(let tome of state.listManga[i].tomes){
              if(tome.bought === false){
                tome.bought = true;
                break
              }
            }
            state.listManga[i].lastBoughtVolume++;
          }
        }
      }
    },
    addTomeRead(state, idManga){
      for( let i = 0; i < state.listManga.length; i++){ 
        if ( state.listManga[i].id === idManga) { 
          if(state.listManga[i].lastBoughtVolume === state.listManga[i].lastRead){
            console.log('incr')

          } else if(state.listManga[i].lastReleasedVolume === state.listManga[i].lastBoughtVolume){

          } else {
            
          }
        } 
      }
    },
  },
  actions: {},
  modules: {}
})
