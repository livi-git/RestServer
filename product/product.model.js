const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        name:{ type:DataTypes.STRING, allowNull: true},
        description:{ type:DataTypes.STRING, allowNull: true},
        offer:{ type:DataTypes.DOUBLE, allowNull: true},
        stars:{ type:DataTypes.INTEGER, allowNull: true},
        imageURL:{ type: DataTypes.STRING, allowNull: true},
        identifier:{ type:DataTypes.STRING, allowNull: true},
        price:{ type: DataTypes.STRING, allowNull: true},
        bestseller:{ type: DataTypes.INTEGER, allowNull: true}
    };

    

    return sequelize.define('product', attributes , { timestamps: false});
}