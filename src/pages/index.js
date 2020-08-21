import React from "react"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <h1>Gatsby transition link starter</h1>
    <AniLink swipe direction="up" to="page2">
      Go to Page 2 using swipe transition
    </AniLink><br />
    <AniLink swipe top="exit" direction="left" to="page3">
      Go to Page 3 using swipe transition
    </AniLink><br />
    <AniLink swipe top="entry" direction="right" to="page4">
      Go to Page 4 using swipe transition
    </AniLink><br />
    <AniLink fade to="page5">
      Go to Page 5 using fade in transition
    </AniLink>
  </div>
)

export default IndexPage
