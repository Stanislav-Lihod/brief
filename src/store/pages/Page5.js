export const Page5 = {
  namespaced:true,
  state: () => ({
    result:{
      'understand your design needs': '',
      'mood and associations':[],
      'hue and saturation':[],
    },
    title: {
      en: 'Design',
      ru: 'Дизайн',
    },
    description: {
      en: 'A few questions about layout and design',
      ru: 'Несколько вопросов о верстке и дизайне',
    },
    fields:[
      { 
        name: 'mood and associations',
        label: {
          en: 'The mood and associations that design should evoke',
          ru: 'Настроение и ассоциации, которые должен вызывать дизайн',
        },
        type: 'checkbox',
        values:{
          en: ['Expensive', 'Strict', 'Minimalist', 'Dynamic', 'Bright', 'Corporate', 'Happy'],
          ru: ['Дорогой', 'Строгий', 'Минималистский', 'Динамический', 'Яркий', 'Корпоративный', 'Счастливый'],
        }
      },
      { 
        name: 'hue and saturation',
        label: {
          en: 'Hue and saturation',
          ru: 'Оттенок и насыщенность',
        },
        type: 'checkbox',
        values:{
          en: ['Corporate identity colors and shades only (if any)', 'Use light colors', 'Use dark colors', 'Use monochrome themes', 'Use background images/videos', 'At the discretion of the designer'],
          ru: ['Только цвета и оттенки фирменного стиля (если есть)', 'Используйте светлые тона', 'Используйте темные цвета', 'Используйте монохромные темы', 'Используйте фоновые изображения/видео', 'На усмотрение дизайнера'],
        }
      },
      {
        name:'understand your design needs',
        placeholder:{
          en: 'What do you think would better understand your design needs?',
          ru: 'Как вы думаете, что лучше понять ваши потребности дизайна?'
        },
        type:'textarea'
      }
    ]
  })
}