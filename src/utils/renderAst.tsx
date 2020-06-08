/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react';
import RehypeReact from 'rehype-react';
import { h1, h2, h3, h4, h5, h6, p, ul, li, table } from 'components/page/Markdown/MarkdownComponents';

export interface ComponentMap {
  [key: string]: React.ComponentType<any>;
}

function renderAst(markdownAst: any, additionalComponents: ComponentMap = {}): any {
  const rehype = new RehypeReact({
    createElement: React.createElement,
    components: {
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      ul,
      li,
      table,
      ...additionalComponents,
    },
  });
  return rehype.Compiler(markdownAst);
}

export default renderAst;
