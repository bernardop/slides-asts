// Import React
import React from "react";
import styled from "react-emotion";

// Import Spectacle Core tags
import { Appear, Deck, Heading, Image, Link, List, ListItem, Slide, Text, Layout, Fill } from "spectacle";

import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const images = {
    dpzLogo: require("./images/dpz-logo.png"),
    brianFordTweet: require("./images/briantford_status.png"),
    eslint: require("./images/eslint.svg"),
    babel: require("./images/babel-10.svg"),
    webpack: require("./images/webpack.svg"),
    prettier: require("./images/prettier.png"),
    uglify: require("./images/uglify.png"),
    babelLodashIn: require("./images/babel-plugin-lodash-in.png"),
    babelLodashOut: require("./images/babel-plugin-lodash-out.png"),
    babelOptChainIn: require("./images/babel-chaining-in.png"),
    babelOptChainOut: require("./images/babel-chaining-out.png"),
    eslintEmoji: require("./images/eslint-emoji.png"),
    eslintAnchor: require("./images/eslint-empty-anchor.png"),
    githubJSCodeshift: require("./images/github-jscodeshift.png"),
    githubBabelCodemod: require("./images/github-babel-codemod.png"),
    sourceCodeIcon: require("./images/source-code.png"),
    arrowRight: require("./images/arrow-right.jpg"),
    ast: require("./images/ast.svg"),
    astCode: require("./images/ast-code.png"),
    astJson: require("./images/ast-json.png"),
    astJsonTypes: require("./images/ast-json-types.jpg"),
    coolStory: require("./images/cool-story.gif"),
    astVisualizer: require("./images/ast-visualizer.png"),
    astExplorer: require("./images/ast-explorer.png"),
    visitor: require("./images/visitor.png"),
    add2Func: require("./images/add-2-func.png"),
    add2Ast: require("./images/add-2-ast.png"),
    add2Ast1: require("./images/add-2-ast-1.png"),
    add2Ast2: require("./images/add-2-ast-2.png"),
    add2Ast3: require("./images/add-2-ast-3.png"),
    add2Ast4: require("./images/add-2-ast-4.png"),
    add2Ast5: require("./images/add-2-ast-5.png"),
    add2Ast6: require("./images/add-2-ast-6.png"),
    add2Ast7: require("./images/add-2-ast-7.png"),
    add2Ast8: require("./images/add-2-ast-8.png"),
    console1: require("./images/console1.png"),
    console2: require("./images/console2.png"),
    console3: require("./images/console3.png"),
    console4: require("./images/console4.png"),
    console5: require("./images/console5.png")
};

preloader(images);

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
);

const SlideTitle = ({ children, textColor, fit, padding, size }) => (
    <Heading size={size || 3} fit={fit} caps textColor={textColor} padding={padding}>
        {children}
    </Heading>
);

const SlideTitleSecondary = styled(Heading)`
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    top: 0;
    width: 92%;
`;

const ListSansBullets = styled(List)`
    list-style-type: none;
`;

const PaddedListItem = styled(ListItem)`
    padding: 10px 0;
`;

const AppearingListItem = ({ children }) => (
    <Appear>
        <PaddedListItem>{children}</PaddedListItem>
    </Appear>
);

const FocusedListItem = ({ children }) => (
    <PaddedListItem bold>
        <span role="img" aria-label="pizza">
            🍕
        </span>{" "}
        {children}
    </PaddedListItem>
);

const LogoImage = styled(Image)`
    height: 150px;
`;

const StyledImage = styled(Image)`
    max-height: none !important;
`;

const FlexFill = styled(Fill)`
    align-items: ${props => props.hAlign || "center"};
    box-shadow: ${props =>
        props.highlight ? "inset 1px 1px 5px #e2213e, inset -1px -1px 5px #e2213e" : "none"};
    display: flex;
    flex-direction: column;
    height: ${props => props.height || "auto"};
    justify-content: ${props => props.vAlign || "center"};
    margin: ${props => props.margin || "0 0 3rem 0"};
    overflow: ${props => props.overflow || "visible"};
    padding: ${props => (props.padded ? "1rem" : "0")};
`;

const ImageAbsolute = styled(Image)`
    bottom: ${props => props.bottom || "auto"};
    left: ${props => props.left || "auto"};
    position: absolute;
    right: ${props => props.right || "auto"};
    top: ${props => props.top || "auto"};
`;

