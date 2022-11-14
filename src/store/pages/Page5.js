export const Page5 = {
  namespaced:true,
  state: () => ({
    result:{
      'understand your design needs': '',
      'mood and associations':[],
      'hue and saturation':[],
    },
    title: 'Design',
    description: 'A few questions about layout and design',
    fields:[
      { 
        name: 'mood and associations',
        label: 'The mood and associations that design should evoke',
        type: 'checkbox',
        values:[
          'Expensive', 'Strict', 'Minimalist', 'Dynamic', 'Bright', 'Corporate', 'Happy'
        ]
      },
      { 
        name: 'hue and saturation',
        label: 'Hue and saturation',
        type: 'checkbox',
        values:[
          'Corporate identity colors and shades only (if any)', 'Use light colors', 'Use dark colors', 'Use monochrome themes', 'Use background images/videos', 'At the discretion of the designer'
        ]
      },
      {
        name:'understand your design needs',
        placeholder:'What do you think would better understand your design needs?',
        type:'textarea'
      }
    ]
  })
}