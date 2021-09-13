module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        name: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.NUMBER
        },
        weight: {
            type: Sequelize.NUMBER
        },
        height: {
            type: Sequelize.NUMBER
        }
    });

    return User;
};