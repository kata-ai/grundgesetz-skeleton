---
id: deploying
title: Deploying
prev: development-server
next: project-structure
---

The following page contains guides on how to deploy Grundgesetz to any host that you prefer.

## Static Host

If you have a static site host (like Amazon S3) lying around, deploying is really easy. After running `yarn build`, take everything inside the generated `public/` folder and upload them into your static host.

## ZEIT Now

[ZEIT Now](https://zeit.co/now) is a platform for realtime global deployments made by [ZEIT, Inc.](https://zeit.co) It provides a handy `now` CLI tool that will help you upload and host your JavaScript, Docker, or even static apps, as well as scaling your apps automatically.

By default, `now` runs the `build` script in your `package.json` after deploying. Then it will run the `start` script to start whatever service you hooked up to it. This is where [serve](https://github.com/zeit/serve) comes in.

`serve` is a tiny CLI for static file + directory hosting. By default, the skeleton includes the following scripts:

```json
{
  "scripts": {
    "build": "gatsby build",
    "start": "serve public"
  }
}
```

Since `now` runs the `build` and `start` scripts in order, it will run Gatsby's usual build task on the server, and serves it up from the directory where Gatsby builds into.

## Still to come

We're still working on creating deployment guides for the following platforms. Watch this space for more, or if you know how to do that already, don't hesitate to [create a pull request](https://github.com/kata-ai/grundgesetz-skeleton).

- [Netlify](https://www.netlify.com)
