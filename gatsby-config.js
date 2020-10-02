module.exports = {
  developMiddleware: app => {
    console.log(app,app.request, "app-----")
    
  },
  siteMetadata: {
    title: `October 25th, 2020`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    whenAndWhere: {
      cards: [
        {
          occasion: "Mehendi",
          when: {
            date: "Friday, 23rd October, 2020",
            time: "04:00 PM-08:00 PM",
          },
          where: {
            location: "Chhetri Nivas, Raj Vihar Colony, Roorkee, Uttarakhand",
            mapLocation:"https://www.google.com/maps/dir//29.8364444,77.8961389/@29.8364456,77.8955917,212m/data=!3m1!1e3!4m2!4m1!3e0"
          }
        },
        {
          occasion: "Haldi Haath",
          when: {
            date: "Sunday, 25th October, 2020",
            time: "10:00 AM-01:00 PM",
          },
          where: {
            location: "Chhetri Nivas, Raj Vihar Colony, Roorkee, Uttarakhand",
            mapLocation:"https://www.google.com/maps/dir//29.8364444,77.8961389/@29.8364456,77.8955917,212m/data=!3m1!1e3!4m2!4m1!3e0"
          }
        },
        {
          occasion: "The Wedding",
          when: {
            date: "Sunday, 25th October, 2020",
            time: "07:30 PM-10:00 PM",
          },
          where: {
            location: "Rangoli Garden, Delhi Rd, Roorkee, Uttarakhand",
            mapLocation: "https://www.google.com/maps/dir//Rangoli+Garden,+1,+Delhi+Rd,+Nagendra+Vihar,+Defence+Colony,+Roorkee,+Uttarakhand+247667/@29.83036,77.8814088,850m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x390eb300173b6303:0x20e3780e283c0220!2m2!1d77.8835975!2d29.8303554!3e0"
          }
        }
      ]
    },
    messages: [
      {
        text: "मेली दी की छादी में जलूल जलूल आना",
        author: "रवि",
        langCode: "hi"
      },
      {
        text: "We expect your blessings more than anything on my sister's big day.Consider this as personal invitation. Let us all enjoy the holy occasion with your sweet presence.",
        author: "Pooja",
        langCode: "en"
      },
    ],
    gallery: [
      {
        path: `${__dirname}/src/images/gallery/arkesh_image_1_md.jpg`
      },
      {
        path: `${__dirname}/src/images/gallery/arkesh_image_2_md.jpg`
      },
      {
        path: `${__dirname}/src/images/gallery/arkesh_image_3_md.jpg`
      },
      {
        path: `${__dirname}/src/images/gallery/arkesh_image_4_md.jpg`
      },
      {
        path: `${__dirname}/src/images/gallery/arkesh_image_5_md.jpg`
      },
      {
        path: `${__dirname}/src/images/gallery/arkesh_image_6_md.jpg`
      },
      {
        path: `${__dirname}/src/images/gallery/arkesh_image_7_md.jpg`
      },
      {
        path: `${__dirname}/src/images/gallery/arkesh_image_8_md.jpg`
      },
      {
        path: `${__dirname}/src/images/gallery/arkesh_image_9_md.jpg`
      },
      {
        path: `${__dirname}/src/images/gallery/arkesh_image_10_md.jpg`
      },
      {
        path: `${__dirname}/src/images/gallery/arkesh_image_11_md.jpg`
      }
    ]
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
