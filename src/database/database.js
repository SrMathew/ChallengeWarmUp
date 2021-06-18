import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'challenge_db',
    'root',
    'tm191000',
    {
        host: '127.0.0.1',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 1000
        },
        logging: false
    }
);