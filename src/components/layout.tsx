/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Link } from 'gatsby'
import { WindowLocation } from '@reach/-js/react'

import { Maybe } from '../../graphql-types'

interface LayoutProps {
  title?: Maybe<string>
  location: WindowLocation<WindowLocation['state']>
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ location, title = '', children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header
  if (location.pathname === rootPath) {
    header = (
      <h1
        sx={{
          color: 'text',
          fontFamily: 'heading',
          lineHeight: 'heading',
          fontWeight: 'heading',
          fontSize: 5,
        }}
      >
        <Link
          sx={{
            boxShadow: 'none',
            color: 'inherit',
            textDecoration: 'none',
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        sx={{
          color: 'text',
          fontFamily: 'heading',
          lineHeight: 'heading',
          fontWeight: 'heading',
          fontSize: 3,
        }}
      >
        <Link
          sx={{
            boxShadow: 'none',
            color: 'inherit',
            textDecoration: 'none',
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      sx={{
        ml: 'auto',
        mr: 'auto',
        maxWidth: 9,
        padding: 3,
        paddingTop: 4,
        paddingBottom: 4,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
