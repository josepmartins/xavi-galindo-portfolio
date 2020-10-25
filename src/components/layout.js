import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled, { keyframes } from 'styled-components'
import Img from "gatsby-image"

const fadeTop = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
`
const HeaderWrapper = styled.div`
`
const NavLink = styled.div`
  font-size: 12px;
  cursor: pointer;
  z-index: 2;

  &:hover{
    text-decoration: underline;
  }
`
const NavLinkWrapper = styled.div`
  position: fixed;
  width: 100vw;
  padding: 2vw 0;
  left: 0;
  z-index: 999;
  text-align: center;
  ${props => props.top ? 'top: 0;' : 'bottom: 0;' };
`
const NavigationWrapper = styled.nav`
  position: fixed;
  background-color: white;
  width: 100vw;
  height: 100vh;
  padding: 6vh 3vw;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  overflow-y: auto;

  li {
    line-height: 1;
    display: inline-block;
    font-size: 6vw;
    text-transform: uppercase;
    overflow: hidden;
  }
`
const SectionLink = styled(Link)`
  animation: ${fadeTop} .4s cubic-bezier(.445,.05,.55,.95);
  animation-fill-mode: backwards;
  display: inline-block;
  position: relative;
  animation-delay: ${props => props.index * 20}ms;

  &:after {
    content: "";
    width: 0%;
    height: 0.5rem;
    background-color: currentColor;

    position: absolute;
    top: 55%;
    left: -5%;
    transform: translate(0, -50%);
    width: 100%;
    opacity: 0;
  }
  &:hover:after {
    opacity: 1;
  }
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

      image1: file(relativePath: { eq: "images/berlin.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image2: file(relativePath: { eq: "images/safrica.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 800) {
            ...GatsbyImageSharpFluid
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
        <NavLinkWrapper top>
            <NavLink onClick={onClick}>
              {showResults? 'Close' : 'Works'}
              </NavLink>
        </NavLinkWrapper>
        <NavLinkWrapper>
            <NavLink>
              <Link to={`/`}>About</Link>
            </NavLink>
        </NavLinkWrapper>
        {showResults && (
          <NavigationWrapper>
            <ul>
              <Img  style={{height: '200px', width: '300px', margin: '2vh 1vw 0 1vh', float: 'left'}} fluid={data.image1.childImageSharp.fluid} />
              {/* <img width="300" height="225" style={{padding: '2vh 1vw 0 1vh', float: 'left'}} src="https://source.unsplash.com/random/300x225"></img> */}
              {posts.map(({ node }, index ) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <>
                    <li key={title}>
                      <SectionLink index={index} to={node.fields.slug}>
                        {title}
                        {', '}
                      </SectionLink>
                    </li>
                    {(index === 2) && (
                      <Img  style={{height: '350px', width: '300px', margin: '2vh 1vw 0 1vh', float: 'right'}} fluid={data.image2.childImageSharp.fluid} />
                      // <img width="300" height="350" style={{padding: '2vh 1vw 0 1vh', float: 'right'}} src="https://source.unsplash.com/random/300x350"></img>
                    )}
                  </>
                )
              })}
            </ul>
          </NavigationWrapper>
          )}
      </HeaderWrapper>
      <main>{children}</main>
    </div>
  )
}

export default Layout