module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    // image using Cloudinary URL
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
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
      allowNull: true,
    },
    // description (500 character limit)
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [0, 1000],
      },
    },
    // user tags
    postTags: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    // user-set price
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: true,
      },
    },
    // number of times other users like a particular post;
    // maybe this should be changed to STRING so that we can record which user(s) like the post...
  });

  Post.associate = function (models) {
    // We're saying that a Post should belong to an User
    // A Post can't be created without an User due to the foreign key constraint
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      },
    });

    Post.hasMany(models.Like);
  };

  return Post;
};
