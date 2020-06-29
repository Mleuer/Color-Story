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
        Conversation.belongsTo(models.User,
            {
                foreignKey: 'user_id',    // recipient
                otherKey: 'id'              // user
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
