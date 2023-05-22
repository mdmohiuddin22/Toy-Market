/* eslint-disable react/no-unescaped-entities */


const Blog = () => {
    return (
        <div>
            <h1 className="text-center text-4xl text-lime-500 font-extrabold">
                Questions & Answers
            </h1>
          <table className="border-separate border border-slate-400 ... border-x-green-700 w-screen m-10 rounded-md">
  <thead>
    <tr>
      <th className="border border-slate-300 ...">1st Question: What is an access token and refresh token? How do they work and where should we store them on the client-side?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-slate-300 ...">
       <span className="text-lg font-bold"> Answer:</span> <br /> Access Token: An access token is a credential that is used to authenticate and authorize a user's access to specific resources or APIs. It is typically issued by an authentication server (such as OAuth or OpenID Connect) after the user successfully authenticates. The access token contains information about the user and their permissions, and it has a limited lifespan or expiration time. It is commonly sent with each request to the server's protected resources to prove the user's authorization.
      <br />

Refresh Token: A refresh token is a long-lived credential that is used to obtain a new access token when the current one expires. It is usually issued alongside an access token during the authentication process. While the access token is short-lived, the refresh token can be valid for a longer duration. When the access token expires, the client can use the refresh token to request a new access token from the authentication server, without requiring the user to reauthenticate.</td>
    </tr>
   

  </tbody>
  <thead>
    <tr>
      <th className="border border-slate-300 ...">2nd Question: Compare SQL and NoSQL databases?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-slate-300 ...">
       <span className="text-lg font-bold"> Answer:</span> <br />SQL Databases:

Data Model: SQL databases follow a rigid, predefined schema that enforces a structure on the data. They use tables with rows and columns to store and organize data, following the relational model.
Query Language: SQL databases use the SQL language for defining and manipulating the data. It provides a standardized syntax for querying, inserting, updating, and deleting data.
Schema Alterations: SQL databases require a predefined schema, which means any changes to the schema often involve altering the structure of existing tables and migrating the data accordingly.
ACID Transactions: SQL databases emphasize strong consistency and ACID (Atomicity, Consistency, Isolation, Durability) properties. They provide strict transactional guarantees, ensuring data integrity and reliability.
Scalability: SQL databases typically scale vertically by adding more powerful hardware to handle increased workload. They can handle complex relationships between data but may face challenges in scaling horizontally across multiple machines.
<br />
NoSQL Databases:

Data Model: NoSQL databases provide flexible schema options, allowing for dynamic and schema-less data structures. They support various data models, including key-value, document, columnar, and graph.
Query Language: NoSQL databases often have their own query languages or APIs for data manipulation. While some support SQL-like querying, the syntax and capabilities may differ significantly from SQL.
Schema Flexibility: NoSQL databases offer dynamic schemas, enabling easy addition, modification, and removal of data fields without requiring schema migrations.
CAP Theorem and Trade-offs: NoSQL databases prioritize availability and partition tolerance over strict consistency, following the CAP (Consistency, Availability, Partition tolerance) theorem. They make trade-offs to handle large-scale distributed systems and provide eventual consistency.
Scalability: NoSQL databases are designed for horizontal scalability, allowing them to distribute data across multiple servers and handle large-scale data volumes and high traffic loads. They excel at scaling horizontally by adding more commodity servers.</td>
    </tr>
   

  </tbody>
  <thead>
    <tr>
      <th className="border border-slate-300 ...">3rd Question: What is express js? What is Nest JS?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-slate-300 ...">
       <span className="text-lg font-bold"> Answer:</span> <br /> Express.js is a popular and widely used web application framework for Node.js. It provides a minimalistic and flexible set of features for building web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, middleware integration, and view rendering. It follows the middleware pattern, allowing developers to create modular and reusable components that handle specific tasks in the request-response cycle.

Key features of Express.js include:

Routing: Express.js enables the definition of routes to handle different HTTP methods (GET, POST, PUT, DELETE, etc.) and URLs. It allows developers to map specific routes to corresponding handler functions, making it easy to define the application's behavior for different routes.

Middleware: Express.js makes extensive use of middleware functions. Middleware functions can intercept and process incoming requests and outgoing responses. They provide a way to add functionality to the application, such as logging, authentication, data parsing, error handling, etc.

Template Engines: Express.js supports various template engines, such as EJS, Handlebars, Pug (formerly Jade), etc., which enable the rendering of dynamic views on the server-side. These template engines help generate HTML responses based on provided data.

Middleware Ecosystem: Express.js has a large and vibrant ecosystem of middleware modules that can be easily integrated into applications. These modules extend the functionality of Express.js, offering features like session management, authentication strategies, API rate limiting, caching, and more.

Nest.js, on the other hand, is a progressive and opinionated framework for building efficient, scalable, and maintainable server-side applications. It is built on top of Express.js and leverages TypeScript, which brings strong typing and modern language features to Node.js development.

Key features of Nest.js include:

Modular Architecture: Nest.js promotes a modular structure for building applications, dividing the codebase into modules, controllers, and services. This architectural pattern makes the code more organized, reusable, and easier to test.

Dependency Injection: Nest.js provides a built-in dependency injection (DI) system, making it easier to manage and inject dependencies into controllers, services, and other components. DI helps with decoupling and promotes code maintainability.

Decorators and Metadata: Nest.js uses decorators and metadata extensively. Decorators are used to define routes, middleware, and other metadata for the application's components. They simplify the configuration and allow developers to define the behavior of components declaratively.

Support for WebSockets: Nest.js has built-in support for WebSockets, allowing real-time bidirectional communication between the client and server. It provides an integrated WebSocket gateway that simplifies WebSocket handling in the application.

Testing Support: Nest.js has a comprehensive testing module that provides utilities and tools for testing applications and components. It supports unit testing, integration testing, and end-to-end testing with various testing frameworks.

Nest.js aims to provide a structured and scalable approach to building Node.js applications while leveraging the power of modern JavaScript (TypeScript) and the expressiveness of decorators. It is well-suited for large-scale applications and teams that value maintainability and testability.</td>
    </tr>
   

  </tbody>
  <thead>
    <tr>
      <th className="border border-slate-300 ...">4th Question:  What is MongoDB aggregate and how does it work?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-slate-300 ...">
       <span className="text-lg font-bold"> Answer:</span> <br /> In MongoDB, the aggregate function is a powerful tool that allows you to perform advanced data processing and analysis operations on the documents stored in a collection. The aggregate function operates on a collection and takes an array of stages as input. Each stage defines a specific operation to be performed on the documents.

Here's an overview of how the MongoDB aggregate function works:

Pipeline Stages: The aggregate function takes an array of stages as its argument. Each stage represents a step in the data processing pipeline and defines an operation to be performed on the documents.

Data Transformation: The documents from the collection are passed through each stage of the pipeline sequentially. Each stage transforms the input documents based on the specified operation, and the transformed result is passed to the next stage.

Operators and Expressions: MongoDB provides a rich set of operators and expressions that you can use within the pipeline stages to perform various data transformations, filtering, grouping, sorting, and more. Some common operators include $match, $group, $sort, $project, $limit, $skip, $unwind, $lookup, and $addFields.

Document Grouping and Aggregation: The $group stage is commonly used to group documents based on specified criteria, such as a field value or an expression. Within the $group stage, you can use various aggregation operators (e.g., $sum, $avg, $min, $max) to perform calculations and aggregations on the grouped documents.

Result Output: The final stage in the pipeline typically uses the $project operator to shape the output documents and include or exclude specific fields as needed. The result of the aggregate operation is a set of transformed and aggregated documents that match the pipeline criteria.</td>
    </tr>
   

  </tbody>
</table>
        </div>
    );
};

export default Blog;