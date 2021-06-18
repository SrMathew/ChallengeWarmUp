import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import posts from './posts';

const categories = sequelize.define('categories', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    type: {
        type: Sequelize.TEXT,
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
    },
    postsid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: posts,
            key: 'id'
        }
    }
}, {
    timestamps: true
});

posts.hasMany(categories);
categories.belongsTo(posts);

export default categories;