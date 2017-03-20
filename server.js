import express from 'express';
import GraphQLHTTP from 'express-graphql';
import schema from './data/schema3';
const app = express();
const PORT = 8080;
app.use("/GraphQL", GraphQLHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => {
 console.log("Node/Express server for Flux/GraphQL app. listening on port", PORT);
});
