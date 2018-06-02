import { injectGlobal } from 'utils/styled';
import { onEvent, getEmSize } from './mixins';
import { breakpoints } from './variables';

import normalize from './normalize';
import theme from './theme';

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  ${normalize}

  // Set up a decent box model on the root element
  html {
    box-sizing: border-box;
  }

  // Make all elements from the DOM inherit from the parent box-sizing
  // Since '*' has a specificity of 0, it does not override the 'html value
  // making all elements inheriting from the root box-sizing value
  // See: https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: ${theme.dimensions.fontSize.regular}px;
    line-height: ${theme.dimensions.lineHeight.regular};

    @media (min-width: ${breakpoints.lg}px) {
      font-size: ${theme.dimensions.fontSize.large}px;
    }
  }

  body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    font-family: ${theme.fonts.sansSerif};
    color: ${theme.colors.gray.copy};
    background-color: ${theme.colors.white};
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  // Set defaults for links
  a {
    color: ${theme.colors.brand};
    text-decoration: none;

    ${onEvent`
      text-decoration: underline;
    `}
  }

  img {
    max-width: 100%;
    object-fit: contain;
    position: relative;
  }

  // Figure elements
  figure {
    margin: 2rem 0;
  }

  figcaption {
    font-size: 80%;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: ${theme.fonts.monospace};
  }

  table {
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid ${theme.colors.gray.calm};
    font-size: 85%;
    border-collapse: collapse;
  }

  td,
  th {
    padding: .25rem .5rem;
    border: 1px solid ${theme.colors.gray.calm};
  }

  th {
    text-align: left;
  }

  tbody {
    tr {
      &:nth-child(odd) {
        td {
          background-color: ${theme.colors.ui.whisper};
        }
        tr {
          background-color: ${theme.colors.ui.whisper};
        }
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1.414rem;
    margin-bottom: 0.5rem;
    color: ${theme.colors.ink};
    font-weight: 600;
    line-height: ${theme.dimensions.lineHeight.heading};
    text-rendering: optimizeLegibility;
  }

  h1 {
    margin-top: 0;
    font-size: ${theme.dimensions.headingSizes.h1}rem;
  }

  h2 {
    font-size: ${theme.dimensions.headingSizes.h2}rem;
  }

  h3 {
    font-size: ${theme.dimensions.headingSizes.h3}rem;
  }

  h4,
  h5,
  h6 {
    font-size: ${theme.dimensions.headingSizes.h4}rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  strong {
    color: ${theme.colors.ink}};
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
      margin-bottom: .5rem;
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
    border-top: 1px solid ${theme.colors.ui.light};
  }

  blockquote {
    margin: 0.8rem 0;
    padding: 0.5rem 1rem;
    border-left: 0.25rem solid ${theme.colors.ui.light};
    color: ${theme.colors.gray.calm};

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

  code {
    padding: 0.25rem 0.5rem;
    font-size: 90%;
    color: ${theme.colors.gray.copy};
    background-color: ${theme.colors.ui.bright};
    border-radius: 3px;
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
`;
