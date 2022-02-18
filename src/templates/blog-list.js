import React, {Component} from 'react';
import {graphql, Link} from 'gatsby';
import Layout from '../components/layout';
import Search from '../components/search'
import Seo from '../components/seo'
import Newsletter from "../components/newsletter"

export default class BlogList extends Component{
    render() {
        const {data} = this.props;
        const siteTitle = data.site.siteMetadata.title
        const siteDescription = data.site.siteMetadata.description
        const posts = data.allMarkdownRemark.edges
        const { currentPage, numPages} = this.props.pageContext
        const isFirst = currentPage ===1
        const isLast = currentPage === numPages
        const prevPage = currentPage -1 === 1 ? '/' : (currentPage - 1).toString()
        const nextPage = (currentPage + 1).toString()
        
        return(
            <Layout location={this.props.location} title={siteTitle}>
                <Search />
                <p className="site-description">{siteDescription}</p>
                <section className="home">
                {
                    posts.map(({node}) => {
                        const title = node.frontmatter.title || node.fields.slug
                        const tags = node.frontmatter.tags
                        return(
                            <section key={node.fields.slug}>
                                <article className="post-list-item">
                                <header>
                                    <h2>
                                        <Link to={node.fields.slug}>
                                            <span>{title}</span>
                                        </Link>
                                    </h2>
                                    <small>{node.frontmatter.date}</small>
                                    <ul className="post-item-tag">{tags.map(tag => (
                                        <li key={tag.id}>
                                            {tag}
                                        </li>
                                    ))}</ul>
                                </header>
                                <section>
                                    <p dangerouslySetInnerHTML={{__html: node.excerpt}} />
                                </section>
                                </article>
                            </section>
                        )
                    })
                }
                </section>
                <ul>
                    {!isFirst && (
                        <Link to={prevPage} rel="prev">
                            newer
                        </Link>
                    )}
                    {!isLast && (
                        <Link to={nextPage} rel="next">
                            older
                        </Link>
                    )}
                </ul>
                <Newsletter />
            </Layout>
    )
    }
}


export const pageQuery = graphql`
    query blogPageQuery($skip: Int!, $limit: Int!) {
        site{
            siteMetadata{
                title
                description
            }
        }
        allMarkdownRemark(
            sort: {fields: [frontmatter___date], order: DESC}
            limit: $limit
            skip: $skip
        ) {
            edges{
                node{
                    excerpt
                    fields{
                        slug
                    }
                    frontmatter{
                        date(formatString: "DD MMMM, YYYY")
                        title
                        description
                        tags
                    }
                }
            }
        }
    }
`
