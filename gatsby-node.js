/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  // get template
  const ProjectTemplate = path.resolve('./src/templates/Project.tsx');
  // query
  const { data } = await graphql(`
    query ProjectQuery {
      project: allSanityProject {
        nodes {
          _id
          slug {
            current
          }
        }
      }
    }
  `);

  data.project.nodes.forEach(p => {
    const { _id: id, slug } = p;

    actions.createPage({
      path: `projects/${slug.current}`,
      component: ProjectTemplate,
      context: {
        id,
      },
    });
  });
};
