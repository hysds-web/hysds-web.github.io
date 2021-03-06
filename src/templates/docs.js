import React from 'react'
import { graphql } from 'gatsby'
import { css, cx } from 'emotion'

import Layout from '../components/layout'

const article = css`
  margin-top: 3rem;
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <article className={cx('container', article)}>
        <h2>{post.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
