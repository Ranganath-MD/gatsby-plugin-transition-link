import React from "react"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const ThirdPage = () => (
    <div>
        <SEO title="Page three" />
        <h1>Hi from the third page</h1>
        <p>Welcome to page 3</p>
        <AniLink to="/" paintDrip duration={1} color="rebeccapurple" >
            Go to Home Page using paintdrip transition
        </AniLink>
    </div>
)

export default ThirdPage
