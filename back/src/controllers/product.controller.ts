import type { Request, Response } from "express";

export const getProductById = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    id,
    name: "노트북",
    price: 1500000,
  });
};
