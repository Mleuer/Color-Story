const db = require("../../models");
const router = require("express").Router();
const isAuthenticated = require("../../config/middleware/isAuthenticated");

/**
 * Conversation Read - All
 */
router.get("/", isAuthenticated, function (req, res) {
    db.Conversation.findAll(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Conversation Read - One
 */
router.get("/:id", isAuthenticated, function (req, res) {
    db.Conversation.findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Conversation - Create
 * Notice how we are using the 'withPassword' scope.
 * This allows for us to modify a Conversation's password, as defined in the Conversation model
 */
router.post("/", function (req, res) {
    db.Conversation.scope("withPassword")
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Conversation - Update
 */
router.put("/:id", isAuthenticated, function (req, res) {
    db.Conversation.update(req.body, { where: { id: req.params.id } })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/** 
 * Conversation - Delete
 */
router.delete("/:id", isAuthenticated, function (req, res) {
    db.Conversation.destroy({ where: { id: req.params.id } })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

module.exports = router;
