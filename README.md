# grundgesetz-skeleton

> You have a documentation. I turn them into a website. Any questions?

Welcome to Grundgesetz. It's a skeleton for generating accessible documentation pages built on top of [Gatsby](https://www.gatsbyjs.org). It creates static pages from your Markdown documentation files, all prettily formatted with a easy-to-use layout.

Grundgesetz is initially built to solve internal issues in managing documentation for our products at [Kata.ai](https://kata.ai/), but at the same we also found out that it's a good base for quickly deploying a documentation site online, so we put this up for everyone to use.

### Just Your Docs

Grundgesetz is set up for you to get up and running straight away. All your docs are written in Markdown and go inside the `/docs` folder. The table of contents is managed through a JSON file.

It will generate permalinks based on the directory tree, but you can override it anytime by setting a `permalink` frontmatter.

### Instantly Deployable

Have an instance of Grundgesetz set up on GitHub? You can easily deploy it using the built-in `deploy` task. You can also set up a continuous deployment pipeline for hosting providers like [Netlify](https://www.netlify.com/).

### Blazing Fast

Grundgesetz is built on top of [Gatsby](https://www.gatsbyjs.org), a blazing-fast static site generator for React. It takes your React components and Markdown files and builds an optimised static website which can be easily deployed on many static site hosts.

---

## Geting Started

Install this starter (assuming you have `gatsby-cli` installed) by running the following command:

```bash
gatsby new project-name https://github.com/kata-ai/grundgesetz-skeleton
```

## Developing

A nodejs >= 6.0.0 setup with [yarn](https://yarnpkg.com/) is recommended.

```bash
# install dependencies
yarn

# ...or, for npm
npm install

# serve with hot reload at localhost:8000
npm start

# build for production
npm run build

# build for production and push to gh-pages branch
npm run deploy
```

## Credits

Built with [Gatsby](https://www.gatsbyjs.org/) - the blazing-fast static site generator for [React](https://facebook.github.io/react/).

## Authors

* Resi Respati ([@resir014](https://twitter.com/resir014)) – [Kata.ai](https://kata.ai)
