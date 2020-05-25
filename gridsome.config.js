const tailwindcss = require("tailwindcss")
module.exports = {
  siteName: 'Gridsome',
  templates: {
    ContentfulBlogPost: '/blog/:slug'
  },
  plugins: [
    {
      use: "@gridsome/source-contentful",
      options: {
        space: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_TOKEN,
        host: "cdn.contentful.com",
        environment: process.env.CONTENTFUL_ENVIRONMENT,
        typename: "Contentful"
      }
     
  
    }
  ],
    css: {
      loaderOptions: {
        postcss: {
          plugins: [
            tailwindcss
          ],
        },
      },
    }
  }

