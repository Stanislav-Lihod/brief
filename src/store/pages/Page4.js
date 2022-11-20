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
    title: {
      en: 'Materials',
      ru: 'Материалы',
    },
    description: {
      en: 'What do you already have',
      ru: 'Что у Вас уже есть',
    },
    fields:[
      { 
        name: 'prorotype',
        label: {
          en: 'Prorotype',
          ru: 'Прототип',
        },
        type: 'checkbox',
        values:{
          en: ['There are outlines', 'Professional'],
          ru: ['Есть очертания', 'Профессионал']
        }
      },
      { 
        name: 'photographic materials',
        label: {
          en: 'Photographic materials',
          ru: 'Фотоматериалы',
        },
        type: 'checkbox',
        values:{
          en:['Will be provided', 'Not used on the site', 'Must be selected from sources'],
          ru:['Будет предоставлено', 'Не используется на сайте', 'Должно быть выбрано из источников'],
        }
      },
      { 
        name: 'copywriting',
        label: {
          en: 'Copywriting',
          ru: 'Копирайтинг'
        },
        type: 'checkbox',
        values:{
          en:['There is a ready text', 'There is text from the old site', 'Need to write text'],
          ru:['Есть готовый текст', 'Есть текст со старого сайта', 'Нужно написать текст']
        }
      },
      { 
        name: 'form style',
        label: {
          en: 'Form style',
          ru: 'Стиль формы',
        },
        type: 'checkbox',
        values:{
          en:['Will be provided', 'Missing'],
          ru:['Будут предоставлены', 'Отсутствующий']
        }
      },
      { 
        name: 'customer reviews',
        label: {
          en:'Customer Reviews',
          ru:'Отзывы клиентов',
        },
        type: 'checkbox',
        values:{
          en: ['Available', 'Missing'],
          ru: ['Доступный', 'Отсутствующий'],
        }
      },
    ]
  })
}