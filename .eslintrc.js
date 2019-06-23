module.exports = {
    "plugins": [ "react", "jest" ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jest/recommended"
    ],
    "parser": "babel-eslint",
    "env": {
        "node": true,
        "browser": true,
        "es6": true
    }
}
