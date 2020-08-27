/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// image ripped out since I don't have one at the moment.
// example from the demo can be found here:
// https://github.com/gatsbyjs/gatsby-starter-blog/blob/master/src/components/bio.js

const Bio: React.FC = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata

  // Gatsby Image doesn't play nice w/ theme-ui sx prop
  return (
    <div
      sx={{
        display: 'flex',
        mb: 4,
      }}
    >
      <p>
        Written by <strong>{author.name}</strong> {author.summary}
      </p>
    </div>
  )
}

export default Bio
