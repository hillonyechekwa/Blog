import * as React from "react"
import { Link } from "gatsby"
import Nav from './nav'
import Footer from './footer'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let siteName

  if (isRootPath) {
    siteName = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    siteName = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <main className="content-wrapper">
        <Nav title={siteName}/>
        <main>{children}</main>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
