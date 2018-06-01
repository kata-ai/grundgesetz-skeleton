---
id: installation
title: Installation
prev: about
next: page-one
---

## Prerequisites

* [Node.js](https://nodejs.org/en/) (8.0.0+)
* [Yarn](https://yarnpkg.com) (Optional. You can still use `npm` if you want, but this is for your own sanity.)

## Initializing the Project

Grundgesetz is built on top of [Gatsby](https://www.gatsbjs.org). The best way to set it up is to install `gatsby-cli`. To install it, run the following command.

```bash
# npm
npm install -g gatsby-cli
# yarn
yarn global add gatsby-cli
```

Now we have `gatsby-cli` installed, we can now create a project based on the Grundgesetz skeleton by running:

```bash
gatsby new project-name https://github.com/kata-ai/grundgesetz-skeleton
```

Congratulations, you have now bootstrapped Grundgesetz! The project is generated in your folder of choice (in this case `project-name`).

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
