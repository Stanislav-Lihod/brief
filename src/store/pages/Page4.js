export const Page4 = {
  namespaced:true,
  state: () => ({
    result:{
      'prorotype':[],
      'photographic materials':[],
      'copywriting':[],
      'form style':[],
      'customer reviews':[],
    },
    title: 'Materials',
    description: 'What do you already have',
    fields:[
      { 
        name: 'prorotype',
        label: 'Prorotype',
        type: 'checkbox',
        values:[
          'There are outlines', 'Professional'
        ]
      },
      { 
        name: 'photographic materials',
        label: 'Photographic materials',
        type: 'checkbox',
        values:[
          'Will be provided', 'Not used on the site', 'Must be selected from sources'
        ]
      },
      { 
        name: 'copywriting',
        label: 'Copywriting',
        type: 'checkbox',
        values:[
          'There is a ready text', 'There is text from the old site', 'Need to write text'
        ]
      },
      { 
        name: 'form style',
        label: 'Form style',
        type: 'checkbox',
        values:[
          'Will be provided', 'Missing'
        ]
      },
      { 
        name: 'customer reviews',
        label: 'Customer Reviews',
        type: 'checkbox',
        values:[
          'Available', 'Missing'
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