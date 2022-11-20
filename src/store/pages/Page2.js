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
    title: {
      en: 'The target audience',
      ru: 'Целевая аудитория',
    },
    description: {
      en: 'Tell us about the audience of potential consumers of your product or service.',
      ru: 'Расскажите об аудитории потенциальных потребителей вашего товара или услуги',
    },
    fields:[
      { 
        name: 'general info',
        placeholder: {
          en: 'General information about the company',
          ru: 'Общая информация о вашей компании',
        },
        type: 'textarea',
      },
      { 
        name: 'target audience',
        placeholder: {
          en: 'Describe your target audience',
          ru: 'Опишите вашу целевую аудиторию',
        },
        type: 'textarea',
      },
      { 
        name: 'problem solve',
        placeholder: {
          en: 'What problem does your product/service solve for your user?',
          ru: 'Какую проблему ваш продукт/услуга решает для вашего пользователя?',
        },
        type: 'textarea',
      },
      { 
        name: 'questions and queries',
        placeholder: {
          en: 'What are the most common questions and queries from clients?',
          ru: 'Какие самые частые вопросы и пожелания от клиентов?',
        },
        type: 'textarea',
      },
      { 
        name: 'goals',
        label: 'Website creation goals',
        label: {
          en: 'Website creation goals',
          ru: 'Цели создания сайта',
        },
        type: 'checkbox',
        values:{
          en: ['Service Applications', 'Sales requests', 'Ensure attendance at the event', 'Increase awareness', 'Collect database'],
          ru: ['Сервисные приложения', 'Запросы на продажу', 'Обеспечить присутствие на мероприятии', 'Повысить осведомленность', 'Собрать базу данных'],
        }
      },
    ]
  })
}