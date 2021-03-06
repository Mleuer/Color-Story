
module.exports = (sequelize, DataTypes) => {
    const Messages = sequelize.define("Messages", {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false
        }


    });

    //Got this set up from a slackoverflow we might want to run it by David to make sure it'll work the way we want it to..
    //Messages link to many Users and Conversations
    Messages.associate = function (models) {
        Messages.belongsTo(models.Conversation,
        );
    };
    Messages.associate = function (models) {
        Messages.belongsTo(models.User, {
        });
    };


    return Messages;
};