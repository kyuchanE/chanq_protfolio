import type { Request, Response, NextFunction } from "express";

const errorHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error!!!" });
};

export default errorHandler

//   export default function errorHandler(err, req, res, next) {
//     const status = err.status || err.statusCode || 500;
//     const message = err.message || "Internal Server Error";

//     const payload = { message };
//     if (process.env.NODE_ENV !== "production") {
//       payload.stack = err.stack;
//     }

//     res.status(status).json(payload);
//   }