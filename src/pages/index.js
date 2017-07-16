import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Index extends React.Component {
  render() {
    console.log(this.props.data.allMarkdownRemark.edges);
    return (
      <div>
        <h1>Hi</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
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
          frontmatter {
            title
            layout
          }
        }
      }
    }
  }
`
