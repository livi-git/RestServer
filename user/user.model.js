const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        username:{ type: DataTypes.STRING, allowNull:  true},
        password:{ type:DataTypes.STRING, allowNull: true},
    };

    

    return sequelize.define('user', attributes , { timestamps: false});
}