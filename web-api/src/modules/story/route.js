const express = require("express");

// Importing Handlers
const handleCreateStory = require("./handlers/handleCreateStory");

// Creating a story route
const storyRoute = express.Router();

// Defining Stories Routes
storyRoute.post("/", handleCreateStory);
storyRoute.get("/", (req, res) => res.send("You reached stories"));
storyRoute.get("/:id", (req, res) => res.send("You reached story"));
storyRoute.patch("/:id", (req, res) => res.send("You reached update story"));
storyRoute.delete("/:id", (req, res) => res.send("You reached delete story"));

// Exporting storyRoute
module.exports = storyRoute;
