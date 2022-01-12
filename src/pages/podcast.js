import * as React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';

const Podcast = ({data, location}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
    return(
        <Layout location={location} title={siteTitle}>
            <h1>Podcast</h1>
        </Layout>
    )
}

export default Podcast;
export const podQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
}`
