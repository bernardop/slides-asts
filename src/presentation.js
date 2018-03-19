// Import React
import React from "react"
import styled from "react-emotion"

// Import Spectacle Core tags
import {
    Appear,
    Deck,
    Heading,
    Image,
    List,
    ListItem,
    Magic,
    Slide,
    Text,
    Layout,
    Fill,
    Fit
} from "spectacle"

import preloader from "spectacle/lib/utils/preloader"

// Import theme
import createTheme from "spectacle/lib/themes/default"

// Require CSS
require("normalize.css")

const images = {
    dpzLogo: require("./images/dpz-logo.png"),
    brianFordTweet: require("./images/briantford_status.png"),
    eslint: require("./images/eslint.png"),
    babel: require("./images/babel-10.svg"),
    webpack: require("./images/webpack.svg"),
    prettier: require("./images/prettier.png"),
    uglify: require("./images/uglify.png")
}

preloader(images)

const theme = createTheme(
    {
        primary: "#0c648f",
        secondary: "#fff",
        tertiary: "#e2213e",
        quaternary: "#333"
    },
    {
        primary: "'Exo 2'",
        secondary: "Hattori Hanzo"
    }
)

const SlideTitle = ({ children, textColor, fit, padding }) => (
    <Heading size={3} fit={fit} caps textColor={textColor} padding={padding}>
        {children}
    </Heading>
)

const PaddedListItem = styled(ListItem)`
    padding: 10px 0;
`

const AppearingListItem = ({ children }) => (
    <Appear>
        <PaddedListItem>{children}</PaddedListItem>
    </Appear>
)

const FocusedListItem = ({ children }) => (
    <PaddedListItem bold>
        <span role="img" aria-label="pizza">
            🍕
        </span>{" "}
        {children}
    </PaddedListItem>
)

const LogoImage = styled(Image)`
    height: 150px;
`

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transitionDuration={500} theme={theme}>
                <Slide bgColor="secondary" progressColor="primary">
                    <Heading size={3} lineHeight={1} textColor="primary">
                        ASTronomically Improving Your Developer Experience
                    </Heading>
                    <Heading size={4} fit lineHeight={1} textColor="tertiary">
                        (A JS Abstract Syntax Trees Primer)
                    </Heading>
                    <Text margin="100px 0 0" textAlign="right" textColor="quaternary" textFont="secondary">
                        Bernardo Pacheco
                    </Text>
                    <Text textAlign="right" textColor="quaternary" textFont="secondary">
                        <Image
                            src={images.dpzLogo.replace("/", "")}
                            height="40px"
                            margin="0"
                            display="inline"
                        />{" "}
                        Front-End Developer
                    </Text>
                    <Text textAlign="right" textColor="quaternary" textFont="secondary">
                        @bernardop
                    </Text>
                </Slide>
                <Slide bgColor="primary" transition={["zoom"]}>
                    <SlideTitle textColor="tertiary">Agenda</SlideTitle>
                    <List color="secondary" textFont="secondary">
                        <AppearingListItem>Why learn ASTs?</AppearingListItem>
                        <AppearingListItem>What is an AST?</AppearingListItem>
                        <AppearingListItem>Working with ASTs?</AppearingListItem>
                        <AppearingListItem>Writing a custom ESLint rule</AppearingListItem>
                        <AppearingListItem>Writing a custom Babel plugin</AppearingListItem>
                        <AppearingListItem>ASTs at Domino's</AppearingListItem>
                    </List>
                </Slide>
                <Slide bgColor="primary">
                    <SlideTitle textColor="tertiary">Agenda</SlideTitle>
                    <List color="secondary" textFont="secondary">
                        <FocusedListItem>Why learn ASTs?</FocusedListItem>
                        <PaddedListItem>What is an AST?</PaddedListItem>
                        <PaddedListItem>Working with ASTs?</PaddedListItem>
                        <PaddedListItem>Writing a custom ESLint rule</PaddedListItem>
                        <PaddedListItem>Writing a custom Babel plugin</PaddedListItem>
                        <PaddedListItem>ASTs at Domino's</PaddedListItem>
                    </List>
                </Slide>
                <Slide bgColor="tertiary" transition={["slide"]}>
                    <SlideTitle fit textColor="secondary">
                        Cue obligatory tweet about presentation subject...
                    </SlideTitle>
                </Slide>
                <Slide bgColor="tertiary" transition={["slide"]}>
                    <SlideTitle textColor="secondary">Why learn ASTs?</SlideTitle>
                    <Image src={images.brianFordTweet.replace("/", "")} padding="50px 0" />
                </Slide>
                <Slide bgColor="secondary" transition={["slide"]} progressColor="primary">
                    <SlideTitle textColor="primary" padding="0 0 50px 0">
                        Why learn ASTs?
                    </SlideTitle>
                    <Layout>
                        <Fill>
                            <LogoImage src={images.eslint.replace("/", "")} />
                        </Fill>
                        <Fill>
                            <LogoImage src={images.babel.replace("/", "")} />
                        </Fill>
                        <Fill>
                            <LogoImage src={images.webpack.replace("/", "")} />
                        </Fill>
                    </Layout>
                    <Layout>
                        <Fill>
                            <LogoImage src={images.prettier.replace("/", "")} />
                        </Fill>
                        <Fill>
                            <LogoImage src={images.uglify.replace("/", "")} />
                        </Fill>
                    </Layout>
                </Slide>
            </Deck>
        )
    }
}
