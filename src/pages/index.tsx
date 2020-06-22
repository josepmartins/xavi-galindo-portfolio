// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout title={''} location={location}>
      <SEO title="All posts" />
      {/* <Bio /> */}
      {/* <h1 style={{fontSize: '75vh'}}>Xavi</h1>
      <h1 style={{fontSize: '75vh'}}>Galindo</h1> */}

      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article style={{display: 'inline-block'}} key={node.fields.slug}>
            <h3 style={{display: 'inline-block', fontSize: '25vh'}}>
              <Link to={node.fields.slug}>
                {title}
                {/* <div style={{display: 'inline-block', backgroundColor: '#ddd', height: '100px', width: '120px'}} /> */}
                {',      '}
              </Link>
            </h3>
          </article>
        )
      })}
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
`
