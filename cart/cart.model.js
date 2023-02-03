const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        total:{ type: DataTypes.DOUBLE, allowNull:  true},
        count:{ type:DataTypes.INTEGER, allowNull: true},
    };

    

    return sequelize.define('cart', attributes , { timestamps: false});
}