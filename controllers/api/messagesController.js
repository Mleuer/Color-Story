const db = require("../../models");
const router = require("express").Router();
const isAuthenticated = require("../../config/middleware/isAuthenticated");

/**
 * Messages Read - All
 */
router.get("/", isAuthenticated, function (req, res) {
    db.Messages.findAll(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Messages Read - One
 */
router.get("/:id", isAuthenticated, function (req, res) {
    db.Messages.findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Messages - Create
 * Notice how we are using the 'withPassword' scope.
 * This allows for us to modify a Messages's password, as defined in the Messages model
 */
router.post("/", function (req, res) {
    db.Messages.scope("withPassword")
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Messages - Update
 */
router.put("/:id", isAuthenticated, function (req, res) {
    db.Messages.update(req.body, { where: { id: req.params.id } })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/** 
 * Messages - Delete
 */
router.delete("/:id", isAuthenticated, function (req, res) {
    db.Messages.destroy({ where: { id: req.params.id } })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

module.exports = router;
