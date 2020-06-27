const router = require("express").Router();
// Import our controllers
const postRoutes = require("./postsController");
const userRoutes = require("./usersController");
const userRoutes = require("./messagesController");
const userRoutes = require("./conversationController");

// Hook up to the router
router.use("/posts", postRoutes);
router.use("/users", userRoutes);
router.use("/messages", userRoutes);
router.use("/conversation", userRoutes);

// Export the router
module.exports = router;
