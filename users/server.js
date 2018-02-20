const express = require('express'),
      expressGraphQL = require('express-graphql'),
      schema = require('./schema/schema')
      app = express();

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

let port = 4000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});