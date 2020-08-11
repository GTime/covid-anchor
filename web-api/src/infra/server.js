const express = require("express");

// Setup Variables
const port = 4000;

const server = async () => {
  // Create an express app
  const app = express();

  // Routes
  app.post("/story", (req, res) => {
    res.send(`
    <h1>Hey, story here</h1>
    <video controls></video>
    `);
  });

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
