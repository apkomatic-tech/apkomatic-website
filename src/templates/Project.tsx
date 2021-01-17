import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { MdChevronRight, MdPublic } from 'react-icons/md';

import Wrapper from '../components/Wrapper';
import SEO from '../components/Seo';
import SplashBanner from '../components/SplashBanner';

const StyledDetails = styled.section`
  display: grid;
  grid-template-columns: 400px 1fr;
  column-gap: 3rem;
  .visit {
    display: inline-flex;
    align-items: center;
    svg {
      margin-left: 0.25rem;
    }
  }
  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    row-gap: 3rem;
  }
`;

const StyledDetailsContent = styled.div`
  h2 {
    margin-top: 0;
  }
  p {
    margin-top: 0;
  }
`;

const StyledBreadCrumbs = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 1.4rem;
  .sep {
    display: flex;
    align-items: center;
    margin: 0 0.5rem;
  }
`;

export default function ProjectDetailsPage({ data }) {
  const { name, description, url, client, thumb } = data.sanityProject;

  return (
    <div id="project-details-page">
      <SEO title={name} />
      <SplashBanner>
        <div>
          <h1>
            <div className="small text-left">Project:</div> {name}
          </h1>
        </div>
      </SplashBanner>
      <Wrapper
        style={{
          marginTop: '5rem',
          marginBottom: '7rem',
        }}
      >
        <StyledBreadCrumbs>
          <Link to="/projects" className="baseLink">
            Projects
          </Link>
          <span className="sep">
            <MdChevronRight />
          </span>
          <span>{name}</span>
        </StyledBreadCrumbs>
        <StyledDetails>
          <div>
            <Img fluid={thumb.asset.fluid} alt={name} />
          </div>
          <StyledDetailsContent>
            {description && <p>{description}</p>}
            <h2>Client</h2>
            <p>{client}</p>
            <a
              href={url}
              target="_blank"
              className="baseLink visit"
              rel="noopener noreferrer"
            >
              Visit Website <MdPublic />
            </a>
          </StyledDetailsContent>
        </StyledDetails>
      </Wrapper>
    </div>
  );
}

export const query = graphql`
  query ProjectDetailsQuery($id: String!) {
    sanityProject(_id: { eq: $id }) {
      name
      url
      client
      description
      thumb {
        asset {
          fluid(maxWidth: 500) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
