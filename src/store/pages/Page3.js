export const Page3 = {
  namespaced: true,
  state: () => ({
    result:{
      'list landing pages': '',
      'features':[],
    },    
    title: 'Technical requirements',
    description: 'Answer technical questions about the project.',
    fields:[
      {
        name:'list landing pages',
        placeholder:'List all landing page blocks which must be present',
        type:'textarea'
      },
      { 
        name: 'features',
        label: 'Functional features',
        type: 'checkbox',
        values:[
          'Multilingual', 'Calculator', 'Quiz'
        ]
      },
    ]
  }),
  mutations:{
    setValue(state, payload){
      state.result[payload.name] = payload.value
    },
    setCheckedArray(state, payload){
      state.result[payload.name].includes(payload.value) 
      ? state.result[payload.name] = state.result[payload.name].filter(e => e !== payload.value) 
      : state.result[payload.name].push(payload.value)
    }
  },
}