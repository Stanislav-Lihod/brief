export const Page1 = {
  namespaced: true,
  state: () => ({
    result:{
      name: '',
      email:'',
      company: '',
      website: '',
      timing: 1,
      budget: '',
    },
    title: 'Introduction',
    description: 'A little introductory information that will help us make the right commercial offer, depending on the budget and timing of the project.',
    fields:[
      { 
        name: 'name',
        placeholder: 'Name',
        type: 'text',
        required: true
      },
      { 
        name: 'email',
        placeholder: 'Email',
        type: 'email',
        required: true
      },
      {
        name: 'company',
        placeholder: 'Company Name',
        type: 'text',
      },
      {
        name: 'website',
        placeholder: 'Your company website, if any',
        type: 'text',
      },
      {
        label: 'Timing',
        name: 'timing',
        max: 365,
        type: 'rangeSlider',
      },
      {
        name: 'budget',
        placeholder: 'Estimated project budget',
        type: 'text',
      },
    ]
  })
}