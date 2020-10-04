import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 99;
`

const NavLink = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;

  &:hover{
    text-decoration: underline;
  }
`
const WorkWrapper = styled.div`
  position: fixed;
  width: 100vw;
  top: 2vw;
  left: 0;
  z-index: 999;
  text-align: center;
`
const AboutWrapper = styled.div`
  position: fixed;
  width: 100vw;
  bottom: 2vw;
  left: 0;
  z-index: 999;
  text-align: center;
`

const NavigationWrapper = styled.nav`
  position: fixed;
  background-color: white;
  width: 100vw;
  height: 100vh;
  padding: 4vw 2vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
`

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
            }
          }
        }
      }
    }
  `)

  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(showResults => !showResults)

  const posts = data.allMarkdownRemark.edges
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <Link
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3>
        <Link
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div>
      <HeaderWrapper>
        {/* <header>{header}</header> */}
        <WorkWrapper>
            <NavLink onClick={onClick}>
              {showResults? 'Close' : 'Works'}
              </NavLink>
        </WorkWrapper>
        <AboutWrapper>
            <NavLink>About</NavLink>
        </AboutWrapper>
        {showResults && (
          <NavigationWrapper>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <h3 style={{display: 'inline-block'}}>
                  <Link style={{marginLeft: '1vh'}} to={node.fields.slug}>
                    {title}
                    {/* <img style={{margin: '0 1vh 0 3vh'}} src="https://source.unsplash.com/random/80x80"></img> */}
                    {' / '}
                  </Link>
                </h3>
              )
            })}
          </NavigationWrapper>
        )

        }
      </HeaderWrapper>
      <main>{children}</main>
    </div>
  )
}

export default Layout