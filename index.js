/**
 * Set up the Next & Express server.
 * @author Justin Gray (A00426753)
 */
const express = require("express");
const next = require("next");

// @ts-ignore
const app = next({
  dir: "./client",
});
const handle = app.getRequestHandler();
const port = 3384;

app
  .prepare()
  .then(() => {
    const server = express();

    // express middleware function(s)
    server.use(express.json());

    // startup functions
    require("./startup/routes")(server); // setup '/api' routes
    require("./startup/database").connect(); // connect to MongoDB

    // render NextJS react content (generated using 'npm run build')
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    // set the server to listen on the given port
    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
