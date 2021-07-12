const {sequelize, DataTypes, Model} = require('./db');
const {Menu} = require('./Menu');
const {Restaurant} = require('./Restaurant');
const {MenuItem} = require('./menuitem');





Menu.belongsTo(Restaurant)
Restaurant.hasMany(Menu)

MenuItem.belongsTo(Menu)
Menu.hasMany(MenuItem)



module.exports = { Restaurant, Menu, MenuItem };
