import React from "react"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const FourthPage = () => (
    <div>
        <SEO title="Page four" />
        <h1>Hi from the fourth page</h1>
        <p>Welcome to page 4</p>
        <AniLink to="/" paintDrip duration={1} color="rebeccapurple">
            Go to Home Page using paintdrip transition
    </AniLink>
    </div>
)

export default FourthPage
