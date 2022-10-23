export const Page6 = {
  state: () => ({
    title: 'Communication',
    description: 'Communication is an important process of any project, we will ask you to answer a few simple questions, this will help to form a comfortable channel for communication, taking into account your wishes',
    fields:[
      {
        label: 'Choose the correct statement:',
        type: 'radio',
        values: [
          'I would like to participate in all project processes and constantly participate in discussions',
          'I would like you to break the task into weekly sprints (stages) and send big updates to me by mail / instant messengers'
        ]
      },
      {
        label: 'On weekends and holidays:',
        type: 'radio',
        values: [
          'I am in touch and available to discuss working moments',
          'Do not disturb'
        ]
      },
      {
        label: 'We will listen to any of your wishes regarding communication and workflow in a free form',
        type: 'textarea',
      },
    ]
  })
}