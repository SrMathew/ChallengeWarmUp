import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const categories = sequelize.define('categories', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    type: {
        ype: Sequelize.TEXT,
        allowNull: false,
        unique: true,
        validate: {
            notNull:{
                args: true,
                msg: "Type cannot be null"
            },
            notEmpty:{
                args: true,
                msg: "Type cannot be empty"
            }
        }
    }
}, {
    timestamps: true
});

export default categories;