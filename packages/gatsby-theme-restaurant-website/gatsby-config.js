module.exports = {
    plugins: [
        {
            resolve: 'gatsby-mdx',
            option: {}
        },
        {
            resolve: 'gatsby-plugin-page-creator',
            options: {
                path: `${__dirname}/src/pages/`
            }
        }
    ]
}