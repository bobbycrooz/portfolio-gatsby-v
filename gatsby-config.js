module.exports = {
     siteMetadata: {
          siteUrl: "https://www.yourdomain.tld",
          title: "portfolio",
     },
     plugins: [
          "gatsby-plugin-styled-components",
          "gatsby-plugin-image",
          "gatsby-plugin-react-helmet",
          "gatsby-plugin-sharp",
          "gatsby-transformer-sharp",
          "gatsby-plugin-layout",
          "gatsby-plugin-postcss",

          {
               resolve: "gatsby-source-filesystem",
               options: {
                    name: "images",
                    path: "./src/images/",
                           prettier: {
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            "**/*.{css,scss,less}",
            "**/*.{json,json5}",
            "**/*.{graphql}",
            "**/*.{md,mdx}",
            "**/*.{html}",
            "**/*.{yaml,yml}",
          ],
        },
        
        eslint: {
          patterns: "**/*.{js,jsx,ts,tsx}",
          customOptions: {
            fix: true,
            cache: true,
          },
        },
               },
               __key: "images",
          },
     ],
};
