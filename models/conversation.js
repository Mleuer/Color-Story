module.exports = (sequelize, Sequelize) => {
    //Connect with User & Messages 
    const Conversation = sequelize.define("Conversation", {
        //Not sure if we need anything here since it belongs to Messages
        messages: {
            type: Sequelize.STRING
        },
    });

    //Got this set up from a slackoverflow we might want to run it by David to make sure it'll work the way we want it to..
    //conversation has userId
    Conversation.associate = function (models) {
        Conversation.belongsToMany(models.User,
            {
                through: "UserConversation"
            });
    };
    //conversation has messageId
    Conversation.associate = function (models) {
        Conversation.hasMany(models.Messages, {
            foreignKey: {
                allowNull: false,
            },
        });
    };

    return Conversation;
};
