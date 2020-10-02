/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createResolvers = ({ createResolvers,...rest },...args) => {
  console.log(rest,args, "createResolver")
  const resolvers = {
    Author: {
      fullName: {
        resolve: (source, args, context, info) => {
          return source.firstName + source.lastName
        }
      },
    },
    Query: {
      allRecentPosts: {
        type: [`String`],
        resolve: (source, args, context, info) => {
          console.log(source, args, context, info, "------")
          const posts = context.nodeModel.getAllNodes()
          const recentPosts = posts.filter(
            post => post.publishedAt > Date.UTC(2018, 0, 1)
          )
          return recentPosts
        }
      }
    }
  }
  createResolvers(resolvers)
}

exports.createPages = ({ graphql, actions , ...rest }, ...args) => {
  console.log(rest, args, "createPages")
  const { createRedirect } = actions //actions is collection of many actions - https://www.gatsbyjs.org/docs/actions
  // createRedirect({ fromPath: '/old-url', toPath: '/new-url', isPermanent: true });
}