import * as React from 'react';
// import {graphql} from 'gatsby'
import Layout from '../components/layout'

const About = ({data, location}) => {
    return(
    <Layout location={location}>
        <h1>About</h1>
    </Layout>
    )
}

export default Layout
