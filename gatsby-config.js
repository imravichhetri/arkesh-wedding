module.exports = {
  siteMetadata: {
    title: `May 4th, 2019`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    whenAndWhere: {
      cards: [
        {
          occasion: "Mehendi",
          when: {
            date: "Sunday, 3rd May, 2020",
            time: "07:00 pm-11:00 pm",
          },
          where: {
            location: "Chhetri Nivas, Raj Vihar Colony, Roorkee, Uttarakhand",
            mapLocation:""
          }
        },
        {
          occasion: "Haldi Haath",
          when: {
            date: "Monday, 4th May, 2020",
            time: "10:00 am-01:00 pm",
          },
          where: {
            location: "Chhetri Nivas, Raj Vihar Colony, Roorkee, Uttarakhand",
            mapLocation:""
          }
        },
        {
          occasion: "The Wedding",
          when: {
            date: "Monday, 4th May, 2020",
            time: "08:00 pm-11:00 pm",
          },
          where: {
            location: "Rangoli Garden, Delhi Rd, Roorkee, Uttarakhand",
            mapLocation: ""
          }
        }
      ]
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
