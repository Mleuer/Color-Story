const db = require("../../models");
const router = require("express").Router();
const isAuthenticated = require("../../config/middleware/isAuthenticated");

/*
Get all liked posts for a single user
*/
router.get("/", isAuthenticated, function (req, res) {
  db.Like.findAll({
    where: {
      UserId: req.user.id
    },
    include: [db.User, db.Post]
  })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

router.post("/", isAuthenticated,  function (req, res) {
  if(req.user === null || req.user.id === null){
    res.status(401).json("NOT AUTHORIZED");
  }
  db.Like.findAll({
    where: {
      UserId: req.user.id,
      PostId: req.body.postId
    }})
    .then(dbModel => {
      if(dbModel.length > 0){
        res.status(409).send();
      } else {
        db.Like.create({
          UserId: req.user.id,
          PostId: req.body.postId
        })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
    })
});

/** 
 * Like - Delete
 */
// router.delete("/:id", isAuthenticated, function (req, res) {
//   db.Like.destroy({ where: { id: req.params.id } })
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// });

module.exports = router;
