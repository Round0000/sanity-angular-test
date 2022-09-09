export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'Round0000/sanity-angular-test'
      }
    },
    { name: 'structure-menu' },
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
                  buildHookId: '631b49e1f6ff15057eaf9319',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-test-studio',
                  apiId: '7f5c90f4-0bfb-47cc-a2d4-cb663aee01f4'
                },
                {
                  buildHookId: '631b49e1e009f30450d0f098',
                  title: 'Website',
                  name: 'sanity-angular-test',
                  apiId: '97d65965-0e13-49e7-8d1a-e7bf183cc088'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Round0000/sanity-angular-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-test.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
