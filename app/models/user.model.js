const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    return sequelize.define("user", {
        name: {
            type: DataTypes.TEXT
        },
        age: {
            type: DataTypes.INTEGER
        },
        weight: {
            type: DataTypes.INTEGER
        },
        height: {
            type: DataTypes.INTEGER
        }
    });
};