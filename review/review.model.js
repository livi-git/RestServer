const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        stars:{ type: DataTypes.STRING, allowNull:  true},
        review:{ type:DataTypes.STRING, allowNull: true},
    };

    

    return sequelize.define('review', attributes , { timestamps: false});
}