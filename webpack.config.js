module.exports = {
    entry: "./dev/dateParser",
    output: {
        path: "dist",
        filename: "dateHelper.js",
        library: "dateParser",
        libraryTarget: "var"
    }
};