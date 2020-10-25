// Gatsby supports TypeScript natively!
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const TitleWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  text-align: center;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  padding: 0 6.875vw;
  justify-content: center;
  // align-items: center;
  mix-blend-mode: difference;
  color: white;
  fill: white;
`
const Title = styled.h1`
  letter-spacing: -0.025em;
  text-transform: uppercase;
  font-size: 10vw;
  animation: ${fadeIn} .4s cubic-bezier(.445,.05,.55,.95);
`
const GridItem = styled.div`
  display: block;
  align-self: center;
  justify-self: center;
  position: relative;
  width: 100%;
`
const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(16,1fr);
  grid-template-rows: 100vh;
  grid-gap: 24px;

  & ${GridItem}:first-child {
    grid-column: 2/11;
    height: 90%;
  }

  & ${GridItem}:nth-child(2n) {
    grid-column: 11/15;
    height: 40%;
  }
`
const GridImage = styled(Img)`
  width: 100%;
  height: 100%;
`

const BlogIndex = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="All posts" />
      <TitleWrapper>
        {/* <Title>Xavi Galindo</Title> */}
        <svg width="2097" height="242" viewBox="0 0 2097 242" xmlns="http://www.w3.org/2000/svg">
          <path d="M175.975 237.776L99.175 119.19L173.254 4.22444H151.786L88.29 104.404L25.0961 4.22444H2.72127L76.8002 119.19L0 237.776H21.4678L87.6852 134.277L153.6 237.776H175.975Z" />
          <path d="M359.531 237.776H380.091L295.127 4.22444H271.543L185.974 237.776H206.233L229.515 172.9H336.853L359.531 237.776ZM235.562 156.002L283.638 22.0274L330.806 156.002H235.562Z" />
          <path d="M540.547 4.22444L468.282 221.783L395.11 4.22444H375.154L454.978 238.681H481.586L560.2 4.22444H540.547Z" />
          <path d="M593.564 237.776H612.311V4.22444H593.564V237.776Z" />
          <path d="M829.15 127.337V144.234H914.718C909.881 195.531 877.226 225.102 827.94 225.102C770.794 225.102 730.277 181.953 730.277 121C730.277 60.0474 770.794 16.8978 827.94 16.8978C868.759 16.8978 899.903 41.9426 909.276 75.7382H928.325C919.859 32.5885 881.761 0 827.94 0C759.304 0 710.624 50.0898 710.624 121C710.624 191.91 759.304 242 827.94 242C894.763 242 933.465 196.135 933.465 132.165V127.337H829.15Z" />
          <path d="M1127.49 237.776H1148.05L1063.08 4.22444H1039.5L953.929 237.776H974.187L997.469 172.9H1104.81L1127.49 237.776ZM1003.52 156.002L1051.59 22.0274L1098.76 156.002H1003.52Z" />
          <path d="M1201.1 220.878V4.22444H1182.36V237.776H1314.49V220.878H1201.1Z" />
          <path d="M1353.84 237.776H1372.59V4.22444H1353.84V237.776Z" />
          <path d="M1577.81 4.22444V213.636L1452.63 4.22444H1429.95V237.776H1448.4V31.985L1571.46 237.776H1596.25V4.22444H1577.81Z" />
          <path d="M1704.2 4.22444H1653.7V237.776H1704.2C1784.62 237.776 1832.09 197.04 1832.09 120.396C1832.09 44.9601 1785.23 4.22444 1704.2 4.22444ZM1703.89 220.878H1672.45V21.1222H1703.89C1773.13 21.1222 1812.44 51.2968 1812.44 120.396C1812.44 189.798 1773.44 220.878 1703.89 220.878Z" />
          <path d="M1979.68 242C2048.32 242 2097 191.91 2097 121C2097 50.0898 2048.32 0 1979.68 0C1911.05 0 1862.37 50.0898 1862.37 121C1862.37 191.91 1911.05 242 1979.68 242ZM1979.68 225.102C1922.54 225.102 1882.02 181.953 1882.02 121C1882.02 60.0474 1922.54 16.8978 1979.68 16.8978C2036.83 16.8978 2077.35 60.0474 2077.35 121C2077.35 181.953 2036.83 225.102 1979.68 225.102Z" />
        </svg>
      </TitleWrapper>
      <GridLayout>
        <GridItem>
          <GridImage  fluid={data.image2.childImageSharp.fluid} />
        </GridItem>
        <GridItem>
          <GridImage fluid={data.image5.childImageSharp.fluid} />
        </GridItem>
      </GridLayout>
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

    image2: file(relativePath: { eq: "images/berlin_wall.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image3: file(relativePath: { eq: "images/berlin_subway.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image4: file(relativePath: { eq: "images/islandia.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image5: file(relativePath: { eq: "images/islandia_house.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image6: file(relativePath: { eq: "images/usa.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image7: file(relativePath: { eq: "images/safrica.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image8: file(relativePath: { eq: "images/malta.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
