# Charle Cantin Website

Charle cantin Site is a photographe Website creating with Next Js and Strapi

![screenshot image](/screenshot.png)
![screenshot image](/screenshot.png2)

## Features

- 2 content type: Category Image, Service fees
- Responsive design using UIKit

Pages: 

- "/" to display the Homepage
- "/galerie" to display a collection of Photos
- "/tarif" to display our Service Fees
- "/contact" to display our Contact Page

## Getting started

### 1. Create a Strapi new project

#### `start`

```sh
npx create-strapi-app@latest my-project
```

[Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html)


#### `develop`

Start  Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop

```

The Strapi backend server will run here => [http://localhost:1337](http://localhost:1337)

### 2. Create a Next Js new project

#### `start`

```sh
npx create-next-app my-project
```

[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


#### `develop`

First, run the development server:

```
npm run dev
# or
yarn dev

```

The Next frontend server will run here => [http://localhost:3000](http://localhost:3000)

### 3. Deploying to production

We deploy the `frontend` and `backend` projects separately. Here are the docs to deploy each one:

- [Deploy Strapi](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment.html#hosting-provider-guides)
- [Deploy Next](https://nextjs.org/docs/deployment)


For the frontend the following environment variable is required: 
- `NEXT_PUBLIC_STRAPI_DOMAIN`: URL of our Strapi backend, without trailing slash


Enjoy !!!