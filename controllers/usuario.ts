import { Request, Response } from "express";
import User from "../models/User";



export const getUsuarios = async (req: Request, res: Response) =>{
    const data = await User.findAll();
    res.json({
        msg:'getUsuarios',
        data
    })
}
export const getUsuario = async (req: Request, res: Response) =>{
    let { id } = req.params;
    
    const usuario = await User.findByPk(id);
    if(!usuario){
        res.status(404).json({
            msg: 'User not found'
        })
    }
    res.json({
        msg:'getUsuario',
        usuario
    })
}
export const postUsuario = async (req: Request, res: Response) =>{
    const { body } = req;
    try {
        const data = await User.create(body);
        res.json({
            msg:'postUsuario',
            data
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Contact to administrator'
        })
    }
}
export const putUsuario = (req: Request, res: Response) =>{
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg:'putUsuario',
        body,
        id
    })
}
export const deleteUsuario = (req: Request, res: Response) =>{

    const { id } = req.params;

    res.json({
        msg:'deleteUsuario',
        id
    })
}