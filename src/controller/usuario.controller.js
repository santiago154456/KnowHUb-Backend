import { where } from "sequelize";
import { Usuario } from "../models.Usuario.js"


export const getUsuario = async (req, res) => {
    try{
       const usuario = await Usuario.findAll();
        return res.json(usuario); 
    } catch (error){
        return res.sendStatus(500).json({error: error.message});
    }
    
};

export const createUsuario = async (req, res) => {
    try{
        const newUsuario = await Usuario.create(req.body);
        return res.json(newUsuario);
    }catch(error){
        return res.sendStatus(500).json({error: error.message});
    }
    
};

export const updateUsuario = async (req, res) => {
    try {
        const id = req.params.id;

        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            return res.status(404).json({  error: "Usuario no found" });
        }

        await usuario.update(req.body);

        return res.json(usuario);

    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

export const deleteUsuario = async (req, res) => {
    try{
        const id = req.params.id;
        const usuario = await Usuario.findByPk(id);
        await usuario.destroy();
        return res.sendStatus(204);
    } catch(error){
        return res.sendStatus(500).json({error: error.message});
    }
    
};

export const getUsuarioReview = async (req, res) => {
    const id = req.params.id;

    try{
        const review = await Review.findAll({
            where: {
                userId: id,
            },
            include: {
                model: Usuario,
                as: "usuario",
                attributes: ["nomUsuario","idUsuario"],
            },
        });

    }catch(error){
        return res.sendStatus(500).json({error: error.message});
    }
};

