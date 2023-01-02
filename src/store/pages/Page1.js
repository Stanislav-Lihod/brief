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
    title: {
      en: 'Introduction',
      ru: 'Введение',
    },
    description: {
      en: 'A little introductory information that will help us make the right commercial offer, depending on the budget and timing of the project.',
      ru: 'Небольшая вводная информация, которая поможет нам составить правильное коммерческое предложение в зависимости от бюджета и сроков реализации проекта.',
    },
    fields:[
      { 
        name: 'name',
        placeholder: {
          en: 'Name *',
          ru: 'Имя *',
        },
        type: 'text',
        required: true
      },
      { 
        name: 'email',
        placeholder: {
          en: 'Email *',
          ru: 'Email *',
        },
        type: 'email',
        required: true
      },
      {
        name: 'company',
        placeholder: {
          en: 'Company Name',
          ru: 'Название компании',
        },
        type: 'text',
      },
      {
        name: 'website',
        placeholder: {
          en: 'Your company website, if any',
          ru: 'Веб сайт вашей компании',
        },
        type: 'text',
      },
      {
        label: {
          en: 'Timing',
          ru: 'Время'
        },
        name: 'timing',
        max: 365,
        type: 'rangeSlider',
      },
      {
        name: 'budget',
        placeholder: {
          en: 'Estimated project budget',
          ru: 'Запланированный бюджет проекта',
        },
        type: 'text',
      },
    ]
  })
}