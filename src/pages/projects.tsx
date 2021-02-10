import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import SplashBanner from '../components/SplashBanner';
import Wrapper from '../components/Wrapper';
import SEO from '../components/Seo';

const StyledProjectGrid = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3rem;
  row-gap: 2rem;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
const StyledProjectCard = styled(motion.article)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  * {
    box-sizing: inherit;
  }
  .header {
    h2 {
      font-size: 2rem;
      margin: 0;
    }
    margin-bottom: 2rem;
  }
  .img-wrapper {
    overflow: hidden;
    object-fit: contain;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    margin-bottom: 3rem;
    cursor: pointer;
    a:focus {
      outline: 1;
    }
  }
`;

const gridVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
};
const gridItemVariant = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

const ProjectPage = ({ data }) => {
  const { nodes: projectData } = data.allSanityProject;
  return (
    <div id="project-page">
      <SEO title="Projects" />
      <SplashBanner title="Projects" />
      <Wrapper
        style={{
          marginTop: '7rem',
          marginBottom: '7rem',
        }}
      >
        <StyledProjectGrid
          variants={gridVariant}
          initial="hidden"
          animate="show"
        >
          {projectData.map(project => {
            const { _id, name, slug, thumb } = project;

            return (
              <StyledProjectCard key={_id} variants={gridItemVariant}>
                <header className="header">
                  <h2>{name}</h2>
                </header>
                {thumb && (
                  <motion.div
                    className="img-wrapper"
                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    <Link
                      to={`/projects/${slug.current}/`}
                      role="navigation"
                      tabIndex={0}
                      aria-label="Project Details"
                    >
                      <Img fluid={thumb.asset.fluid} alt={name} />
                    </Link>
                  </motion.div>
                )}
              </StyledProjectCard>
            );
          })}
        </StyledProjectGrid>
      </Wrapper>
    </div>
  );
};

export const query = graphql`
  query ProjectQuery {
    allSanityProject {
      nodes {
        name
        url
        client
        _id
        stack {
          name
          _id
        }
        thumb {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
        slug {
          current
        }
      }
    }
  }
`;

export default ProjectPage;
