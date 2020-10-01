export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
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
                  buildHookId: '5f75d0074be864390b2778c4',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-r5y4obhn',
                  apiId: 'b60b4da4-a4e4-467b-9d8d-8cd97aadc398'
                },
                {
                  buildHookId: '5f75d00865f6267fd99c1c3e',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-5se55o27',
                  apiId: '2396e5d6-922e-44b4-aa66-d080f1e56a7a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mattnaz/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-5se55o27.netlify.app', category: 'apps'}
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
