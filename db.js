const Sequelize = require('sequelize')
const db = new Sequelize('shopdb', 'shopuser', 'shoppass', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        min: 0,
        max: 5
    }
})

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const Products = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    manufacturer: Sequelize.STRING,
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }
})

db.sync().then(() => { console.log('DB synced') }).catch((err) => { console.log(err) })

exports = module.exports = {
    User, Products
}
