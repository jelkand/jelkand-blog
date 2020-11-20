/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'
import { Link, graphql, PageProps } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
// import { BlogPostBySlugQuery } from '../../graphql-types'
import { CodeBlock } from '../components/codeBlock'

const components = {
  code: CodeBlock,
};

interface BlogPostPageContext {
  slug: string
  previous?: ContextSubPage
  next?: ContextSubPage
}

interface ContextSubPage {
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
  }
}

const BlogPostTemplate: React.FC<PageProps<
  any,
  BlogPostPageContext
>> = ({ data, pageContext, location }) => {
  const post = data.mdx
  const siteTitle = data?.site?.siteMetadata?.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post?.frontmatter?.title ?? undefined}
        description={
          post?.frontmatter?.description ?? post?.excerpt ?? undefined
        }
      />
      <article>
        <header>
          <Styled.h1
            sx={{
              mt: 3,
              mb: 0,
            }}
          >
            {post?.frontmatter?.title}
          </Styled.h1>
          <Styled.p
            sx={{
              display: 'block',
              mb: 3,
            }}
          >
            {post?.frontmatter?.date}
          </Styled.p>
        </header>
        <MDXRenderer components={components}>{post?.body ?? ''}</MDXRenderer>
        <hr
          sx={{
            mb: 3,
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
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

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
