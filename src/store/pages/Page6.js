export const Page6 = {
  namespaced:true,
  state: () => ({
    result: {
      'any wishes': '',
    },    
    title: {
      en: 'Communication',
      ru: 'Коммуникация',
    },
    description: {
      en: 'Communication is an important process of any project, we will ask you to answer a few simple questions, this will help to form a comfortable channel for communication, taking into account your wishes',
      ru: 'Общение — важный процесс любого проекта, мы попросим вас ответить на несколько простых вопросов, это поможет сформировать комфортный канал для общения с учетом ваших пожеланий',
    },
    fields:[
      {
        name: 'sprints',
        label: {
          en: 'Choose the correct statement:',
          ru: 'Выберите правильное утверждение:',
        },
        type: 'radio',
        values: {
          en: [
            'I would like to participate in all project processes and constantly participate in discussions',
            'I would like you to break the task into weekly sprints (stages) and send big updates to me by mail / instant messengers'
          ],
          ru: [
            'Я хотел бы участвовать во всех процессах проекта и постоянно участвовать в обсуждениях',
            'Я бы хотел, чтобы вы разбили задачу на еженедельные спринты (этапы) и присылали мне большие обновления на почту/мессенджеры'
          ]
        }
      },
      {
        name: 'discuss in weekend',
        label: {
          en: 'On weekends and holidays:',
          ru: 'В выходные и праздничные дни:',
        },
        type: 'radio',
        values: {
          en: ['I am in touch and available to discuss working moments', 'Do not disturb'],
          ru: ['Я на связи и готов обсудить рабочие моменты', 'Не беспокоить'],
        }
      },
      {
        name: 'any wishes',
        label: {
          en: 'We will listen to any of your wishes regarding communication and workflow in a free form',
          ru: 'Выслушаем любые ваши пожелания по общению и рабочему процессу в свободной форме',
        },
        type: 'textarea',
      },
    ]
  })
}