import React from 'react';
import Link from 'gatsby-link';
import styled from 'utils/styled';
import { MenuItem } from 'interfaces/nodes';
import { breakpoints } from 'styles/variables';
import Container from './Container';

const Wrapper = styled('aside')`
  padding: 2rem ${props => props.theme.dimensions.containerPadding}rem;
  background-color: ${props => props.theme.colors.ui.light};
  border: 1px solid ${props => props.theme.colors.ui.bright};
  border-radius: 4px;
  line-height: ${props => props.theme.dimensions.lineHeight.regular};
`;

const WrapperInner = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PaginationItem = styled('div')`
  &:first-child {
    text-align: left;
  }

  &:last-child {
    text-align: right;
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
  font-size: ${props => props.theme.dimensions.headingSizes.h4}rem;
  color: ${props => props.theme.colors.gray.copy};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  transition: border-color 0.3s ease;

  &:hover,
  &:focus {
    text-decoration: none;
    border-bottom-color: ${props => props.theme.colors.gray.copy};
  }

  @media (min-width: ${breakpoints.sm}px) {
    font-size: ${props => props.theme.dimensions.headingSizes.h3}rem;
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
