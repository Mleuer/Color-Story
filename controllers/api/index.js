const router = require("express").Router();
// Import our controllers
const postRoutes = require("./postsController");
const userRoutes = require("./usersController");
const messageRoutes = require("./messagesController");
const conversationRoutes = require("./conversationController");
const likeRoutes = require("./likesController");


// Hook up to the router
router.use("/posts", postRoutes);
router.use("/users", userRoutes);
router.use("/messages", messageRoutes);
router.use("/conversation", conversationRoutes);
router.use("/likes", likeRoutes);


// Export the router
module.exports = router;
