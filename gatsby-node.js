const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  // Get all markdown blog posts sorted by date
  return  graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges{
            node{
              fields{
                slug
              }
              frontmatter{
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if(result.errors) {
      throw result.errors
    }
      // Create blog posts pages
    const posts = result.data.allMarkdownRemark.edges

  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  // if (posts.length > 0) {
    posts.forEach((post, index) => {
      const next = index === 0 ? null : posts[index - 1].node
      const previous = index === posts.length - 1 ? null : posts[index + 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })
  // }


  const postsPerPage = 5
  const numPages = Math.ceil(posts.length / postsPerPage);
  // console.log('numPages', numPages)

  Array.from({length: numPages}).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/`: `/${i + 1}`,
      component: path.resolve(`./src/templates/blog-list.js`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1
      }
    })
  })

  })

  // if (result.errors) {
  //   reporter.panicOnBuild(
  //     `There was an error loading your blog posts`,
  //     result.errors
  //   )
  //   return
  // }



}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }

}


