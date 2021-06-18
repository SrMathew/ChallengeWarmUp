import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const characters = sequelize.define('posts', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    title: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    },
    content: {

    },
    picture: {
        type: Sequelize.BLOB
    },
    category: {

    },
    creationDate: {
        
    }
}, {
    timestamps: false
});