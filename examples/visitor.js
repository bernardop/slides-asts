const MyVisitor = {
    Identifier() {
        console.log("Identifier!");
    },
    BinaryExpression() {
        console.log("Binary Expression!");
    }
};

function add2(n) {
    return n + 2;
}

{
    type: "FunctionDeclaration",
    id: {
        type: "Identifier",
        name: "add2"
    },
    params: [{
        type: "Identifier",
        name: "n"
    }],
    body: {
        type: "BlockStatement",
        body: [{
            type: "ReturnStatement",
            argument: {
                type: "BinaryExpression",
                left: {
                    type: "Identifier",
                    name: "n"
                },
                operator: "+",
                right: {
                    type: "NumericLiteral",
                    value: 2
                }
            }
        }]
    }
}
