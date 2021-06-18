import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'challenge_db',
    'root',
    'Tm191000',
    {
        host: 'localhost',
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