const BoxedText = styled(Text)`
    border: 1px solid #333;
`;

const StyledLink = styled(Link)`
    border: 1px solid #333;
    padding: ${props => props.padding || "0"};
`;

class AgendaSlideContent extends React.Component {
    render() {
        const { focusedIndex } = this.props;
        const agendaItems = [
            "Why learn ASTs",
            "What is an AST?",
            "Working with ASTs",
            "Writing a custom ESLint rule",
            "Writing a custom Babel plugin",
            "ASTs at Domino's"
        ];

        return (
            <React.Fragment>
                <SlideTitle textColor="tertiary">Agenda</SlideTitle>
                <ListSansBullets color="secondary" textFont="secondary">
                    {agendaItems.map(
                        (agendaItem, index) =>
                            focusedIndex === index ? (
                                <FocusedListItem>{agendaItem}</FocusedListItem>
                            ) : (
                                <PaddedListItem>{agendaItem}</PaddedListItem>
                            )
                    )}
                </ListSansBullets>
            </React.Fragment>
        );
    }
}

class LogosSlideContent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <SlideTitle textColor="primary" padding="0 0 50px 0">
                    Why learn ASTs?
                </SlideTitle>
                <Layout>
                    <FlexFill padded={true} highlight={this.props.highlightedIndex === 0}>
                        <LogoImage src={images.eslint.replace("/", "")} />
                    </FlexFill>
                    <FlexFill padded={true} highlight={this.props.highlightedIndex === 1}>
                        <LogoImage src={images.babel.replace("/", "")} />
                    </FlexFill>
                    <FlexFill padded={true} highlight={this.props.highlightedIndex === 2}>
                        <LogoImage src={images.webpack.replace("/", "")} />
                    </FlexFill>
                </Layout>
                <Layout>
                    <FlexFill padded={true} highlight={this.props.highlightedIndex === 3}>
                        <LogoImage src={images.uglify.replace("/", "")} />
                    </FlexFill>
                    <FlexFill padded={true} highlight={this.props.highlightedIndex === 4}>
                        <LogoImage src={images.prettier.replace("/", "")} />
                    </FlexFill>
                    <FlexFill padded={true} highlight={this.props.highlightedIndex === 5}>
                        <Text>JSCodeshift</Text>
                    </FlexFill>
                </Layout>
            </React.Fragment>
        );
    }
}

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck contentWidth={1100} transitionDuration={500} theme={theme} progress="pacman">
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
                    <ListSansBullets color="secondary" textFont="secondary">
                        <AppearingListItem>Why learn ASTs?</AppearingListItem>
                        <AppearingListItem>What is an AST?</AppearingListItem>
                        <AppearingListItem>Working with ASTs?</AppearingListItem>
                        <AppearingListItem>Writing a custom ESLint rule</AppearingListItem>
                        <AppearingListItem>Writing a custom Babel plugin</AppearingListItem>
                        <AppearingListItem>ASTs at Domino's</AppearingListItem>
                    </ListSansBullets>
                </Slide>

                <Slide bgColor="primary">
                    <AgendaSlideContent focusedIndex={0} />
                </Slide>

                <Slide bgColor="secondary" transition={["slide"]} progressColor="primary">
                    <SlideTitle fit textColor="primary">
                        Cue obligatory tweet about subject...
                    </SlideTitle>
                </Slide>

                <Slide bgColor="secondary" transition={["slide"]} progressColor="primary">
                    <SlideTitle textColor="primary">Why learn ASTs?</SlideTitle>
                    <Image src={images.brianFordTweet.replace("/", "")} padding="50px 0" />
                </Slide>

                <Slide bgColor="secondary" transition={["slide"]} progressColor="primary">
                    <LogosSlideContent />
                </Slide>

                <Slide bgColor="secondary" progressColor="primary">
                    <LogosSlideContent highlightedIndex={0} />
                </Slide>

                <Slide bgColor="secondary" progressColor="primary">
                    <LogosSlideContent highlightedIndex={1} />
                </Slide>

                <Slide bgColor="secondary" progressColor="primary">
                    <LogosSlideContent highlightedIndex={2} />
                </Slide>

                <Slide bgColor="secondary" progressColor="primary">
                    <LogosSlideContent highlightedIndex={3} />
                </Slide>

                <Slide bgColor="secondary" progressColor="primary">
                    <LogosSlideContent highlightedIndex={4} />
                </Slide>

                <Slide bgColor="secondary" progressColor="primary">
                    <LogosSlideContent highlightedIndex={5} />
                </Slide>

                <Slide bgColor="secondary" transition={["slide"]} progressColor="primary">
                    <SlideTitle textColor="primary" size={4}>
                        babel-plugin-lodash
                    </SlideTitle>
                    <SlideTitleSecondary textColor="tertiary" size={6} textSize="2rem">
                        Why learn ASTs?
                    </SlideTitleSecondary>
                    <Layout>
                        <FlexFill margin="3rem 0.5rem" vAlign="flex-start">
                            <Text textFont="secondary">In</Text>
                            <Image src={images.babelLodashIn.replace("/", "")} height="200px" />
                        </FlexFill>
                        <FlexFill margin="3rem 0.5rem" vAlign="flex-start">
                            <Text textFont="secondary">Out</Text>
                            <Image src={images.babelLodashOut.replace("/", "")} height="220px" />
                        </FlexFill>
                    </Layout>
                </Slide>

                <Slide bgColor="secondary" transition={["slide"]} progressColor="primary">
                    <SlideTitle textColor="primary" size={4} fit padding="0 0 48px 0">
                        @babel/plugin-proposal-optional-chaining
                    </SlideTitle>
                    <SlideTitleSecondary textColor="tertiary" size={6} textSize="1.5rem">
                        Why learn ASTs?
                    </SlideTitleSecondary>
                    <Layout>
                        <FlexFill margin="3rem 0.5rem" vAlign="flex-start">
                            <Text textFont="secondary">In</Text>
                            <Image src={images.babelOptChainIn.replace("/", "")} />
                        </FlexFill>
                        <FlexFill margin="3rem 0.5rem" vAlign="flex-start">
                            <Text textFont="secondary">Out</Text>
                            <Image src={images.babelOptChainOut.replace("/", "")} />
                        </FlexFill>
                    </Layout>
                </Slide>

                <Slide bgColor="secondary" transition={["slide"]} progressColor="primary">
                    <SlideTitle textColor="primary" size={4}>
                        eslint-plugin-jsx-a11y
                    </SlideTitle>
                    <SlideTitleSecondary textColor="tertiary" size={6} textSize="1.5rem">
                        Why learn ASTs?
                    </SlideTitleSecondary>
                    <Layout>
                        <FlexFill margin="3rem 0.5rem">
                            <Image height="200px" src={images.eslintEmoji.replace("/", "")} />
                            <Image height="200px" src={images.eslintAnchor.replace("/", "")} />
                        </FlexFill>
                    </Layout>
                </Slide>

                <Slide bgColor="secondary" transition={["slide"]} progressColor="primary">
                    <SlideTitle textColor="primary" size={4}>
                        Codemods
                    </SlideTitle>
                    <SlideTitleSecondary textColor="tertiary" size={6} textSize="1.5rem">
                        Why learn ASTs?
                    </SlideTitleSecondary>
                    <Layout>
                        <FlexFill margin="3rem 0 0 0">
                            <Image width="500px" src={images.githubBabelCodemod.replace("/", "")} />
                            <Image width="500px" src={images.githubJSCodeshift.replace("/", "")} />
                        </FlexFill>
                    </Layout>
                </Slide>

                <Slide bgColor="primary" transition={["slide", "zoom"]}>
                    <AgendaSlideContent focusedIndex={1} />
                </Slide>

                <Slide bgColor="secondary" transition={["zoom"]} progressColor="primary">
                    <SlideTitle textColor="primary" size={4}>
                        Compilers at a glance
                    </SlideTitle>
                    <SlideTitleSecondary textColor="tertiary" size={6} textSize="1.5rem">
                        What is an AST?
                    </SlideTitleSecondary>
                    <Layout>
                        <FlexFill margin="3rem 0.5rem 0">
                            <Image src={images.sourceCodeIcon.replace("/", "")} />
                        </FlexFill>
                        <FlexFill margin="3rem 0.5rem 0">
                            <Image src={images.arrowRight.replace("/", "")} />
                        </FlexFill>
                        <FlexFill margin="3rem 0.5rem 0">
                            <BoxedText padding="1rem" textFont="secondary">
                                Lexical Analysis<br />(Tokenization)
                            </BoxedText>
                        </FlexFill>
                        <FlexFill margin="3rem 0.5rem 0">
                            <Image src={images.arrowRight.replace("/", "")} />
                        </FlexFill>
                        <FlexFill margin="3rem 0.5rem 0">
                            <BoxedText padding="1rem" textFont="secondary">
                                Syntax Analysis<br />(Parsing)
                            </BoxedText>
                        </FlexFill>
                        <FlexFill margin="3rem 0.5rem 0">
                            <Image src={images.arrowRight.replace("/", "")} />
                        </FlexFill>
                        <FlexFill margin="3rem 0.5rem 0">
                            <BoxedText padding="4rem" textFont="secondary">
                                AST
                            </BoxedText>
                        </FlexFill>
                    </Layout>
                </Slide>

                <Slide bgColor="secondary" transition={["zoom"]} progressColor="primary">
                    <SlideTitle textColor="primary" size={4}>
                        Consider this code snippet...
                    </SlideTitle>
                    <SlideTitleSecondary textColor="tertiary" size={6} textSize="1.5rem">
                        What is an AST?
                    </SlideTitleSecondary>
                    <Layout>
                        <FlexFill margin="1rem 0 0 0">
                            <Image src={images.astCode.replace("/", "")} />
                        </FlexFill>
                    </Layout>
                </Slide>

                <Slide bgColor="secondary" transition={["zoom"]} progressColor="primary">
                    <SlideTitle textColor="primary" size={4}>
                        AST visualization
                    </SlideTitle>
                    <SlideTitleSecondary textColor="tertiary" size={6} textSize="1.5rem">
                        What is an AST?
                    </SlideTitleSecondary>
                    <ImageAbsolute
                        top="30%"
                        right="10%"
                        height="150px"
                        src={images.astCode.replace("/", "")}
                    />
                    <Image margin="3rem 0 0 10rem" height="400px" src={images.ast.replace("/", "")} />
                </Slide>

                <Slide bgColor="secondary" transition={["zoom"]} progressColor="primary">
                    <SlideTitle textColor="primary" size={4}>
                        JSON representation
                    </SlideTitle>
                    <SlideTitleSecondary textColor="tertiary" size={6} textSize="1.5rem">
                        What is an AST?
                    </SlideTitleSecondary>
                    <Layout>
                        <FlexFill margin="1rem 0 0 0" height="500px" overflow="auto" vAlign="flex-start">
                            <StyledImage src={images.astJson.replace("/", "")} width="750px" />
                        </FlexFill>
                    </Layout>
                </Slide>

                <Slide bgColor="secondary" progressColor="primary">
                    <SlideTitle textColor="primary" size={4}>
                        JSON representation
                    </SlideTitle>
                    <SlideTitleSecondary textColor="tertiary" size={6} textSize="1.5rem">
                        What is an AST?
                    </SlideTitleSecondary>
                    <Layout>
                        <FlexFill margin="1rem 0 0 0" height="500px" overflow="auto" vAlign="flex-start">
                            <Link href="https://github.com/estree/estree" target="_blank">
                                <StyledImage src={images.astJsonTypes.replace("/", "")} width="750px" />
                            </Link>
                        </FlexFill>
                    </Layout>
                </Slide>

                <Slide bgColor="secondary" transition={["zoom"]} progressColor="primary">
                    <Layout>
                        <Image src={images.coolStory.replace("/", "")} />
                    </Layout>
                </Slide>

                <Slide bgColor="primary" transition={["fade"]}>
                    <AgendaSlideContent focusedIndex={2} />
                </Slide>

                <Slide bgColor="secondary" progressColor="primary" transition={["fade"]}>
                    <SlideTitle textColor="primary" size={4}>
                        Tools
                    </SlideTitle>
                    <SlideTitleSecondary textColor="tertiary" size={6} textSize="1.5rem">
                        Working with ASTs?
                    </SlideTitleSecondary>
                    <Layout>
                        <FlexFill margin="1rem 0 0 0" padded={true}>
                            <StyledLink
                                href="https://resources.jointjs.com/demos/rappid/apps/Ast/index.html"
                                padding="1rem"
                                target="_blank"
                            >
                                <Image src={images.astVisualizer.replace("/", "")} />
                                <Text margin="1rem 0 0 0" textFont="secondary">
                                    AST Visualizer
                                </Text>
                            </StyledLink>
                        </FlexFill>
                        <FlexFill margin="1rem 0 0 0" padded={true}>
                            <StyledLink
                                href="http://astexplorer.net/#/gist/c6163b9a30912351982ac21c6b73cfb1/4a0b1278a03c6ef69bec27c18f2bdc68684b1245"
                                padding="1rem"
                                target="_blank"
                            >
                                <Image src={images.astExplorer.replace("/", "")} />
                                <Text margin="1rem 0 0 0" textFont="secondary">
                                    AST Explorer
                                </Text>
                            </StyledLink>
                        </FlexFill>
                    </Layout>
                </Slide>

                <Slide bgColor="secondary" progressColor="primary" transition={["fade"]}>
                    <SlideTitle textColor="primary" size={4}>
                        Visitor Pattern
                    </SlideTitle>
                    <SlideTitleSecondary textColor="tertiary" size={6} textSize="1.5rem">
                        Working with ASTs?
                    </SlideTitleSecondary>
                    <Layout>
                        <FlexFill margin="1rem 0 0 0" padded={true}>
                            <Image width="720px" src={images.visitor.replace("/", "")} />
                        </FlexFill>
                    </Layout>
                </Slide>

                <Slide bgColor="secondary" progressColor="primary" transition={["fade"]}>
                    <SlideTitle textColor="primary" size={4}>
                        Visitor Pattern
                    </SlideTitle>
                    <SlideTitleSecondary textColor="tertiary" size={6} textSize="1.5rem">
                        Working with ASTs?
                    </SlideTitleSecondary>
                    <Layout>
                        <FlexFill margin="1rem 0 0 0" padded={true}>
                            <Image width="720px" src={images.add2Func.replace("/", "")} />
                        </FlexFill>
                    </Layout>
                </Slide>

                <Slide bgColor="secondary" progressColor="primary" transition={["fade"]}>
                    <SlideTitle textColor="primary" size={4}>
                        Visitor Pattern
                    </SlideTitle>
                    <SlideTitleSecondary textColor="tertiary" size={6} textSize="1.5rem">
                        Working with ASTs?
                    </SlideTitleSecondary>
                    <Layout>
                        <FlexFill vAlign="flex-start">
                            <Image src={images.add2Ast.replace("/", "")} width="450px" />
                        </FlexFill>
                        <FlexFill vAlign="flex-start">
                            <Image src={images.visitor.replace("/", "")} width="500px" />
                            <Image src={images.console1.replace("/", "")} width="500px" />
                        </FlexFill>
                    </Layout>
                </Slide>

                <Slide bgColor="secondary" progressColor="primary">
                    <SlideTitle textColor="primary" size={4}>
                        Visitor Pattern
                    </SlideTitle>
                    <SlideTitleSecondary textColor="tertiary" size={6} textSize="1.5rem">
                        Working with ASTs?
                    </SlideTitleSecondary>
                    <Layout>
                        <FlexFill vAlign="flex-start">
                            <Image src={images.add2Ast1.replace("/", "")} width="450px" />
                        </FlexFill>
                        <FlexFill vAlign="flex-start">
                            <Image src={images.visitor.replace("/", "")} width="500px" />
                            <Image src={images.console1.replace("/", "")} width="500px" />
                        </FlexFill>
                    </Layout>
                </Slide>

                <Slide bgColor="secondary" progressColor="primary">
                    <SlideTitle textColor="primary" size={4}>
                        Visitor Pattern
                    </SlideTitle>
                    <SlideTitleSecondary textColor="tertiary" size={6} textSize="1.5rem">
                        Working with ASTs?
                    </SlideTitleSecondary>
                    <Layout>
                        <FlexFill vAlign="flex-start">
                            <Image src={images.add2Ast2.replace("/", "")} width="450px" />
                        </FlexFill>
                        <FlexFill vAlign="flex-start">
                            <Image src={images.visitor.replace("/", "")} width="500px" />
                            <Image src={images.console2.replace("/", "")} width="500px" />
                        </FlexFill>
                    </Layout>
                </Slide>

                <Slide bgColor="secondary" progressColor="primary">
                    <SlideTitle textColor="primary" size={4}>
                        Visitor Pattern
                    </SlideTitle>
                    <SlideTitleSecondary textColor="tertiary" size={6} textSize="1.5rem">
                        Working with ASTs?
                    </SlideTitleSecondary>
                    <Layout>
                        <FlexFill vAlign="flex-start">
                            <Image src={images.add2Ast3.replace("/", "")} width="450px" />
                        </FlexFill>
                        <FlexFill vAlign="flex-start">
                            <Image src={images.visitor.replace("/", "")} width="500px" />
                            <Image src={images.console3.replace("/", "")} width="500px" />
                        </FlexFill>
                    </Layout>
                </Slide>

                <Slide bgColor="secondary" progressColor="primary">
                    <SlideTitle textColor="primary" size={4}>
                        Visitor Pattern
                    </SlideTitle>
                    <SlideTitleSecondary textColor="tertiary" size={6} textSize="1.5rem">
                        Working with ASTs?
                    </SlideTitleSecondary>
                    <Layout>
                        <FlexFill vAlign="flex-start">
                            <Image src={images.add2Ast4.replace("/", "")} width="450px" />
                        </FlexFill>
                        <FlexFill vAlign="flex-start">
                            <Image src={images.visitor.replace("/", "")} width="500px" />
                            <Image src={images.console3.replace("/", "")} width="500px" />
                        </FlexFill>
                    </Layout>
                </Slide>

                <Slide bgColor="secondary" progressColor="primary">
                    <SlideTitle textColor="primary" size={4}>
                        Visitor Pattern
                    </SlideTitle>
                    <SlideTitleSecondary textColor="tertiary" size={6} textSize="1.5rem">
                        Working with ASTs?
                    </SlideTitleSecondary>
                    <Layout>
                        <FlexFill vAlign="flex-start">
                            <Image src={images.add2Ast5.replace("/", "")} width="450px" />
                        </FlexFill>
                        <FlexFill vAlign="flex-start">
                            <Image src={images.visitor.replace("/", "")} width="500px" />
                            <Image src={images.console3.replace("/", "")} width="500px" />
                        </FlexFill>
                    </Layout>
                </Slide>

                <Slide bgColor="secondary" progressColor="primary">
                    <SlideTitle textColor="primary" size={4}>
                        Visitor Pattern
                    </SlideTitle>
                    <SlideTitleSecondary textColor="tertiary" size={6} textSize="1.5rem">
                        Working with ASTs?
                    </SlideTitleSecondary>
                    <Layout>
                        <FlexFill vAlign="flex-start">
                            <Image src={images.add2Ast6.replace("/", "")} width="450px" />
                        </FlexFill>
                        <FlexFill vAlign="flex-start">
                            <Image src={images.visitor.replace("/", "")} width="500px" />
                            <Image src={images.console4.replace("/", "")} width="500px" />
                        </FlexFill>
                    </Layout>
                </Slide>

                <Slide bgColor="secondary" progressColor="primary">
                    <SlideTitle textColor="primary" size={4}>
                        Visitor Pattern
                    </SlideTitle>
                    <SlideTitleSecondary textColor="tertiary" size={6} textSize="1.5rem">
                        Working with ASTs?
                    </SlideTitleSecondary>
                    <Layout>
                        <FlexFill vAlign="flex-start">
                            <Image src={images.add2Ast7.replace("/", "")} width="450px" />
                        </FlexFill>
                        <FlexFill vAlign="flex-start">
                            <Image src={images.visitor.replace("/", "")} width="500px" />
                            <Image src={images.console5.replace("/", "")} width="500px" />
                        </FlexFill>
                    </Layout>
                </Slide>

                <Slide bgColor="secondary" progressColor="primary">
                    <SlideTitle textColor="primary" size={4}>
                        Visitor Pattern
                    </SlideTitle>
                    <SlideTitleSecondary textColor="tertiary" size={6} textSize="1.5rem">
                        Working with ASTs?
                    </SlideTitleSecondary>
                    <Layout>
                        <FlexFill vAlign="flex-start">
                            <Image src={images.add2Ast8.replace("/", "")} width="450px" />
                        </FlexFill>
                        <FlexFill vAlign="flex-start">
                            <Image src={images.visitor.replace("/", "")} width="500px" />
                            <Image src={images.console5.replace("/", "")} width="500px" />
                        </FlexFill>
                    </Layout>
                </Slide>
            </Deck>
        );
    }
}
