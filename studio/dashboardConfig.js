export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e3ae78ba868ee9d291be9ac',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-jqgtfsmf',
                  apiId: 'b74d9f3e-3f67-49bf-8b1e-d24b1de2242c'
                },
                {
                  buildHookId: '5e3ae78bd53259aba299594b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-6cj5i3sv',
                  apiId: '521d8368-e4dd-43d1-944e-072923700123'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/get-off-my/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-6cj5i3sv.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
