import express from "express";

const router = express.Router();

router.get("/boom", (req, res, next) => {
    next(new Error("boom"));
});

export default router;