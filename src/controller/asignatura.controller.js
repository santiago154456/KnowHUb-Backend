import { where } from "sequelize";
import { Asignatura } from "../models.Asignatura.js"


export const getAsignatura = async (req, res) => {
    try{
       const asignatura = await Asignatura.findAll();
        return res.json(asignatura); 
    } catch (error){
        return res.sendStatus(500).json({error: error.message});
    }
    
};

export const createAsignatura = async (req, res) => {
    try{
        const newAsignatura = await Asignatura.create(req.body);
        return res.json(newAsignatura);
    }catch(error){
        return res.sendStatus(500).json({error: error.message});
    }
    
};

export const updateAsignatura = async (req, res) => {
    try {
        const id = req.params.id;

        const asignatura = await Asignatura.findByPk(id);

        if (!asignatura) {
            return res.status(404).json({  error: "Asignatura no found" });
        }

        await asignatura.update(req.body);

        return res.json(asignatura);

    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

export const deleteAsignatura = async (req, res) => {
    try{
        const id = req.params.id;
        const asignatura = await Asignatura.findByPk(id);
        await asignatura.destroy();
        return res.sendStatus(204);
    } catch(error){
        return res.sendStatus(500).json({error: error.message});
    }
    
};


