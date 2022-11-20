export const Page3 = {
  namespaced: true,
  state: () => ({
    result:{
      'list landing pages': '',
      'features':[],
    },    
    title: {
      en: 'Technical requirements',
      ru: 'Технические требования',
    },
    description: {
      en: 'Answer technical questions about the project.',
      ru: 'Отвечать на технические вопросы по проекту.',
    },
    fields:[
      {
        name:'list landing pages',
        placeholder:{
          en:'List all landing page blocks which must be present',
          ru:'Перечислите все блоки целевой страницы, которые должны присутствовать',
        },
        type:'textarea'
      },
      { 
        name: 'features',
        label: {
          en: 'Functional features',
          ru: 'Функциональные особенности',
        },
        type: 'checkbox',
        values:{
          en: ['Multilingual', 'Calculator', 'Quiz'],
          ru: ['Многоязычный', 'Калькулятор', 'Опрос'],
        }
      },
    ]
  })
}