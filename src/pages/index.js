// Gatsby supports TypeScript natively!
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import styled from "styled-components"

const Title = styled.h1`
  position: absolute;
  width: 100vw;
  height: 100vh;
  text-align: center;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  mix-blend-mode: difference;
`
const ImageWrapper = styled.div`
  height: 100vh;
`
const BlogIndex = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="All posts" />
      <Title>Xavi Galindo</Title>
      <ImageWrapper><Img style={{ maxHeight: '100%' }} fluid={data.image2.childImageSharp.fluid} /></ImageWrapper>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
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
`
