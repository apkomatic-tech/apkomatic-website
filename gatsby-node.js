/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require('path');

async function createProjectPages({ graphql, actions }) {
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

    const url = `projects/${slug.current}/`;

    actions.createPage({
      path: url,
      component: ProjectTemplate,
      context: {
        id,
      },
    });
  });
}

exports.createPages = async params => {
  await Promise.all([createProjectPages(params)]);
};
