const express = require("express");
const storyRoute = require("../modules/story/route");

// Setup Variables
const port = 4000;

const server = async () => {
  // Create an express app
  const app = express();

  // Configuration
  app.use(express.urlencoded());
  app.use(express.json());

  // Routes
app.use("/story", storyRoute)

  app.listen(port, () => {
    console.table({
      app: {
        name: "Covid Anchor API ",
        path: `http://localhost:${port}`,
      },
    });
  });
};

module.exports = server;
