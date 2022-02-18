import React, {Component} from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

class BlogPostTemplate extends Component{
  render() {

    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata?.title || `Title`
    const { previous, next } =this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header className="post-header">
            <h1 itemProp="headline" id="post-title">{post.frontmatter.title}</h1>
            <small id="post-description">{post.frontmatter.description}</small>
            <ul id="post-info">
              <li>{post.frontmatter.date}</li>
              <li>{post.frontmatter.tags}</li>
            </ul>
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
            className="post-body"
          />
        </article>
        <nav className="blog-post-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: {slug: { eq: $slug }}) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`
