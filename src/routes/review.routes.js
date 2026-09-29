import { Router } from "express";

import {
    getReview, 
    createReview, 
    updateReview, 
    deleteReview,
    getReviewId,
    getReviewReplies} from "../controller/review.controller.js"

const router = Router();

router.get("/review", getReview);

router.post("/review", createReview);

router.put("/review/:id", updateReview);

router.delete("/review/:id", deleteReview);

router.get("/review/:id", getReviewId);

router.get("/review/:id/replies", getReviewReplies);

export default router;