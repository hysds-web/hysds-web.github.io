/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function SEO({ lang, meta, title, slug }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          property: "og:url",
          content: "https://hysds-web.github.io",
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:site_name",
          content: "HySDS Landing Page",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: site.siteMetadata.author,
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          property: "twitter:domain",
          content: "https://hysds-web.github.io",
        },
        {
          property: "og:image",
          content: "",
        },
        {
          property: "twitter:site",
          content: "@gethysds",
        },
      ].concat(meta)}
    ></Helmet>
  )
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  description: "",
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}
