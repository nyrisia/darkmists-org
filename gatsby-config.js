module.exports = {
  siteMetadata: {
    title: `darkmists-gatsby`,
    siteUrl: `https://darkmists-www.gitlab.io/`
  },
  plugins: ["gatsby-transformer-remark", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "markdown",
      "path": "./src/markdown/"
    },
    __key: "markdown"
  }]
};
