module.exports = function (sequelize, DataTypes) {
    var Update = sequelize.define("Update", {

        email: {
            type: DataTypes.STRING,
            allowNull: false
        },

        timeframe: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        currentAverage: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        currentDay: {
            type: DataTypes.INTEGER
        },

        nextPredictedDateOne: {
            type: DataTypes.DATE
        },

        actualDateOne: {
            type: DataTypes.DATE
        },

        actualLastDate: {
            type: DataTypes.DATE
        }

    });

    Update.associate = function (models) {
        models.Update.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    };

    return Update;

};
