# Project Title

A brief description of your project.

## Table of Contents

-  [Installation](#installation)
   -  [Prerequisites](#prerequisites)
   -  [Installing pnpm](#installing-pnpm)
-  [Setup](#setup)
   -  [Cloning the Repository](#cloning-the-repository)
   -  [Installing Dependencies](#installing-dependencies)
-  [Running the Project](#running-the-project)
-  [Building the Project](#building-the-project)
-  [Checking Node Modules](#checking-node-modules)
-  [Deployment](#deployment)

## Installation

### Prerequisites

Ensure you have the following installed:

-  [Node.js](https://nodejs.org/) (version 14 or later)
-  [pnpm](https://pnpm.io/) package manager

### Installing pnpm

If you do not have `pnpm` installed, you can install it using the following command:

```sh
npm install -g pnpm
```

Alternatively, you can use other package managers like npm or yarn to install pnpm:

```sh
yarn global add pnpm
```

### Setup

Clone the repository

```sh
git clone https://github.com/Aniket-216/responsive-ui-replication.git
```

Navigate to the project directory

```sh
cd your-repository
```

Installing Dependencies

```sh
pnpm install
```

## Running the Project

start the project in development mode

```sh
pnpm dev
```

This will start the project in development mode at `http://localhost:3000`

## Building the Project

To create a production build of the project, run the following command:

```sh
pnpm build
```

## Checking Node Modules

If you need to check the installed node modules, you can list them using:

```sh
pnpm list
```

For more detailed information about a specific module, use:

```sh
pnpm list <module_name>
```

## Deployment

[text](https://responsive-ui-replication.vercel.app/)
The project is deployed on Vercel. You can visit the live version here.
