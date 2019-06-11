---
id: installation
title: Installation
next: development-server
---

## Prerequisites

Grundgesetz is built on top of [Gatsby](https://www.gatsbjs.org). To run all the tools required you need at least the following:

- [Node.js](https://nodejs.org/en/) (8.0.0+)
- [Yarn](https://yarnpkg.com) (Optional. You can still use `npm` if you want, but this is for your own sanity.)

## Initializing the Project

### The Fast Way

You can now create a new repository with Grundgesetz included by going to the GitHub page clicking on the "Use this template" button on the top right.

![use-template](/img/use-template.png)

This will take you to the Create Repository screen. Fill in the details of your projects, and click "Create repository from template".

![new-repo-from-template](/img/new-repo-from-template.png)

Once the repository is created, you can [clone the repository](https://help.github.com/en/articles/cloning-a-repository) and open your terminal in the repository's folder. Once you're there, install the dependencies by running `yarn` (or `npm install`, if you prefer to use npm).

### Using Gatsby CLI

Alternatively, you can bootstrap your project using `gatsby-cli`. To install it, run the following command.

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

The project is generated in the folder with the `project-name` you specified. In the next section, we will start writing our documentation on-the-fly with the development server.
