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
    bodyList:{
      'name': '',
      'email': '',
      'company name': '',
      'website': '',
      'counter days': '',
      'budget': '',
      'general info': '',      
      'target audience': '',      
      'problem solve': '',      
      'questions and queries': '',      
      'goals': '',      
    },
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
    sendList(state){
      console.log(JSON.stringify(state.bodyList));
    },
    setCheckbox(state, newValue){
      state.bodyList.goals = newValue
    }
  },
  actions: {
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
