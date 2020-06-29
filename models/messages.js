module.exports = (sequelize, Sequelize) => {
    const Messages = sequelize.define("Messages", {
        text: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        created_at: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updated_at: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }


    });

    //Got this set up from a slackoverflow we might want to run it by David to make sure it'll work the way we want it to..
    //Messages link to many Users and Conversations
    Messages.associate = function (models) {
        Messages.hasMany(models.Conversation,
            {
                sourceKey: 'id',          // message table
                foreignKey: 'message_id'  // recipient table
            }
        );
    };
    Messages.associate = function (models) {
        Messages.belongsToMany(models.User, {
            through: MessageRecipient,
            foreignKey: 'message_id',   // recipient
            otherKey: 'user_id'     // recipient
        });
    };


    return Messages;
};