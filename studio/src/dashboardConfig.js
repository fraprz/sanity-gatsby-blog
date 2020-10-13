export default {
  widgets: [
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
                  buildHookId: '5f85b53b4048a41f7ed11cf0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ebbumigv',
                  apiId: '0bc2c630-d7e1-4f88-976f-bd9bc366be3a'
                },
                {
                  buildHookId: '5f85b53b1250bd1bc244e19e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-1dq2wdyc',
                  apiId: 'bca0bd8f-f441-4787-8af8-39134ce0c9b4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fraprz/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-1dq2wdyc.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
