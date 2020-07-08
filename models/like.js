module.exports = function (sequelize, DataTypes) {
  const Like = sequelize.define("Like");

  Like.associate = function(models) {
    Like.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Like.belongsTo(models.Post, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Like;
};
