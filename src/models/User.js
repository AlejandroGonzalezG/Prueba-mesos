import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Convertion } from "./Conversion.js";

export const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.ENUM('User', 'Admin'),
        defaultValue: 'User'
    }
}, {
    timestamps: false
});

User.hasMany(Convertion, {
    foreingKey: 'userId',
    sourceKey: 'id'
})

Convertion.belongsTo(User, {
    foreingKey: 'userId',
    targetId: 'id'
})