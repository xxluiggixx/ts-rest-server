import { DataTypes } from 'sequelize';
import db from '../db/connection';

const User = db.define('User',{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    state:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
})


export default User;
/* class User extends Model {

} */