// Import React
import React from "react";
import styled from "react-emotion";
import { SocialIcon } from "react-social-icons";

// Import Spectacle Core tags
import {
    Appear,
    Deck,
    Heading,
    Image,
    Link,
    List,
    ListItem,
    Notes,
    Slide,
    Text,
    Layout,
    Fill
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const images = {
    dpzLogo: require("./images/dpz-logo.png"),
    fam: require("./images/fam.jpg"),
    brianFordTweet: require("./images/briantford_status.png"),
    eslint: require("./images/eslint.svg"),
    babel: require("./images/babel-10.svg"),
    webpack: require("./images/webpack.svg"),
    prettier: require("./images/prettier.png"),
    prettierIn: require("./images/prettier-in.png"),
    prettierOut: require("./images/prettier-out.png"),
    uglify: require("./images/uglify.png"),
    uglifyIn: require("./images/uglify-in.png"),
    uglifyOut: require("./images/uglify-out.png"),
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
    tokens: require("./images/tokens.png"),
    ast: require("./images/ast.svg"),
    astCode: require("./images/ast-code.png"),
    astJson: require("./images/ast-json.png"),
    astJsonTypes: require("./images/ast-json-types.jpg"),
    coolStory: require("./images/cool-story.gif"),
    astVisualizer: require("./images/ast-visualizer.png"),
    astExplorer: require("./images/ast-explorer.png"),
    visitor: require("./images/visitor.png"),
    visitorIdentifier: require("./images/visitor-identifier.png"),
    visitorBinary: require("./images/visitor-binary.png"),
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
    console5: require("./images/console5.png"),
    pathsNode: require("./images/paths-node.png"),
    pathsPath: require("./images/paths-path.png"),
    pathsMeta: require("./images/paths-meta.png")
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

const AgendaHeading = styled(Heading)`
    background-color: rgba(255, 255, 255, 0.9);
    border-color: #0c648f;
    border-style: double;
    border-width: 20px 0;
    padding: 0.5rem;
`;

const CustomHeading = styled(Heading)`
    position: ${props => (props.zIndex ? "relative" : "static")};
    z-index: ${props => props.zIndex || "auto"};
`;

const SlideTitle = ({ caps, children, textColor, fit, padding, size, zIndex }) => (
    <CustomHeading size={size || 3} fit={fit} caps textColor={textColor} padding={padding} zIndex={zIndex}>
        {children}
    </CustomHeading>
);

const SlideTitleSecondary = styled(Heading)`
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    top: 0;
    width: 92%;
    z-index: ${props => props.zIndex || "auto"};
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
    width: ${props => props.width || "auto"};
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
    z-index: ${props => props.zIndex || "auto"};
`;

const BoxedText = styled(Text)`
    border: 1px solid #333;
`;

const StyledLink = styled(Link)`
    border: 1px solid #333;
    padding: ${props => props.padding || "0"};
`;

const StyledListItem = styled(ListItem)`
    list-style-position: outside;
    margin: 0.5rem 0;
`;

const Overlay = styled("div")`
    background: rgba(255, 255, 255, 0.95);
    bottom: -50%;
    left: -50%;
    position: fixed;
    right: -50%;
    top: -50%;
`;

const AbsoluteContainer = styled("div")`
    align-items: ${props => props.alignItems || "center"};
    bottom: ${props => props.bottom || "auto"};
    display: flex;
    flex-direction: ${props => props.flexDirection || "row"};
    justify-content: ${props => props.justifyContent || "flex-start"};
    left: ${props => props.left || "auto"};
    padding: ${props => props.padding || "0"};
    position: absolute;
    right: ${props => props.right || "auto"};
    top: ${props => props.top || "auto"};
    z-index: 100;
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
                <AgendaHeading caps size={3} textColor="tertiary">
                    Agenda
                </AgendaHeading>
                <ListSansBullets color="secondary" textFont="secondary">
                    {agendaItems.map(
                        (agendaItem, index) =>
                            focusedIndex === index ? (
                                <FocusedListItem key={index}>{agendaItem}</FocusedListItem>
                            ) : (
                                <PaddedListItem key={index}>{agendaItem}</PaddedListItem>
                            )
                    )}
                </ListSansBullets>
            </React.Fragment>
        );
    }
}

class LogosSlideContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            topRow: [],
            bottomRow: []
        };
    }

    static getDerivedStateFromProps(nextProps) {
        return {
            topRow: [
                {
                    type: "image",
                    imageName: "eslint",
                    highlighted: nextProps.highlightedIndex === 0,
                    zIndex: nextProps.highlightedIndex === 0 ? "100" : "0"
                },
                {
                    type: "image",
                    imageName: "babel",
                    highlighted: nextProps.highlightedIndex === 1,
                    zIndex: nextProps.highlightedIndex === 1 ? "100" : "0"
                },
                {
                    type: "image",
                    imageName: "webpack",
                    highlighted: nextProps.highlightedIndex === 2,
                    zIndex: nextProps.highlightedIndex === 2 ? "100" : "0"
                }
            ],
            bottomRow: [
                {
                    type: "image",
                    imageName: "uglify",
                    highlighted: nextProps.highlightedIndex === 3,
                    zIndex: nextProps.highlightedIndex === 3 ? "100" : "0"
                },
                {
                    type: "image",
                    imageName: "prettier",
                    highlighted: nextProps.highlightedIndex === 4,
                    zIndex: nextProps.highlightedIndex === 4 ? "100" : "0"
                },
                {
                    type: "text",
                    text: "JSCodeshift",
                    highlighted: nextProps.highlightedIndex === 5,
                    zIndex: nextProps.highlightedIndex === 5 ? "100" : "0"
                }
            ]
        };
    }

    render() {
        return (
            <React.Fragment>
                {this.props.title ? (
                    <SlideTitle textColor="primary" size={4} zIndex="100" fit={this.props.fitTitle}>
                        {this.props.title}
                    </SlideTitle>
                ) : null}
                {this.props.subtitle ? (
                    <SlideTitleSecondary textColor="tertiary" size={6} textSize="2rem" zIndex="100">
                        {this.props.subtitle}
                    </SlideTitleSecondary>
                ) : null}
                <Layout>
                    {this.state.topRow.map((item, index) => (
                        <FlexFill
                            key={index}
                            padded={true}
                            highlight={item.highlighted}
                            margin="2rem 0 0 0"
                            zIndex={item.zIndex}
                        >
                            {item.type === "image" ? (
                                <LogoImage src={images[item.imageName].replace("/", "")} />
                            ) : (
                                <Text>{item.text}</Text>
                            )}
                        </FlexFill>
                    ))}
                </Layout>
                <Layout>
                    {this.state.bottomRow.map((item, index) => (
                        <FlexFill
                            key={index}
                            padded={true}
                            highlight={item.highlighted}
                            margin="4rem 0 0 0"
                            zIndex={item.zIndex}
                        >
                            {item.type === "image" ? (
                                <LogoImage src={images[item.imageName].replace("/", "")} />
                            ) : (
                                <Text>{item.text}</Text>
                            )}
                        </FlexFill>
                    ))}
                </Layout>
            </React.Fragment>
        );
    }
}

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transitionDuration={500} theme={theme} progress="bar" controls={false}>
                <Slide bgColor="secondary" progressColor="primary">
                    <Heading size={4} lineHeight={1} textColor="primary">
                        ASTronomically Improving Your Developer Experience
                    </Heading>
                    <Heading size={5} fit lineHeight={1} textColor="tertiary">
                        (A JS Abstract Syntax Trees Primer)
                    </Heading>
                    <Text margin="5rem 0 0" textAlign="right" textColor="quaternary" textFont="secondary">
                        Bernardo Pacheco
                    </Text>
                    <Text textAlign="right" textColor="quaternary" textFont="secondary">
                        <SocialIcon color="#0c648f" url="https://github.com/bernardop" />{" "}
                        <SocialIcon color="#0c648f" url="https://twitter.com/bernardop" /> bernardop
                    </Text>
                </Slide>

                <Slide bgColor="secondary" transition={["zoom"]}>
                    <StyledImage src={images.fam.replace("/", "")} width="50%" />
                    <Text textColor="quaternary" textFont="secondary">
                        <Image
                            src={images.dpzLogo.replace("/", "")}
                            height="50px"
                            margin="1rem 0 0 0"
                            display="inline"
                        />{" "}
                        Front-End Developer
                    </Text>
                </Slide>

                <Slide bgColor="primary" transition={["zoom"]}>
                    <AgendaHeading caps size={3} textColor="tertiary">
                        Agenda
                    </AgendaHeading>
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
                    <SlideTitle textColor="primary" size={4}>
                        Cue tweet about ASTs...
                    </SlideTitle>
                </Slide>

                <Slide bgColor="secondary" transition={["slide"]} progressColor="primary">
                    <Notes>
                        <ul>
                            <li>Superpowers</li>
                        </ul>
                    </Notes>
                    <SlideTitle textColor="primary">Why learn ASTs?</SlideTitle>
                    <Image src={images.brianFordTweet.replace("/", "")} padding="50px 0" />
                </Slide>

                <Slide bgColor="secondary" transitionIn={["slide"]} progressColor="primary">
                    <Notes>
                        <ul>
                            <li>Better understand these tools</li>
                            <li>Extend some of them</li>
                        </ul>
                    </Notes>
                    <LogosSlideContent title="Why learn ASTs?" />
                </Slide>

                <Slide bgColor="secondary" progressColor="primary">
                    <Notes>
                        <h1>ESLint</h1>
                        <ul>
                            <li>
                                Static analysis
                                <ul>
                                    <li>Find problematic patterns</li>
                                    <li>Adhere to certain guidelines</li>
                                </ul>
                            </li>
                        </ul>
                    </Notes>
                    <LogosSlideContent highlightedIndex={0} title="Why learn ASTs?" />
                    <Overlay />
                </Slide>

                <Slide bgColor="secondary" progressColor="primary">
                    <Notes>
                        <h1>Other ESLint plugins</h1>
                        <ul>
                            <li>eslint-plugin-import</li>
                            <li>eslint-plugin-react</li>
                        </ul>
                    </Notes>
                    <LogosSlideContent
                        highlightedIndex={0}
                        title="eslint-plugin-jsx-a11y"
                        subtitle="Why learn ASTs?"
                    />
                    <AbsoluteContainer
                        alignItems="flex-end"
                        flexDirection="column"
                        padding="15% 1rem 0 0"
                        top="0"
                        right="0"
                    >
                        <Image width="60%" margin="0 0 1rem 0" src={images.eslintEmoji.replace("/", "")} />
                        <Image width="60%" margin="0" src={images.eslintAnchor.replace("/", "")} />
                    </AbsoluteContainer>
                    <Overlay />
                </Slide>

                <Slide bgColor="secondary" progressColor="primary">
                    <Notes>
                        <h1>Babel</h1>
                        <ul>
                            <li>Compile newer JS features down to a supported version</li>
                        </ul>
                    </Notes>
                    <LogosSlideContent highlightedIndex={1} title="Why learn ASTs?" />
                    <Overlay />
                </Slide>

                <Slide bgColor="secondary" progressColor="primary">
                    <LogosSlideContent
                        highlightedIndex={1}
                        title="babel-plugin-lodash"
                        subtitle="Why learn ASTs?"
                    />
                    <AbsoluteContainer alignItems="flex-start" flexDirection="row" padding="0" top="55%">
                        <Image padding="0 0.25rem" src={images.babelLodashIn.replace("/", "")} width="50%" />
                        <Image padding="0 0.25rem" src={images.babelLodashOut.replace("/", "")} width="50%" />
                    </AbsoluteContainer>
                    <Overlay />
                </Slide>

                <Slide bgColor="secondary" progressColor="primary">
                    <LogosSlideContent
                        highlightedIndex={1}
                        title="@babel/plugin-proposal-optional-chaining"
                        subtitle="Why learn ASTs?"
                        fitTitle={true}
                    />
                    <AbsoluteContainer
                        alignItems="flex-start"
                        flexDirection="row"
                        justifyContent="center"
                        padding="0"
                        top="55%"
                    >
                        <Image
                            margin="0"
                            padding="0 0.25rem"
                            src={images.babelOptChainIn.replace("/", "")}
                            width="40%"
                        />
                        <Image
                            margin="0"
                            padding="0 0.25rem"
                            src={images.babelOptChainOut.replace("/", "")}
                            width="40%"
                        />
                    </AbsoluteContainer>
                    <Overlay />
                </Slide>

                <Slide bgColor="secondary" progressColor="primary">
                    <Notes>
                        <h1>Webpack</h1>
                        <ul>
                            <li>Performs static analysis on the AST to support any type of module</li>
                            <li>Version 4 - possible to pass AST directly from loader to webpack</li>
                        </ul>
                    </Notes>
                    <LogosSlideContent highlightedIndex={2} title="Why learn ASTs?" />
                    <Overlay />
                </Slide>

                <Slide bgColor="secondary" progressColor="primary">
                    <Notes>
                        <h1>Uglify</h1>
                        <ul>
                            <li>Scope analysis</li>
                        </ul>
                    </Notes>
                    <LogosSlideContent highlightedIndex={3} title="Why learn ASTs?" />
                    <Overlay />
                </Slide>

                <Slide bgColor="secondary" progressColor="primary">
                    <Notes>
                        <h1>Uglify</h1>
                        <ul>
                            <li>Scope analysis</li>
                        </ul>
                    </Notes>
                    <LogosSlideContent highlightedIndex={3} title="Why learn ASTs?" />
                    <AbsoluteContainer
                        alignItems="flex-end"
                        flexDirection="column"
                        padding="15% 10% 0 0"
                        top="0"
                        right="0"
                    >
                        <Image width="60%" margin="0 0 1rem 0" src={images.uglifyIn.replace("/", "")} />
                        <Image width="60%" margin="0" src={images.uglifyOut.replace("/", "")} />
                    </AbsoluteContainer>
                    <Overlay />
                </Slide>

                <Slide bgColor="secondary" progressColor="primary">
                    <Notes>
                        <h1>Prettier</h1>
                        <ul>
                            <li>Uses AST to pretty print</li>
                            <li>Location?</li>
                        </ul>
                    </Notes>
                    <LogosSlideContent highlightedIndex={4} title="Why learn ASTs?" />
                    <Overlay />
                </Slide>

                <Slide bgColor="secondary" progressColor="primary">
                    <Notes>
                        <h1>Prettier</h1>
                        <ul>
                            <li>Uses AST to pretty print</li>
                            <li>Location?</li>
                        </ul>
                    </Notes>
                    <LogosSlideContent highlightedIndex={4} title="Why learn ASTs?" />
                    <AbsoluteContainer
                        alignItems="flex-start"
                        flexDirection="row"
                        justifyContent="center"
                        padding="0"
                        top="20%"
                    >
                        <Image
                            margin="0"
                            padding="0 0.25rem"
                            src={images.prettierIn.replace("/", "")}
                            width="38%"
                        />
                        <Image
                            margin="0"
                            padding="0 0.25rem"
                            src={images.prettierOut.replace("/", "")}
                            width="38%"
                        />
                    </AbsoluteContainer>
                    <Overlay />
                </Slide>

                <Slide bgColor="secondary" progressColor="primary">
                    <Notes>
                        <h1>JSCodeshift</h1>
                        <ul>
                            <li>Write transformations that operate on multiple files</li>
                        </ul>
                    </Notes>
                    <LogosSlideContent highlightedIndex={5} title="Why learn ASTs?" />
                    <Overlay />
                </Slide>

                <Slide bgColor="secondary" transition={["slide"]} progressColor="primary">
                    <Notes>
                        <ul>
                            <li>
                                js-codemod
                                <ul>
                                    <li>
                                        Convert <code>var</code> to <code>const</code> or <code>let</code>
                                    </li>
                                    <li>Transform object literals to use ES6 shorthand</li>
                                </ul>
                            </li>
                            <li>
                                react-codemod
                                <ul>
                                    <li>rename-unsafe-lifecycles</li>
                                    <li>React-PropTypes-to-prop-types</li>
                                </ul>
                            </li>
                        </ul>
                    </Notes>
                    <SlideTitle textColor="primary" size={4}>
                        Codemods
                    </SlideTitle>
                    <SlideTitleSecondary textColor="tertiary" size={6} textSize="1.5rem">
                        Why learn ASTs?
                    </SlideTitleSecondary>
                    <Layout>
                        <FlexFill margin="1rem 0 0 0">
                            <Image width="70%" src={images.githubBabelCodemod.replace("/", "")} />
                            <Image width="70%" src={images.githubJSCodeshift.replace("/", "")} />
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
                            <BoxedText padding="1rem" textFont="secondary" textSize="2rem">
                                Lexical Analysis<br />(Tokenization)
                            </BoxedText>
                        </FlexFill>
                        <FlexFill margin="3rem 0.5rem 0">
                            <Image src={images.arrowRight.replace("/", "")} />
                        </FlexFill>
                        <FlexFill margin="3rem 0.5rem 0">
                            <BoxedText padding="1rem" textFont="secondary" textSize="2rem">
                                Syntax Analysis<br />(Parsing)
                            </BoxedText>
                        </FlexFill>
                        <FlexFill margin="3rem 0.5rem 0">
                            <Image src={images.arrowRight.replace("/", "")} />
                        </FlexFill>
                        <FlexFill margin="3rem 0.5rem 0">
                            <BoxedText padding="3rem" textFont="secondary" textSize="2rem">
                                AST
                            </BoxedText>
                        </FlexFill>
                    </Layout>
                </Slide>

                <Slide bgColor="secondary" transition={["zoom"]} progressColor="primary">
                    <Notes>
                        <h1>Tokenization</h1>
                        <ul>
                            <li>Minimum sequence of characters with meaning</li>
                            <li>Grammar - valid way of combining tokens</li>
                        </ul>
                    </Notes>
                    <SlideTitle textColor="primary" size={4}>
                        Lexical Analysis
                    </SlideTitle>
                    <SlideTitleSecondary textColor="tertiary" size={6} textSize="1.5rem">
                        What is an AST?
                    </SlideTitleSecondary>
                    <Layout>
                        <FlexFill margin="1rem 0 0 0">
                            <Image width="700px" src={images.tokens.replace("/", "")} />
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
                    <Layout>
                        <FlexFill hAlign="flex-start" margin="1rem 0 0 0">
                            <StyledImage width="700px" src={images.ast.replace("/", "")} />
                        </FlexFill>
                        <FlexFill vAlign="flex-start" margin="1rem 0 0 0">
                            <Image margin="0" width="500px" src={images.astCode.replace("/", "")} />
                        </FlexFill>
                    </Layout>
                </Slide>

                <Slide bgColor="secondary" transition={["zoom"]} progressColor="primary">
                    <Notes>
                        <ul>
                            <li>Deeply nested object</li>
                            <li>Code representation that is simpler to work with</li>
                            <li>Gives us a lot of information</li>
                        </ul>
                    </Notes>
                    <SlideTitle textColor="primary" size={4}>
                        This is it
                    </SlideTitle>
                    <SlideTitleSecondary textColor="tertiary" size={6} textSize="1.5rem">
                        What is an AST?
                    </SlideTitleSecondary>
                    <Layout>
                        <FlexFill margin="1rem 0 0 0" height="500px" overflow="auto" vAlign="flex-start">
                            <StyledImage margin="0" src={images.astJson.replace("/", "")} width="750px" />
                        </FlexFill>
                    </Layout>
                </Slide>

                <Slide bgColor="secondary" progressColor="primary">
                    <SlideTitle textColor="primary" size={4}>
                        ESTree Spec
                    </SlideTitle>
                    <SlideTitleSecondary textColor="tertiary" size={6} textSize="1.5rem">
                        What is an AST?
                    </SlideTitleSecondary>
                    <Layout>
                        <FlexFill margin="1rem 0 0 0" height="500px" overflow="auto" vAlign="flex-start">
                            <Link
                                href="https://github.com/estree/estree/blob/master/es5.md#node-objects"
                                target="_blank"
                            >
                                <StyledImage
                                    margin="0"
                                    src={images.astJsonTypes.replace("/", "")}
                                    width="750px"
                                />
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
                    <Notes>
                        <ul>
                            <li>
                                If you only remember one thing about this talk, remember <b>AST Explorer</b>
                            </li>
                        </ul>
                    </Notes>
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
                                href="http://astexplorer.net/#/gist/3049fc1cd012ab51a2f43a0ed0ee5d34/b7205224f9342539d8cfd2df14ea536e34b671ce"
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
                    <Notes>
                        <ul>
                            <li>Pattern used in AST traversal across languages</li>
                            <li>Object with methods defined for accepting particular node types</li>
                        </ul>
                    </Notes>
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
                    <Notes>
                        <ul>
                            <li>Example</li>
                        </ul>
                    </Notes>
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
                            <Image src={images.visitorIdentifier.replace("/", "")} width="500px" />
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
                            <Image src={images.visitorIdentifier.replace("/", "")} width="500px" />
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
                            <Image src={images.visitorBinary.replace("/", "")} width="500px" />
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
                            <Image src={images.visitorIdentifier.replace("/", "")} width="500px" />
                            <Image src={images.console5.replace("/", "")} width="500px" />
                        </FlexFill>
                    </Layout>
                </Slide>

                <Slide bgColor="secondary" progressColor="primary">
                    <Notes>
                        <ul>
                            <li>Both ESLint and Babel use this pattern</li>
                        </ul>
                    </Notes>
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

                <Slide bgColor="primary" transition={["slide"]}>
                    <AgendaSlideContent focusedIndex={3} />
                </Slide>

                <Slide bgColor="secondary" progressColor="primary" transition={["slide"]}>
                    <SlideTitle textColor="primary" fit>
                        Writing a custom ESLint rule
                    </SlideTitle>
                    <Layout>
                        <FlexFill margin="3rem 0 0 0">
                            <StyledLink
                                href="http://astexplorer.net/#/gist/79e64f9274c055428a14c1916edc590b/61b5cad748ed099e1e3bc999e8f35a0a4b33a578"
                                target="_blank"
                                padding="1rem"
                            >
                                <Image width="200px" src={images.eslint.replace("/", "")} />
                                <Text margin="1rem 0 0 0" textFont="secondary">
                                    Setup
                                </Text>
                            </StyledLink>
                        </FlexFill>
                        <FlexFill margin="3rem 0 0 0">
                            <StyledLink
                                href="http://astexplorer.net/#/gist/f6e8183ce27363ba2c90d94111cd6ef7/ad9e844d49b156b9876e529b7089b8217cca1567"
                                target="_blank"
                                padding="1rem"
                            >
                                <Image width="200px" src={images.eslint.replace("/", "")} />
                                <Text margin="1rem 0 0 0" textFont="secondary">
                                    Complete
                                </Text>
                            </StyledLink>
                        </FlexFill>
                    </Layout>
                </Slide>

                <Slide bgColor="primary" transition={["zoom"]}>
                    <AgendaSlideContent focusedIndex={4} />
                </Slide>

                <Slide bgColor="secondary" progressColor="primary" transition={["zoom"]}>
                    <Notes>
                        <h1>Paths</h1>
                        <ul>
                            <li>Object representation of the link between two nodes</li>
                            <li>
                                As well as tons and tons of methods related to adding, updating, moving, and
                                removing nodes
                            </li>
                        </ul>
                    </Notes>
                    <SlideTitle textColor="primary" size={4}>
                        Paths
                    </SlideTitle>
                    <SlideTitleSecondary textColor="tertiary" size={6} textSize="1.5rem">
                        Writing a custom Babel plugin
                    </SlideTitleSecondary>
                    <Layout>
                        <FlexFill margin="1rem 0 0 0" vAlign="flex-start">
                            <div>
                                <Image src={images.pathsNode.replace("/", "")} width="400px" />
                                <Text textFont="secondary">Node</Text>
                            </div>
                            <Appear>
                                <div>
                                    <Image src={images.pathsPath.replace("/", "")} width="400px" />
                                    <Text margin="0.25rem 0 0 0" textFont="secondary">
                                        Path
                                    </Text>
                                </div>
                            </Appear>
                        </FlexFill>
                        <FlexFill>
                            <Appear>
                                <div>
                                    <Image src={images.pathsMeta.replace("/", "")} width="400px" />
                                    <Text margin="0.25rem 0 0 0" textFont="secondary">
                                        Path + metadata
                                    </Text>
                                </div>
                            </Appear>
                        </FlexFill>
                    </Layout>
                </Slide>

                <Slide bgColor="secondary" progressColor="primary" transition={["zoom"]}>
                    <SlideTitle textColor="primary" fit>
                        Writing a custom Babel plugin
                    </SlideTitle>
                    <Layout>
                        <FlexFill margin="3rem 0 0 0">
                            <StyledLink
                                href="http://astexplorer.net/#/gist/de02c56dbb8eec0a1fdff1c8e096a1fa/0a5e3cc01a9bdef5c5e20607082a749daed1d4de"
                                target="_blank"
                                padding="1rem"
                            >
                                <Image width="250px" src={images.babel.replace("/", "")} />
                                <Text margin="1rem 0 0 0" textFont="secondary">
                                    Setup
                                </Text>
                            </StyledLink>
                        </FlexFill>
                        <FlexFill margin="3rem 0 0 0">
                            <StyledLink
                                href="http://astexplorer.net/#/gist/9605f50f95e73c967de3fe1ee9bb123e/bccc09c3c3a70ba3b54901c95b9adaea659287c8"
                                target="_blank"
                                padding="1rem"
                            >
                                <Image width="250px" src={images.babel.replace("/", "")} />
                                <Text margin="1rem 0 0 0" textFont="secondary">
                                    Complete
                                </Text>
                            </StyledLink>
                        </FlexFill>
                    </Layout>
                </Slide>

                <Slide textFont="secondary" bgColor="secondary" progressColor="primary" transition={["zoom"]}>
                    <SlideTitle textColor="primary">Resources</SlideTitle>
                    <List ordered={true} type="1">
                        <StyledListItem>
                            <Link href="http://astexplorer.net/" target="_blank">
                                <span role="img" aria-label="tools">
                                    🛠
                                </span>{" "}
                                AST Explorer
                            </Link>
                        </StyledListItem>
                        <StyledListItem>
                            <Link
                                href="https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md"
                                target="_blank"
                            >
                                <span role="img" aria-label="notebook">
                                    📓
                                </span>{" "}
                                Babel Plugin Handbook
                            </Link>
                        </StyledListItem>
                        <StyledListItem>
                            <Link href="https://github.com/estree/estree" target="_blank">
                                <span role="img" aria-label="notebook">
                                    📓
                                </span>{" "}
                                The ESTree Spec
                            </Link>
                        </StyledListItem>
                        <StyledListItem>
                            <Link href="https://www.youtube.com/watch?v=LRKlqR6KY_E" target="_blank">
                                <span role="img" aria-label="tv">
                                    📺
                                </span>{" "}
                                As simple as an AST by Pavithra Kodmad
                            </Link>
                        </StyledListItem>
                        <StyledListItem>
                            <Link href="https://www.youtube.com/watch?v=VBscbcm2Mok" target="_blank">
                                <span role="img" aria-label="tv">
                                    📺
                                </span>{" "}
                                Writing custom Babel and ESLint plugins with ASTs by Kent C. Dodds
                            </Link>
                        </StyledListItem>
                        <StyledListItem>
                            <Link
                                href="https://resources.jointjs.com/demos/rappid/apps/Ast/index.html"
                                target="_blank"
                            >
                                <span role="img" aria-label="tools">
                                    🛠
                                </span>{" "}
                                AST Visualizer
                            </Link>
                        </StyledListItem>
                    </List>
                </Slide>

                <Slide bgColor="primary" transition={["zoom"]}>
                    <Heading size={1} textColor="secondary">
                        THANK YOU!
                    </Heading>
                    <Heading size={1} textColor="secondary" margin="3rem 0 0 0">
                        <span role="img" aria-label="thumbs up">
                            👍
                        </span>
                    </Heading>
                </Slide>
            </Deck>
        );
    }
}
