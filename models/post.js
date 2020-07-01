module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    // image using Cloudinary URL
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      isUrl: true,
    },
    // image title (up to 25 characters)
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25],
      },
    },
    // color category from user selection
    colorCategory: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // links array
    postLink: {
      type: DataTypes.STRING,
      isUrl: true,
    },
    // description (500 character limit)
    description: {
      type: DataTypes.TEXT,
      len: [1, 500],
    },
    // user tags
    postTags: {
      type: DataTypes.STRING,
    },
    // user-set price
    price: {
      type: DataTypes.INTEGER,
      isInt: true,
    },
  });

  Post.associate = function (models) {
    // We're saying that a Post should belong to an User
    // A Post can't be created without an User due to the foreign key constraint
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Post;
};
