import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema.js";

(await import("dotenv")).config();
const port = process.env.port || 5000;

const app = express();
app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "dev"
}));

app.listen(port, () => console.log(`Server running on port: ${port}`));