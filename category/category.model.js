const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        category:{ type:DataTypes.STRING, allowNull: true},
    };

    

    return sequelize.define('category', attributes , { timestamps: false});
}