import React from 'react';
import styled from 'utils/styled';
import { breakpoints } from 'styles/variables';

interface MarkdownContentProps {
  className?: string;
  html: string;
}

const MarkdownContent: React.SFC<MarkdownContentProps> = ({ className, html }) => (
  <section className={className} dangerouslySetInnerHTML={{ __html: html }} />
);

export default styled(MarkdownContent)`
  font-size: ${props => props.theme.dimensions.fontSize.regular}px;
  line-height: ${props => props.theme.dimensions.lineHeight.regular};

  @media (min-width: ${breakpoints.lg}px) {
    font-size: ${props => props.theme.dimensions.fontSize.large}px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1.414rem;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.ink};
    font-weight: 600;
    line-height: ${props => props.theme.dimensions.lineHeight.heading};
    text-rendering: optimizeLegibility;
  }

  h1 {
    margin-top: 0;
    font-size: ${props => props.theme.dimensions.headingSizes.h1}rem;
  }

  h2 {
    font-size: ${props => props.theme.dimensions.headingSizes.h2}rem;
  }

  h3 {
    font-size: ${props => props.theme.dimensions.headingSizes.h3}rem;
  }

  h4,
  h5,
  h6 {
    font-size: ${props => props.theme.dimensions.headingSizes.h4}rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  strong {
    color: ${props => props.theme.colors.ink}};
  }

  ul,
  ol,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ul {
    padding-left: 1.45rem;

    li {
      padding-left: 0;
      margin-bottom: 0.5rem;
    }
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-bottom: 0.5rem;
  }

  hr {
    position: relative;
    margin: 1.5rem 0;
    border: 0;
    border-top: 1px solid ${props => props.theme.colors.ui.light};
  }

  blockquote {
    margin: 0.8rem 0;
    padding: 0.5rem 1rem;
    border-left: 0.25rem solid ${props => props.theme.colors.ui.light};
    color: ${props => props.theme.colors.gray.calm};

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }

    @media (min-width: ${breakpoints.md}) {
      padding-right: 5rem;
      padding-left: 1.25rem;
    }
  }
  li + li {
    margin-top: 0.25rem;
  }

  .gatsby-highlight {
    margin: 1rem 0;
    font-size: 90%;
  }

  code,
  pre {
    white-space: pre-wrap;
    word-break: break-word;
  }

  code {
    font-size: 80%;
    white-space: pre-wrap;
  }

  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow-x: auto;
  }

  pre code {
    padding: 0;
    font-size: 90%;
    color: inherit;
    background-color: transparent;
  }

  a[href^='#fn-'],
  a[href^='#fnref-'] {
    display: inline-block;
    margin-left: 0.1rem;
    font-weight: bold;
  }

  .footnotes {
    margin-top: 2rem;
    font-size: 85%;
    li[id^='fn-'] {
      p {
        // Remark for some reason puts the footnote reflink *after* the 'p' tag.
        display: inline;
      }
    }
  }

  .lead {
    font-size: 1.25rem;
    font-weight: 300;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: 1.5rem;
    }
  }
`;
