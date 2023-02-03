const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        name:{ type: DataTypes.STRING, allowNull:  true},
        logo:{ type:DataTypes.STRING, allowNull: true},
    };

    

    return sequelize.define('brand', attributes , { timestamps: false});
}