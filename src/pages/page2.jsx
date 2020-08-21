import React from "react"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const SecondPage = () => (
  <div>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <AniLink to="/" paintDrip duration={1} color="rebeccapurple" >
      Go to Home Page using paintdrip transition
    </AniLink>
  </div>
)

export default SecondPage
