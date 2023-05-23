import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Convertion = sequelize.define('convertions', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    monto_origen: {
        type: DataTypes.DOUBLE,
    },
    fecha_conversion: {
        type: DataTypes.DATE,
    },
    valor_moneda: {
        type: DataTypes.DOUBLE
    },
    monto_conversion: {
        type: DataTypes.INTEGER
    }
});