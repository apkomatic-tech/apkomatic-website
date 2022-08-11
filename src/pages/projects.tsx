import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import styled from 'styled-components';

import Wrapper from '../components/Wrapper';
import SEO from '../components/Seo';
import { StyledPrimaryButtonWithArrow } from '../components/Button';
import { HiOutlineChevronRight } from 'react-icons/hi';
import SplashHeader from '../components/SplashHeader';
import porfolioBackgroundImg from '../images/portfolio/portfolio-background-optimized.jpg';

const StyledProjectGrid = styled.section`
  background: #fff;
  padding: 4rem 4rem 0 4rem;
  position: relative;
  top: -160px;
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 4rem;
  border-radius: 4px 4px 0 0;
  box-shadow: 0 -10px 25px rgba(0, 0, 0, 0.06);
`;
const StyledProjectCard = styled.article`
  border-bottom: 1px solid var(--grey);
  padding-bottom: 4rem;
  display: grid;
  grid-gap: 5rem;
  &:last-of-type {
    border-bottom: 0;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 500px;
  }
`;
const StyledProjectTitle = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  font-family: var(--headingFont);
`;

const StyledProjectImageContainer = styled.div``;

type DataProps = {
  allSanityProject: {
    nodes: {
      name: string;
      url: string;
      client: string;
      description?: string;
      _id: number | string;
      stack: {
        name: string;
        _id: number | string;
      }[];
      order: number;
      thumb: {
        asset: IGatsbyImageData;
      };
      slug: {
        current: string;
      };
    }[];
  };
};
const ProjectPage = ({ data }: PageProps<DataProps>) => {
  const { nodes: projectData } = data.allSanityProject;
  return (
    <div id="project-page">
      <SEO title="Projects" />
      <SplashHeader
        headingText="Projects"
        backgroundImage={porfolioBackgroundImg}
      />
      <Wrapper wide>
        <StyledProjectGrid>
          {projectData.map(project => {
            const { _id, name, url, thumb, description, stack, order } =
              project;
            const stackList = stack?.length
              ? stack
                  .map(s => {
                    return s.name;
                  })
                  .join(', ')
              : null;
            const projectImage = getImage(thumb.asset) as IGatsbyImageData;

            return (
              <StyledProjectCard key={_id} data-order={order}>
                <div>
                  <StyledProjectTitle>{name}</StyledProjectTitle>
                  {description && <p>{description}</p>}
                  {stackList && (
                    <p>
                      Built with: <em>{stackList}</em>
                    </p>
                  )}
                  <StyledPrimaryButtonWithArrow
                    as="a"
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Project
                    <HiOutlineChevronRight />
                  </StyledPrimaryButtonWithArrow>
                </div>
                <StyledProjectImageContainer>
                  <GatsbyImage image={projectImage} alt={name} />
                </StyledProjectImageContainer>
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
    allSanityProject(sort: { fields: order, order: ASC }) {
      nodes {
        name
        url
        client
        description
        order
        _id
        stack {
          name
          _id
        }
        thumb {
          asset {
            gatsbyImageData(width: 500, placeholder: BLURRED)
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
