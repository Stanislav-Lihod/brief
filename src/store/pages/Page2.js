export const Page2 = {
  namespaced: true,
  state: () => ({
    result:{
      'general info':'',
      'target audience':'',
      'problem solve':'',
      'questions and queries':'',
      'goals':[],
    },
    title: 'The target audience',
    description: 'Tell us about the audience of potential consumers of your product or service.',
    fields:[
      { 
        name: 'general info',
        placeholder: 'General information about the company',
        type: 'textarea',
      },
      { 
        name: 'target audience',
        placeholder: 'Describe your target audience',
        type: 'textarea',
      },
      { 
        name: 'problem solve',
        placeholder: 'What problem does your product/service solve for your user?',
        type: 'textarea',
      },
      { 
        name: 'questions and queries',
        placeholder: 'What are the most common questions and queries from clients?',
        type: 'textarea',
      },
      { 
        name: 'goals',
        label: 'Website creation goals',
        type: 'checkbox',
        values:[
          'Service Applications', 'Sales requests', 'Ensure attendance at the event', 'Increase awareness', 'Collect database'
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