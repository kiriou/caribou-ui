export const mockMovementListResponse = () => ({
  data: [
    {
      _id: '7465',
      ledgerId: '1234',
      name: 'Billets d\'avion',
      description: 'SAS + Norvegian',
      owner: '1234',
      recipients: ['1234', '5678'],
      amount: 570,
      way: 'out',
      currency: 'EUR',
      category: 'Transport',
      frequency: {
        type: 'single',
        pattern: '',
      },
      period: {
        start: '2017-09-20T01:45:48.604Z',
        end: '2017-09-20T01:45:48.604Z',
      },
      creator: 'string',
      lastModifier: 'string',
      creationDate: '2017-09-20T01:45:48.604Z',
      modificationDate: '2017-09-20T01:45:48.604Z',
    },
    {
      _id: '9437',
      ledgerId: '1234',
      name: 'Croisière fjords',
      description: 'Croisière + bus + train',
      owner: '5678',
      recipients: ['1234', '5678'],
      amount: 860,
      way: 'out',
      currency: 'EUR',
      category: 'Activité',
      frequency: {
        type: 'recurrent',
        pattern: '0 15 10 L * ?',
      },
      period: {
        start: '2017-09-20T01:45:48.604Z',
        end: '2017-09-20T01:45:48.604Z',
      },
      creator: 'string',
      lastModifier: 'string',
      creationDate: '2017-09-20T01:45:48.604Z',
      modificationDate: '2017-09-20T01:45:48.604Z',
    },
  ],
})
;
