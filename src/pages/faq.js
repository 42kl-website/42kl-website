import * as React from 'react'
import { graphql } from 'gatsby'

const FAQ = ({ data }) => {

  return (
    <div>
      <div>{JSON.stringify(data.allContentfulFaq.edges)}</div>
      {data.allContentfulFaq.edges.map(({ node }) =>
        <div key={node.question}>
          <p>{node.question}</p>
          {/* <p>{node.answer}</p> */}
        </div>
      )}
    </div>
  )
}

export const query = graphql`
  {
    allContentfulFaq {
      edges {
        node {
          question
          answer {
            raw
          }
        }
      }
    }
  }
`

export default FAQ
