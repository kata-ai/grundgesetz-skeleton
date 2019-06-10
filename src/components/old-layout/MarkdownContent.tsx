import React from 'react';
import { styledWrapper as styled, breakpoints } from 'utils';

interface MarkdownContentProps {
  className?: string;
  html: string;
}

const MarkdownContent: React.SFC<MarkdownContentProps> = ({ className, html }) => (
  <section className={className} dangerouslySetInnerHTML={{ __html: html }} />
);

export default styled(MarkdownContent)`
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

    @media (min-width: ${breakpoints.md}) {
      font-size: 1.5rem;
    }
  }
`;
