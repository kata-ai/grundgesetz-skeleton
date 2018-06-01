---
id: installation
title: Installation
next: development-server
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

Congratulations, you have now bootstrapped Grundgesetz!

The project is generated in your folder of choice (in this case `project-name`). In the next section, we will start writing our documentation on-the-fly with the development server.
