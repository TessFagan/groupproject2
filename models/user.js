module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {

        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false
        },

        dateCreated: {
            type: DataTypes.DATE,
            // defaultValue: Sequelize.NOW,
            allowNull: false
        },

        userType: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    User.associate = function (models) {
        models.User.hasMany(models.Update);
        models.User.hasMany(models.Network);
    };

    return User;
};
