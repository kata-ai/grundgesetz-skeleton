import * as React from 'react';
import Link from 'gatsby-link';
import styled from 'utils/styled';
import { MenuItem } from 'interfaces/nodes';
import { breakpoints } from 'styles/variables';
import Container from './Container';

const Wrapper = styled('aside')`
  padding: 2rem ${props => props.theme.dimensions.containerPadding}rem;
  background-color: ${props => props.theme.colors.ui.light};
`;

const WrapperInner = styled(Container)`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.sm}px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const PaginationItem = styled('div')`
  text-align: center;

  &:last-child {
    margin-top: 2rem;
  }

  @media (min-width: ${breakpoints.sm}px) {
    &:first-child {
      text-align: left;
    }

    &:last-child {
      margin-top: 0;
      text-align: right;
    }
  }
`;

const PaginationHeading = styled('span')`
  display: block;
  margin: 0;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${props => props.theme.colors.accent};
`;

const PaginationLink = styled(Link)`
  margin: 0;
  font-size: ${props => props.theme.dimensions.headingSizes.h2}rem;
  color: ${props => props.theme.colors.gray.copy};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  transition: border-color 0.3s ease;

  &:hover,
  &:focus {
    text-decoration: none;
    border-bottom-color: ${props => props.theme.colors.gray.copy};
  }
`;

interface PaginationProps {
  prevPage?: MenuItem;
  nextPage?: MenuItem;
}

const Pagination: React.SFC<PaginationProps> = ({ prevPage, nextPage }) => (
  <Wrapper>
    <WrapperInner>
      <PaginationItem>
        {prevPage && (
          <>
            <PaginationHeading>Previous Page</PaginationHeading>
            <PaginationLink to={prevPage.slug}>{prevPage.title}</PaginationLink>
          </>
        )}
      </PaginationItem>

      <PaginationItem>
        {nextPage && (
          <>
            <PaginationHeading>Next Page</PaginationHeading>
            <PaginationLink to={nextPage.slug}>{nextPage.title}</PaginationLink>
          </>
        )}
      </PaginationItem>
    </WrapperInner>
  </Wrapper>
);

export default Pagination;
