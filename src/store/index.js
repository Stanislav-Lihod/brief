import { createStore } from 'vuex'
import { Page1 } from './pages/Page1'
import { Page2 } from './pages/Page2'
import { Page3 } from './pages/Page3'
import { Page4 } from './pages/Page4'
import { Page5 } from './pages/Page5'
import { Page6 } from './pages/Page6'

export default createStore({
  state: {
    pagePosition: 1,
    maxPagePosition: 6,
    progress: 0,
    titleCurrentPage:'',
    descriptionCurrentPage:'',
    pageModule: 'Page1',
  },
  getters: {
  },
  mutations: {
    setPagePosition(state, value){
      if (value >=1 && value <= state.maxPagePosition) {
        state.pagePosition = value
      }
    },
    setProgress(state){
      state.progress = 100/state.maxPagePosition * state.pagePosition
    },
    setInfo(state){
      const currentState = state[`Page${state.pagePosition}`]
      if (currentState) {
        state.pageModule = `Page${state.pagePosition}`
        state.titleCurrentPage = currentState.title
        state.descriptionCurrentPage = currentState.description
      }
    },
    setValue(state, payload){
      state[state.pageModule].result[payload.name] = payload.value
    },
    setArraySelectedValues(state, payload){
      state[state.pageModule].result[payload.name].includes(payload.value) 
      ? state[state.pageModule].result[payload.name] = state[state.pageModule].result[payload.name].filter(e => e !== payload.value) 
      : state[state.pageModule].result[payload.name].push(payload.value)
    },
  },
  actions: {
    sendList(state){
      const body = {}
      for (let i = 1; i <= state.maxPagePosition; i++){
        const currentPage = state[`Page${i}`].result
        for (const key in currentPage) {
          if (currentPage[key] && currentPage[key] != '') {
            body[key] ? body[key + Math.random() * 100] = currentPage[key] : body[key] = currentPage[key]
          }
        }
      }
      console.log(JSON.stringify(body));
    }
  },
  modules: {
    Page1: Page1,
    Page2: Page2,
    Page3: Page3,
    Page4: Page4,
    Page5: Page5,
    Page6: Page6,
  }
})
