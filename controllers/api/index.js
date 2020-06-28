const router = require("express").Router();
// Import our controllers
const postRoutes = require("./postsController");
const userRoutes = require("./usersController");
const messageRoutes = require("./messagesController");
const conversationRoutes = require("./conversationController");

// Hook up to the router
router.use("/posts", postRoutes);
router.use("/users", userRoutes);
router.use("/messages", messageRoutes);
router.use("/conversation", conversationRoutes);

// Export the router
module.exports = router;
