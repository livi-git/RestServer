const config = require('../config.json');
const mysql = require('mysql2/promise');
const { Sequelize, Op } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {

    // create db if it doesn't already exist
    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    //connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql',host:host, port:port });

    //initialize
    db.sqlz = sequelize;
    db.op= Op;
    db.Product = require('../product/product.model')(sequelize);
    db.Category = require('../category/category.model')(sequelize);
    db.Review = require('../review/review.model')(sequelize);
    db.User = require('../user/user.model')(sequelize);
    db.Cart = require('../cart/cart.model')(sequelize);
    db.Brand = require('../brand/brand.model')(sequelize);

    //table realtions
    db.Brand.hasMany(db.Product);
    db.Product.hasMany(db.Review);
    db.Product.hasMany(db.Cart);
    db.User.hasMany(db.Cart);
    db.Review.belongsTo(db.Product);
    db.Cart.belongsTo(db.Product);
    db.Cart.belongsTo(db.User);
    db.Category.hasMany(db.Product);
    db.Product.belongsTo(db.Category);
    db.Product.belongsTo(db.Brand);

    //alter table
    await sequelize.sync({ alter: true });

}