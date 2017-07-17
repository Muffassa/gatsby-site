import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import AuthorInfo from "../components/AuthorInfo/AuthorInfo"

export default class Index extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    return (
      <AuthorInfo/>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
      allMarkdownRemark(
      filter: { frontmatter: {layout: { eq: "post" }}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
