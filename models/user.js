// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");

// Creating our User model
module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define(
    "User",
    {
      // full (real) name
      fullName: {
        type: DataTypes.STRING,
      },
      // The email cannot be null, and must be a proper email before creation
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      // username; validation ensures that it can only have letters (upper/lower) and numbers (0-9)
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [3, 25],
          is: /^[a-zA-Z0-9]*$/i,
        },
      },
      // password; cannot be null and must be at least 8 characters long
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8, 120],
        },
      },
      // user's profile pic taken from a Cloudinary URL
      profilePic: {
        type: DataTypes.STRING,
        validate: {
          isUrl: true,
        },
      },
      // user bio; length limit of 200 characters
      biography: {
        type: DataTypes.TEXT,
        validate: {
          len: [0, 1000],
        },
      },
      userLinks: {
        type: DataTypes.STRING,
        validate: {
          isUrl: true,
        },
      },
      likedPosts: {
        type: DataTypes.STRING,
      },
    },
    {
      // This forces any default 'User' to exclude the password when we query them;
      // this way we don't expose even a hashed password
      defaultScope: {
        attributes: { exclude: ["password"] },
      },
      // If you want to show the password, for whatever reason, we expose with:
      // db.User.scope('withPassword').findAll() etc
      scopes: {
        withPassword: {
          attributes: {},
        },
      },
    }
  );
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  User.associate = function (models) {
    // Associating User with Posts
    // When an User is deleted, also delete any associated Posts
    User.hasMany(models.Post, {
      onDelete: "cascade",
    });
  };
  User.associate = function (models) {
    // Associating User with Posts
    // When an User is deleted, also delete any associated Posts
    User.hasMany(models.Messages, {
      onDelete: "cascade",
    });
  };
  User.associate = function (models) {
    // Associating User with Conversation
    // When an User is deleted, also delete any associated Conversation
    User.belongsToMany(models.Conversation, {
      through: "UserConversation",
      onDelete: "cascade",
    });

    User.hasMany(models.Like);
  };

  return User;
};
