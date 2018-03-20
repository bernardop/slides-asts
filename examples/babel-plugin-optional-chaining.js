/* In */

const foo = {
    bar: {
        baz: "🍕"
    }
};

console.log(foo?.bar?.baz);

/* Out */

const foo = {
    bar: {
        baz: "🍕"
    }
};

console.log(
    foo === null || foo === void 0 ? void 0 : foo.bar === null || foo.bar === void 0 ? void 0 : foo.bar.baz
);
