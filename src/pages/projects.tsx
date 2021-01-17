import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import SplashBanner from '../components/SplashBanner';
import Wrapper from '../components/Wrapper';
import SEO from '../components/Seo';

const StyledProjectGrid = styled.section`
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
const StyledProjectCard = styled.article`
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
    background-color: rgba(0, 0, 0, 0.2);
    margin-bottom: 3rem;
    cursor: pointer;
    a:focus {
      outline: 1;
    }
  }
`;

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
        <StyledProjectGrid>
          {projectData.map(p => {
            const { _id, name, slug, thumb } = p;

            return (
              <StyledProjectCard key={_id}>
                <header className="header">
                  <h2>{name}</h2>
                </header>
                {thumb && (
                  <div className="img-wrapper">
                    <Link
                      to={`/projects/${slug.current}`}
                      role="navigation"
                      tabIndex={0}
                      aria-label="Project Details"
                    >
                      <Img fluid={thumb.asset.fluid} alt={name} />
                    </Link>
                  </div>
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
