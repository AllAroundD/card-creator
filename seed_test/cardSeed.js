module.exports = [
    () => ({
      model: () => require('../models/cards'),
      refName: 'cards',
      entities: [
            {
                refName: 'seedCard1',
                data: {
                    name: "Doug",
                    desc: 'hi',
                    file_path: 'assets/img/cardsample1.jpg',
                    file_mimetype: 'image/jpg',
                    properties: [
                        {name: 'Status', value: 'Very Cool'},
                        {name: 'Capacity of Stacks', value: 'Full'}
                    ]
                }
            },
            {
                refName: 'seedCard2',
                data: {
                    name: "Eddi",
                    desc: 'it me',
                    file_path: 'assets/img/cardsample2.jpg',
                    file_mimetype: 'image/jpg',
                    properties: [
                        {name: 'Hobby', value: 'Playing Piano'},
                        {name: 'Feeling', value: 'Hungry'}
                    ]
                }
            },
      
    ]
    })
  ]

