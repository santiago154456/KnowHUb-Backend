import { Asignatura } from "../models/Asignatura.js"
import { Review } from "../models/Review.js"
import { Usuario } from "../models/Usuario.js";


export const getAsignatura = async (req, res) => {
    try{
       const asignatura = await Asignatura.findAll();
        return res.json(asignatura); 
    } catch (error){
        return res.sendStatus(500).json({error: error.message});
    }
    
};


export const getAsignaturaById = async (req, res) => {
    try{
        const id = req.params.id;
        const asignatura = await Asignatura.findByPk(id);
        if(!asignatura){
            return res.status(404).json({error: "Asignatura not found"});
        }
        return res.json(asignatura);
    } catch(error){
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

export const getAsignaturaReview = async (req, res) => {
    const id = req.params.id;

    try{
        const review = await Review.findAll({
            where: {
                idAsignatura: id,
            },
            include: [
                {
                    model: Usuario,
                    as: "usuario",
                    attributes: ["idUsuario", "nomUsuario", "fotoPerfil"],
                },
                {
                    model: Asignatura,
                    as: "asignatura",
                    attributes: ["idAsignatura", "nomAsignatura", "idUniversidad"],
                },
            ],
        });
        return res.json(review);

    }catch(error){
        return res.status(500).json({error: error.message});
    }
};
