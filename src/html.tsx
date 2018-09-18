import * as React from 'react';

interface HtmlProps {
  body: string;
  htmlAttributes: Record<string, any>;
  bodyAttributes: Record<string, any>;
  preBodyComponents: React.ReactNodeArray;
  postBodyComponents: React.ReactNodeArray;
  headComponents: React.ReactNodeArray;
}

export default class HTML extends React.Component<HtmlProps> {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
