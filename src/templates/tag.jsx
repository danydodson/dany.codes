import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing/PostListing'
import HashIcon from '../components/Icon/Hash'
import config from '../../data/SiteConfig'

export default function TagTemplate({ pageContext, data }) {
  const { tag } = pageContext
  const postEdges = data.allMarkdownRemark.edges
  return (
    <Layout>
      <h2>
        {<HashIcon />}Topic: {tag}
      </h2>
      <ul className="tag-container">
        <Helmet title={`Posts tagged as '${tag}' | ${config.siteTitle}`} />
        <PostListing postEdges={postEdges} />
      </ul>
    </Layout>
  )
}

/* eslint no-undef: 'off' */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`
