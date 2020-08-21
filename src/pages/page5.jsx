import React from "react"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const FifthPage = () => (
    <div>
        <SEO title="Page five" />
        <h1>Hi from the fifth page</h1>
        <p>Welcome to page 5</p>
        <AniLink to="/" paintDrip duration={1} bg="yellow">
            Go to Home Page using paintdrip transition
    </AniLink>
    </div>
)

export default FifthPage
