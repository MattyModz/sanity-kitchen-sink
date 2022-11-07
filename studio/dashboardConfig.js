export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6368d2ca5e2ed40384bc77e0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-cyxo4auv',
                  apiId: 'a77d64c8-926e-444f-aa48-701b96c8e002'
                },
                {
                  buildHookId: '6368d2caae2bef00880783e7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-rz1wc4o2',
                  apiId: '2232bb93-9084-4d80-abb4-e05b5986b29d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MattyModz/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-rz1wc4o2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
