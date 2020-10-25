import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Slider from "../components/slider"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const TitleWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  text-align: center;
`
const Title = styled.h1`
  font-size: 25vw;
  text-transform: uppercase;
`


const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout location={location}>
      <SEO
        title={post.frontmatter.title}
      />
      <TitleWrapper>
        <Title>
          {post.frontmatter.title}
        </Title>
      </TitleWrapper>
      <Slider images={data.images.edges}></Slider>
      <article>
        {/* {data.images.edges.map(edge =>
          <Img fluid={edge.node.childImageSharp.fluid} />
        )} */}
        {/* <header>
          <p>
            {post.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <footer>
          <Bio />
        </footer> */}
      </article>

      {/* <nav>
        <ul>
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
      </nav> */}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $absolutePathRegex: String!) {
    images: allFile(
      filter: {
        absolutePath: { regex: $absolutePathRegex }
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid( maxHeight: 1000) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
