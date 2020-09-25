# Spectator Test

A web application for bookmarking articles. Using React, NextJS, TypeScript, Styled Components, and Jest.

## Getting Started

Follow the steps below to get this project running locally.

### Prerequisites

You'll need the following installed on your machine to run this project:

- Node.js (v8.x.x)
- npm (v6.x.x)

### Installation

Clone the repository to somewhere on your drive

```
git clone git@github.com:lukebettridge/spectator-test.git
```

Install the dependencies within the root of the project

```
npm install
```

Create a file named `.env.local` at the root of the project, using the `.env.example` file as a guide

```
cp .env.example .env.local
```

### Running the application

To run the application for local development

```
npm run dev
```

Which can now be viewed in the browser at `https://localhost:3000/`

## Testing

### Unit tests

The Jest JavaScript testing framework is used for unit testing. To run these, execute the following

```
npm run test
```

## Deployment

To build the project run

```
npm run build
```

Then start the project by executing

```
npm run start
```
