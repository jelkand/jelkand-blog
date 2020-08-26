import React from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { NotFoundQuery } from '../../graphql-types'

const NotFoundPage: React.FC<PageProps<NotFoundQuery>> = ({
  data,
  location,
}) => {
  const siteTitle = data?.site?.siteMetadata?.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query NotFound {
    site {
      siteMetadata {
        title
      }
    }
  }
`
