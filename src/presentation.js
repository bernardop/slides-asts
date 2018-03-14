// Import React
import React from "react"

// Import Spectacle Core tags
import { Deck, Heading, Image, Slide, Text } from "spectacle"

import preloader from "spectacle/lib/utils/preloader"

// Import theme
import createTheme from "spectacle/lib/themes/default"

// Require CSS
require("normalize.css")

const images = {
    dpzLogo: require("./images/dpz-logo.png")
}

preloader(images)

const theme = createTheme(
    {
        primary: "#0078ae",
        secondary: "#fff",
        tertiary: "#e31837",
        quaternary: "#333"
    },
    {
        primary: "'Exo 2'",
        secondary: "Hattori Hanzo"
    }
)

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
                <Slide transition={["zoom"]} bgColor="secondary">
                    <Heading size={3} lineHeight={1} textColor="primary">
                        ASTronomically Improving Your Developer Experience
                    </Heading>
                    <Heading size={5} fit lineHeight={1} textColor="tertiary">
                        (A JS Abstract Syntax Trees Primer)
                    </Heading>
                    <Text
                        margin="100px 0 0"
                        size={6}
                        textAlign="right"
                        textColor="quaternary"
                        textFont="secondary"
                    >
                        Bernardo Pacheco
                    </Text>
                    <Text size={6} textAlign="right" textColor="quaternary" textFont="secondary">
                        <Image
                            src={images.dpzLogo.replace("/", "")}
                            height="40px"
                            margin="0"
                            display="inline"
                        />{" "}
                        Front-End Developer
                    </Text>
                    <Text size={6} textAlign="right" textColor="quaternary" textFont="secondary">
                        @bernardop
                    </Text>
                </Slide>
            </Deck>
        )
    }
}
