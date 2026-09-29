import { Model, where } from "sequelize";
import { Review } from "../models/Review.js"
import { getUsuario } from "./usuario.controller.js";

// tweet ´+ info personal
export const getReview = async (req, res) => {
    try{
       const review = await Review.findAll({
        include: {
            model: Usuario,
            as: "usuario",
            attirubutes: ["nomUsuario", "idUsuario", "correoElectronico"],
        }
       });
        return res.json(review); 
    } catch (error){
        return res.sendStatus(500).json({error: error.message});
    }
    
};

export const createReview = async (req, res) => {
    try{
        const newReview = await Review.create(req.body);
        const parentReviewId = newReview.parentReviewId;

        if(parentReviewId != null &&  parentReviewId != undefined){
            const parentReview = await Review.findByPk(parentReviewId);
            if(!parentReview){
                return res.sendStatus(404).json({error: "Review parent not found"})
            }
        }

        return res.json(newReview);
    }catch(error){
        return res.sendStatus(500).json({error: error.message});
    }
    
};

export const updateReview = async (req, res) => {
    try{
        const id = req.params.id;
        const review = await Review.findByPk(id);   
        if(!review){
            return res.sendStatus(404).json({error: "Review not found"})
        }
        await review.update(req.body);
        return res.json(review);
    }catch(error){
        return res.sendStatus(500).json({error: error.message});
    }
};

export const deleteReview = async (req, res) => {
    try{
        const id = req.params.id;
        const review = await Review.findByPk(id);
        if(!review){
            return res.sendStatus(404).json({error: "Review not found"})
        }
        await review.destroy();
        return res.sendStatus(204);
    } catch(error){
        return res.sendStatus(500).json({error: error.message});
    }
};

export const getReviewId = async (req, res) => {
    try{
        const id = req.params.id;
        const review = await Review.findByPk(id);
        if(!review){
            return res.sendStatus(404).json({error: "Review not found"})
        }
        return res.sendStatus(204);
    }catch(error){
        return res.sendStatus(500).json({error: error.message});
    }
};

export const getReviewReplies = async (req, res) => {

    const {id} = req.params.id;

    try{
        const replies = await Review.findAll({
            where: {
                parentReviewId: id,
            },
            order: [["createdAt", "DESC"]],
        });

        return res.json(replies);

    }catch(error){
        return res.sendStatus(500).json({error: error.message});
    }

};
