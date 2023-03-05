import express, { Application } from 'express';
import { Sequelize } from 'sequelize';
import userRouter from '../routes/usuario';
import cors from 'cors';
import db from '../db/connection';

class Server{

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }


    constructor(){
        this.app = express();
        this.port= process.env.PORT || '8000';
        /* this.db= process.env.DB || 'postgres://postgres:example@127.0.0.1:5432/node' */

        //Metodos iniciales
        //conexion BD
        this.dbConnection();
        this.middlewares();
        this.routes();



    }
    async dbConnection(){
        
        try {
            await db.authenticate();
            console.log('BD connect!');
            await db.sync();
            console.log("All models were synchronized successfully.")
          } catch (error) {
            throw new Error(error);
            
          }
    }

    middlewares(){

        //CORS
        this.app.use( cors() );

        //Lectura del body
        this.app.use( express.json() );

        //Carpeta publica
        this.app.use( express.static('public'));
    }

    routes(){
        this.app.use(this.apiPaths.usuarios, userRouter );
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en puerto!: ', this.port);
        })
    }
}

export default Server;