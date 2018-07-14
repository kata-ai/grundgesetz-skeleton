import React from 'react';
import styled from 'utils/styled';
import Container from './Container';
import { breakpoints } from 'styles/variables';

const Wrapper = styled('footer')`
  margin-top: ${props => props.theme.dimensions.containerPadding * 2}rem;
  padding: ${props => props.theme.dimensions.containerPadding}rem 0;
  border-top: 1px solid ${props => props.theme.colors.border};

  p {
    margin: 0;
  }

  @media (max-width: ${breakpoints.lg - 1}px) {
    padding-bottom: 5rem;
  }
`;

const Footer: React.SFC = () => (
  <Wrapper>
    <Container>
      <p>
        <small>
          Created with{' '}
          <a
            href="https://github.com/kata-ai/grundgesetz-skeleton"
            target="_blank"
            rel="noopener noreferrer"
          >
            Grundgesetz
          </a>.
        </small>
      </p>
    </Container>
  </Wrapper>
);

export default Footer;
