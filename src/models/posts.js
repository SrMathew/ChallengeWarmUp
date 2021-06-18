import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const posts = sequelize.define('posts', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    title: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true,
        validate: {
            notNull:{
                args: true,
                msg: "Title cannot be null"
            },
            notEmpty:{
                args: true,
                msg: "Title cannot be empty"
            }
        }
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    picture: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true,
        validate: {
            notNull:{
                args: true,
                msg: "Picture url cannot be null"
            },
            notEmpty:{
                args: true,
                msg: "Picture url cannot be empty"
            }
        }
    },
    category: {

    }
}, {
    timestamps: true
});

export default posts;