module.exports = {
    extends: [
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },

    rules: {
        // note you must disable the base rule as it can report incorrect errors
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-use-before-define': 'off',
        'no-empty-function': 'off',
    },
};
