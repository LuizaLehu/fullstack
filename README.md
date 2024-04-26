This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It is a fullstack CRUD application. This application allow viewing and managing a list of "entries", representing a user session navigation data collected by a network appliance.

## Getting Started

First, run the development server:

```bash
npm run all
# or
yarn all
# or
pnpm all
# or
bun all
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## API Documentation

Your project uses a RESTful API endpoint. You can find the API documentation in the data.json file and in repository.ts. It includes information about the endpoints, their functionality, and examples of requests and responses.

## Frontend Structure

The frontend codebase is structured as follows:

Pages: Contains Next.js page components.

Components: Reusable React components used throughout the application.

For the FORM there are used two React form libraries: the Formik and Yup packages.

Formik is a React/React Native package used for handling forms; it keeps track of form values, errors, and events, and handles form submissions.

Yup is a JavaScript schema builder for validating or parsing values. It allows you to model complex or inter-dependent validations using built-in validators or custom validations using regular expressions.

Styles: Contains global styles and utility classes.
For styles it is used Bootstrap library and Tailwind CSS.

## Backend Structure:

Data Storage: Instead of a traditional database or API routes, our backend utilizes a JSON file to store and manage data. This JSON file serves as a simple data repository, allowing for straightforward data storage and retrieval.

## JSON File Structure:

The JSON file contains structured data representing various entities within the application. Each entity is typically represented as an object within the JSON file, with key-value pairs defining its attributes.

## Operations:

- Read: Data is directly read from the JSON file by parsing it based on the application's logic.
- Write: Data modifications, such as adding, updating, or deleting, are directly made to the JSON file.

## Benefits:

Simplicity: Using a JSON file simplifies the backend architecture, avoiding the need for complex database systems or API route handling.
Flexibility: JSON allows for easy manipulation of data, suitable for small-scale applications or rapid prototyping.
Low Overhead: There's minimal overhead without the need for additional server-side frameworks or middleware.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# fullstack
