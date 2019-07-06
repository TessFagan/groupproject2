module.exports = function (sequelize, DataTypes) {
    var Network = sequelize.define("Network", {

        email: {
            type: DataTypes.STRING
        },

        assocAccount: {
            type: DataTypes.STRING
        }

    });

    Network.associate = function (models) {
        models.Network.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });

    };

    return Network;
};