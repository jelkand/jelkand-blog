/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Link, graphql, PageProps } from 'gatsby'

import { BlogIndexQuery } from '../../graphql-types'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogIndex: React.FC<PageProps<BlogIndexQuery>> = ({ data, location }) => {
  const siteTitle = data?.site?.siteMetadata?.title
  const posts = data.allMdx.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      {posts.map(({ node }) => {
        const slug = node?.fields?.slug
        const title = node?.frontmatter?.title || slug
        return (
          <article key={slug}>
            <header>
              <h3
                sx={{
                  mb: 1,
                }}
              >
                <Link sx={{ boxShadow: 'none' }} to={slug!}>
                  {title}
                </Link>
              </h3>
              <small>{node?.frontmatter?.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: (node?.frontmatter?.description ||
                    node.excerpt) as string,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
